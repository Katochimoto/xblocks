import React from 'react';

import Ico from './Ico';
import Link from './Link';
/*
import Button from './Button';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';
import Popup from './Popup';
import Menu from './Menu';
*/

export default React.createClass({
    displayName: 'Examples',

    render: function () {
        return (
            <div>
                <h1 className="page-header anchor" data-hash="examples">
                    Examples
                </h1>

                <Ico />
                <Link />
            </div>
        );
    }
});

/*
<Button />
<Checkbox />
<Radio />
<Input />
<Popup />
<Menu />
 */
