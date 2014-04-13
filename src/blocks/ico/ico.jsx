/** @jsx React.DOM */
(function(xblocks, React) {

xblocks.view.register('xb-ico', React.createClass({
    displayName: 'xb-ico',

    getInitialState: function() {
        return this.props.element.xblock.getState();
    },

    render: function() {
        var cx = React.addons.classSet;
        var classes = {
            'xb-ico': true,
            'xb-ico_active': this.state.active,
            'is-disabled': this.state.disabled
        };

        if (this.state.type) {
            classes['xb-ico_type_' + this.state.type] = true;
        }

        if (this.state.size) {
            classes['xb-ico_size_' + this.state.size] = true;
        }

        classes = cx(classes);

        var value = this.state.value || ' ';

        return (
            <span className={classes}>{value}</span>
        );
    }
}));

}(xblocks, React));
