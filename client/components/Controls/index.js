import React from 'react';
import { FormattedMessage } from 'react-intl';

import Ico from './Ico';
import Link from './Link';
import Button from './Button';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';
import Popup from './Popup';
import Menu from './Menu';

export default React.createClass({
    displayName: 'Controls',

    render() {
        return (
            <div>
                <h1 className="page-header">
                    <FormattedMessage id="menu.controls" />
                </h1>

                <Ico />
                <Link />
                <Button />
                <Checkbox />
                <Radio />
                <Input />
                <Popup />
                <Menu />
            </div>
        );
    }
});
