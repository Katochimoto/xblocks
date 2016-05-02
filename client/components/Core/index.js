import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';

export default React.createClass({
    displayName: 'Core',

    render() {
        return (
            <div>
                <h1 className="page-header"><FormattedMessage id="menu.core" /></h1>
                <FormattedHTMLMessage id="core.descr0" />

                <h2 className="sub-header anchor" data-hash="block">
                    <FormattedMessage id="menu.block" />
                </h2>

                <h3><FormattedMessage id="core.core__create" /></h3>
                <p><FormattedHTMLMessage id="core.descr1" /></p>
                <p><FormattedHTMLMessage id="core.descr2" /></p>

                <h3><FormattedMessage id="core.core__events" /></h3>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <td className="text-info">xb-created</td>
                        <td><FormattedHTMLMessage id="core.core__events_created" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">xb-update</td>
                        <td><FormattedHTMLMessage id="core.core__events_update" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">xb-destroy</td>
                        <td><FormattedHTMLMessage id="core.core__events_destroy" /></td>
                    </tr>
                    </tbody>
                </table>

                <h3><FormattedMessage id="core.core__props" /></h3>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <td className="text-info">xtagName</td>
                        <td>string</td>
                        <td>readonly</td>
                        <td><FormattedHTMLMessage id="core.core__props_xtagName" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">mounted</td>
                        <td>boolean</td>
                        <td>readonly</td>
                        <td><FormattedHTMLMessage id="core.core__props_mounted" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">content</td>
                        <td>string</td>
                        <td></td>
                        <td><FormattedHTMLMessage id="core.core__props_content" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">attrs</td>
                        <td>object</td>
                        <td>readonly</td>
                        <td><FormattedHTMLMessage id="core.core__props_attrs" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">xprops</td>
                        <td>object</td>
                        <td>readonly</td>
                        <td><FormattedHTMLMessage id="core.core__props_xprops" /></td>
                    </tr>
                    <tr>
                        <td className="text-info">props</td>
                        <td>object</td>
                        <td>readonly</td>
                        <td><FormattedHTMLMessage id="core.core__props_props" /></td>
                    </tr>
                    </tbody>
                </table>

                <h3><FormattedMessage id="core.core__example" /></h3>
                <Code lang="javascript" value={sample1} />

                <h2 className="sub-header anchor" data-hash="view">
                    <FormattedMessage id="menu.view" />
                </h2>
                <p><FormattedHTMLMessage id="core.descr3" /></p>

                <h3><FormattedMessage id="core.core__view_example" /></h3>
                <Code lang="javascript" value={sample2} />
            </div>
        );
    }
});
