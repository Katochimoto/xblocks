/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBMenuitem = xblocks.view.register('xb-menuitem', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menuitem',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'label': React.PropTypes.string.isRequired,
            'disabled': React.PropTypes.bool,
            'selected': React.PropTypes.bool,
            'opened': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'selected': false,
                'opened': false
            };
        },

        getInitialState: function() {
            return {
                'selected': this.props.selected,
                'opened': this.props.opened
            };
        },

        componentWillReceiveProps: function(nextProps) {
            this.setState({
                'selected': nextProps.selected,
                'opened': nextProps.opened
            });
        },

        componentDidMount: function() {
            this._createSubmenu();
        },

        componentWillUnmount: function() {
            this._removeSubmenu();
        },

        componentDidUpdate: function(prevProps, prevState) {
            // TODO открыть и закрыть вложенное окно можно только если menuitem сам находится в открытом окне

            if (this.submenu) {
                if (!prevState.opened && this.state.opened) {
                    this.submenu.open();

                } else if (prevState.opened && !this.state.opened) {
                    this.submenu.close();
                }
            }
        },



        _getSubmenuTargetClass: function() {
            return '_menuitem-target-' + this.props._uid;
        },

        _checkCreateSubmenu: function() {
            return Boolean(this.props.children.trim());
        },

        // TODO возможно стоит вынести инициализацию подменю в момент открытия меню-предка
        _createSubmenu: function() {
            if (!this._checkCreateSubmenu()) {
                return;
            }

            var menu = global.document.createElement('xb-menu');
            menu.setAttribute('target-attachment', 'top right');
            menu.setAttribute('attachment', 'top left');
            menu.setAttribute('target', '.' + this._getSubmenuTargetClass());
            menu.setAttribute('constraints', encodeURIComponent(JSON.stringify([{
                'to': 'scrollParent',
                'attachment': 'together'
            }])));

            menu.innerHTML = this.props.children;

            this.submenu = global.document.body.appendChild(menu);
            return this.submenu;
        },

        _removeSubmenu: function() {
            if (this.submenu && this.submenu.parentNode) {
                this.submenu.parentNode.removeChild(this.submenu);
                this.submenu = null;
            }
        },

        render: function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled': this.props.disabled,
                '_selected': this.state.selected
            };

            if (this._checkCreateSubmenu()) {
                classes[this._getSubmenuTargetClass()] = true;
                classes['_submenu'] = true;
            }

            classes = React.addons.classSet(classes);

            return (
                <div className={classes}>
                    <span>{this.props.label}</span>
                </div>
            );
        }
    }
]);
