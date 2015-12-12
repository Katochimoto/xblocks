import React from 'react';
import Code from 'ui/Code';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/popup">
                    "Popup"
                </h2>

                "To display popup, use the tag "
                <code>
                    "<xb-popup>"
                </code>
                "."

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-popup close="close" id="popup1">
                            "Popup body"
                        </xb-popup>
                        <a href="#" className="popup-open label label-primary" data-popup-id="popup1">show popup</a>
                    </div>
                    <Code className="panel-body">
                        {sample9}
                    </Code>
                </div>

                "Complex window:"

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-popup close="close" id="popup2">
                            <script type="text/x-template" ref="xb-popup-title">
                                "Title"
                            </script>

                            <script type="text/x-template">
                                "Body"
                            </script>

                            <script type="text/x-template" ref="xb-popup-buttons">
                                <xb-button>button</xb-button>
                            </script>
                        </xb-popup>
                        <a href="#" className="popup-open label label-primary" data-popup-id="popup2">show popup</a>
                    </div>
                    <Code className="panel-body">
                        {sample8}
                    </Code>
                </div>

                "Themes:"

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-popup close="close" theme="modal" id="popup3">
                            "Popup body"
                        </xb-popup>
                        <xb-popup close="close" theme="island" id="popup4">
                            "Popup body"
                        </xb-popup>
                        <xb-popup close="close" theme="error" id="popup5">
                            "Popup body"
                        </xb-popup>
                        <xb-popup close="close" theme="blank" id="popup6">
                            "Popup body"
                        </xb-popup>

                        <a href="#" className="popup-open label label-primary" data-popup-id="popup3">modal</a>
                        " "
                        <a href="#" className="popup-open label label-primary" data-popup-id="popup4">island</a>
                        " "
                        <a href="#" className="popup-open label label-primary" data-popup-id="popup5">error</a>
                        " "
                        <a href="#" className="popup-open label label-primary" data-popup-id="popup6">blank</a>
                    </div>
                    <Code className="panel-body">
                        {sample7}
                    </Code>
                </div>

                <a href="#/controls/popup">
                    "See more info about popup."
                </a>
            </div>
        );
    }
});
