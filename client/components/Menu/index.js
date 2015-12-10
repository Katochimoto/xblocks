import _ from 'lodash';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import classSet from 'classnames';

export default React.createClass({
    displayName: 'Menu',

    mixins: [
        PureRenderMixin
    ],

    getInitialState: function () {
        return {
            items: [
                {
                    hash: '/getting-started',
                    title: 'Getting Started',
                    menu: {
                        items: [
                            {
                                hash: '/getting-started/quickstart',
                                title: 'Quick Start'
                            },
                            {
                                hash: '/getting-started/download',
                                title: 'Download'
                            },
                            {
                                hash: '/getting-started/templates',
                                title: 'Templates'
                            }
                        ]
                    }
                },

                {
                    hash: '/examples',
                    title: 'Examples',
                    menu: {
                        items: [
                            {
                                hash: '/examples/ico',
                                title: 'Ico'
                            },
                            {
                                hash: '/examples/link',
                                title: 'Link'
                            },
                            {
                                hash: '/examples/button',
                                title: 'Button'
                            },
                            {
                                hash: '/examples/checkbox',
                                title: 'Checkbox'
                            },
                            {
                                hash: '/examples/radio',
                                title: 'Radio'
                            },
                            {
                                hash: '/examples/input',
                                title: 'Input'
                            },
                            {
                                hash: '/examples/popup',
                                title: 'Popup'
                            },
                            {
                                hash: '/examples/menu',
                                title: 'Menu'
                            }
                        ]
                    }
                },

                {
                    hash: '/controls',
                    title: 'Controls',
                    menu: {
                        items: [
                            {
                                hash: '/controls/ico',
                                title: 'Ico'
                            },
                            {
                                hash: '/controls/link',
                                title: 'Link'
                            },
                            {
                                hash: '/controls/button',
                                title: 'Button'
                            },
                            {
                                hash: '/controls/checkbox',
                                title: 'Checkbox'
                            },
                            {
                                hash: '/controls/radio',
                                title: 'Radio'
                            },
                            {
                                hash: '/controls/input',
                                title: 'Input'
                            },
                            {
                                hash: '/controls/popup',
                                title: 'Popup'
                            },
                            {
                                hash: '/controls/menu',
                                title: 'Menu'
                            }
                        ]
                    }
                },
                {
                    hash: '/extensions',
                    title: 'Extensions',
                    menu: {
                        items: [
                            {
                                hash: '/extensions/writing-extensions',
                                title: 'Writing an Extension'
                            }
                        ]
                    }
                },
                {
                    hash: '/core',
                    title: 'Core'
                },
                {
                    hash: '/support',
                    title: 'Browser and device support'
                },
                {
                    hash: '/contributing',
                    title: 'Contributing'
                },
                {
                    hash: '/tests',
                    title: 'Running tests'
                }
            ]
        };
    },

    renderMenu: function (items, key) {
        key = key || 'menu';
        return (
            <ul className="nav nav-stacked" key={key}>
                {_.map(items, (item, itemKey) => {
                    return this.renderMenuItem(item, `${key}.${itemKey}`);
                })}
            </ul>
        );
    },

    renderMenuItem: function (item, key) {
        var href = this.props.history.createPath(item.hash);
        var find = (_.trimRight(this.props.location.pathname, '/') + '/').indexOf((_.trimRight(href, '/') + '/'));

        var classes = classSet({
            'active': find === 0
        });

        return (
            <li key={key} className={classes}>
                <Link to={href}>
                    {item.title}
                </Link>

                {item.menu ? this.renderMenu(item.menu.items, key) : null}
            </li>
        );
    },

    render: function () {
        return (
            <div className="col-sm-3 col-md-2 sidebar bs-docs-sidebar">
                {this.renderMenu(this.state.items)}
            </div>
        );
    }
});
