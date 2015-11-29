import './index.styl';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navbar from 'components/Navbar';
import Menu from 'components/Menu';

export default React.createClass({
    displayName: 'App',

    mixins: [ PureRenderMixin ],

    render: function () {
        return (
            <div>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <Menu {...this.props} />

                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
