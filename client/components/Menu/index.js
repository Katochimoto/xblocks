import _ from 'lodash';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import classSet from 'classnames';

export default React.createClass({
    displayName: 'Menu',

    mixins: [
        PureRenderMixin
    ],

    getInitialState() {
        return {
            items: [
                {
                    hash: '/getting-started',
                    title: <FormattedMessage id="menu.getting_started" />,
                    menu: {
                        items: [
                            {
                                hash: '/getting-started/quickstart',
                                title: <FormattedMessage id="menu.quickstart" />
                            },
                            {
                                hash: '/getting-started/download',
                                title: <FormattedMessage id="menu.download" />
                            },
                            {
                                hash: '/getting-started/templates',
                                title: <FormattedMessage id="menu.templates" />
                            }
                        ]
                    }
                },

                {
                    hash: '/examples',
                    title: <FormattedMessage id="menu.examples" />,
                    menu: {
                        items: [
                            {
                                hash: '/examples/ico',
                                title: <FormattedMessage id="menu.ico" />
                            },
                            {
                                hash: '/examples/link',
                                title: <FormattedMessage id="menu.link" />
                            },
                            {
                                hash: '/examples/button',
                                title: <FormattedMessage id="menu.button" />
                            },
                            {
                                hash: '/examples/checkbox',
                                title: <FormattedMessage id="menu.checkbox" />
                            },
                            {
                                hash: '/examples/radio',
                                title: <FormattedMessage id="menu.radio" />
                            },
                            {
                                hash: '/examples/input',
                                title: <FormattedMessage id="menu.input" />
                            },
                            {
                                hash: '/examples/popup',
                                title: <FormattedMessage id="menu.popup" />
                            },
                            {
                                hash: '/examples/menu',
                                title: <FormattedMessage id="menu.menu" />
                            }
                        ]
                    }
                },

                {
                    hash: '/controls',
                    title: <FormattedMessage id="menu.controls" />,
                    menu: {
                        items: [
                            {
                                hash: '/controls/ico',
                                title: <FormattedMessage id="menu.ico" />
                            },
                            {
                                hash: '/controls/link',
                                title: <FormattedMessage id="menu.link" />
                            },
                            {
                                hash: '/controls/button',
                                title: <FormattedMessage id="menu.button" />
                            },
                            {
                                hash: '/controls/checkbox',
                                title: <FormattedMessage id="menu.checkbox" />
                            },
                            {
                                hash: '/controls/radio',
                                title: <FormattedMessage id="menu.radio" />
                            },
                            {
                                hash: '/controls/input',
                                title: <FormattedMessage id="menu.input" />
                            },
                            {
                                hash: '/controls/popup',
                                title: <FormattedMessage id="menu.popup" />
                            },
                            {
                                hash: '/controls/menu',
                                title: <FormattedMessage id="menu.menu" />
                            }
                        ]
                    }
                },
                {
                    hash: '/extensions',
                    title: <FormattedMessage id="menu.extensions" />,
                    menu: {
                        items: [
                            {
                                hash: '/extensions/writing-extensions',
                                title: <FormattedMessage id="menu.writing_extensions" />
                            }
                        ]
                    }
                },
                {
                    hash: '/core',
                    title: <FormattedMessage id="menu.core" />
                },
                {
                    hash: '/support',
                    title: <FormattedMessage id="menu.support" />
                },
                {
                    hash: '/contributing',
                    title: <FormattedMessage id="menu.contributing" />
                },
                {
                    hash: '/tests',
                    title: <FormattedMessage id="menu.tests" />
                }
            ]
        };
    },

    renderMenu(items, key) {
        key = key || 'menu';
        return (
            <ul className="nav nav-stacked" key={key}>
                {_.map(items, (item, itemKey) => {
                    return this.renderMenuItem(item, `${key}.${itemKey}`);
                })}
            </ul>
        );
    },

    renderMenuItem(item, key) {
        var href = this.props.history.createPath(item.hash);
        var find = (_.trimEnd(this.props.location.pathname, '/') + '/').indexOf((_.trimEnd(href, '/') + '/'));

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

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar bs-docs-sidebar">
                {this.renderMenu(this.state.items)}
            </div>
        );
    }
});
