var yr=yr||require("yate/lib/runtime.js");(function(){var cmpNN=yr.cmpNN;var cmpSN=yr.cmpSN;var nodeset2xml=yr.nodeset2xml;var nodeset2boolean=yr.nodeset2boolean;var nodeset2attrvalue=yr.nodeset2attrvalue;var nodeset2scalar=yr.nodeset2scalar;var scalar2attrvalue=yr.scalar2attrvalue;var xml2attrvalue=yr.xml2attrvalue;var scalar2xml=yr.scalar2xml;var xml2scalar=yr.xml2scalar;var simpleScalar=yr.simpleScalar;var simpleBoolean=yr.simpleBoolean;var selectNametest=yr.selectNametest;var closeAttrs=yr.closeAttrs;var M=new yr.Module;var j0=[0,"*"];M.t0=function t0(m,c0,i0,l0,a0){var r0="";var current=[c0];r0+=closeAttrs(a0);r0+='<h1 class="'+"page-header anchor"+'" data-hash="'+"examples"+'">';r0+="Examples";r0+="</h1>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/icons"+'">';r0+="Icons";r0+="</h2>";r0+="To display icons, use the tag ";r0+="<code>";r0+="&lt;xb-ico&gt;";r0+="</code>";r0+=".";r0+="<p></p>";r0+='<div class="'+"row"+'">';r0+='<div class="'+"col-md-3"+'">';r0+='<ul class="'+"list-unstyled"+'">';r0+='<li><xb-ico size="'+"s"+'" type="'+"help"+'"></xb-ico>'+" help"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"attention"+'"></xb-ico>'+" attention"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"close"+'"></xb-ico>'+" close"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"check"+'"></xb-ico>'+" check"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"download"+'"></xb-ico>'+" download"+"</li>";r0+='<li><span style="'+"background-color:#000;"+'"><xb-ico size="'+"s"+'" type="'+"download-white"+'"></xb-ico></span>'+" download-white"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"twitter"+'"></xb-ico>'+" twitter"+"</li>";r0+="</ul>";r0+="</div>";r0+='<div class="'+"col-md-3"+'">';r0+='<ul class="'+"list-unstyled"+'">';r0+='<li><xb-ico size="'+"s"+'" type="'+"three-dots"+'"></xb-ico>'+" three-dots"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"dropdown"+'"></xb-ico>'+" dropdown"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"eye"+'"></xb-ico>'+" eye"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"link"+'"></xb-ico>'+" link"+"</li>";r0+='<li><span style="'+"background-color:#000;"+'"><xb-ico size="'+"s"+'" type="'+"link-white"+'"></xb-ico></span>'+" link-white"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"vk"+'"></xb-ico>'+" vk"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"play"+'"></xb-ico>'+" play"+"</li>";r0+="</ul>";r0+="</div>";r0+='<div class="'+"col-md-3"+'">';r0+='<ul class="'+"list-unstyled"+'">';r0+='<li><xb-ico size="'+"s"+'" type="'+"mail"+'"></xb-ico>'+" mail"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"notification"+'">'+"test"+"</xb-ico>"+" notification"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"odnoklassniki"+'"></xb-ico>'+" odnoklassniki"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"pause"+'"></xb-ico>'+" pause"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"people"+'"></xb-ico>'+" people"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"trash"+'"></xb-ico>'+" trash"+"</li>";r0+='<li><span style="'+"background-color:#000;"+'"><xb-ico size="'+"s"+'" type="'+"trash-white"+'"></xb-ico></span>'+" trash-white"+"</li>";r0+="</ul>";r0+="</div>";r0+='<div class="'+"col-md-3"+'">';r0+='<ul class="'+"list-unstyled"+'">';r0+='<li><xb-ico size="'+"s"+'" type="'+"print"+'"></xb-ico>'+" print"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"remove"+'"></xb-ico>'+" remove"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"services"+'"></xb-ico>'+" services"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"settings"+'"></xb-ico>'+" settings"+"</li>";r0+='<li><xb-ico size="'+"s"+'" type="'+"upload"+'"></xb-ico>'+" upload"+"</li>";r0+='<li><span style="'+"background-color:#000;"+'"><xb-ico size="'+"s"+'" type="'+"upload-white"+'"></xb-ico></span>'+" upload-white"+"</li>";r0+="</ul>";r0+="</div>";r0+="</div>";r0+="<p></p>";r0+="Specify ";r0+="<code>";r0+='size="s"';r0+="</code>";r0+=" to display a small icon.";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-ico size="'+"s"+'" type="'+"help"+'"></xb-ico>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico size="s" type="help"&gt;&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Specify ";r0+="<code>";r0+='size="m"';r0+="</code>";r0+=" to display a big icon.";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-ico size="'+"m"+'" type="'+"print"+'"></xb-ico>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico size="m" type="print"&gt;&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='Icon "notification" may contain the value.';r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-ico type="'+"notification"+'" value="'+"test"+'"></xb-ico>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico type="notification" value="test"&gt;&lt;/xb-ico&gt;';r0+="<br/>";r0+='&lt;xb-ico type="notification"&gt;test&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="The icon can be active.";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-ico type="'+"remove"+'" active="'+"active"+'"></xb-ico>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico type="remove" active&gt;&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="The icon may not be available.";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-ico type="'+"twitter"+'" disabled="'+"disabled"+'"></xb-ico>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico type="twitter" disabled&gt;&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<a href="'+"#/controls/icons"+'">';r0+="See more info about icons.";r0+="</a>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/link"+'">';r0+="Link";r0+="</h2>";r0+="To display link, use the tag ";r0+="<code>";r0+="&lt;xb-link&gt;";r0+="</code>";r0+=".";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/buttons"+'">';r0+="Buttons";r0+="</h2>";r0+="To display buttons, use the tag ";r0+="<code>";r0+="&lt;xb-button&gt;";r0+="</code>";r0+=".";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-button theme="'+"normal"+'">'+"normal"+"</xb-button>";r0+=" ";r0+='<div style="'+"background-color:#000;display: inline-block;padding: 5px;"+'">';r0+='<xb-button theme="'+"pseudo-inverted"+'">'+"pseudo-inverted"+"</xb-button>";r0+="</div>";r0+=" ";r0+='<xb-button theme="'+"action"+'">'+"action"+"</xb-button>";r0+=" ";r0+='<xb-button theme="'+"pseudo"+'">'+"pseudo"+"</xb-button>";r0+=" ";r0+='<xb-button theme="'+"dark"+'">'+"dark"+"</xb-button>";r0+=" ";r0+='<xb-button theme="'+"promo"+'">'+"promo"+"</xb-button>";r0+=" ";r0+='<xb-button theme="'+"flying"+'">'+"flying"+"</xb-button>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-button theme="normal"&gt;normal&lt;/xb-button&gt;';r0+="<br/>";r0+='&lt;xb-button theme="flying"&gt;flying&lt;/xb-button&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Buttons can be of the following types:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-button type="'+"label"+'">'+"label"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"inline"+'">'+"inline"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"link"+'">'+"link"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"file"+'">'+"file"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"button"+'">'+"button"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"submit"+'">'+"submit"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"checkbox"+'">'+"checkbox"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"radio"+'">'+"radio"+"</xb-button>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-button type="label"&gt;label&lt;/xb-button&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="For the button you can specify the icon:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-button xb-ico-float="'+"left"+'" xb-ico-type="'+"help"+'">'+"button"+"</xb-button>";r0+=" ";r0+='<xb-button xb-ico-float="'+"right"+'" xb-ico-type="'+"download"+'">'+"button"+"</xb-button>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-button xb-ico-float="left" xb-ico-type="help"&gt;button&lt;/xb-button&gt;';r0+="<br/>";r0+='&lt;xb-button xb-ico-float="right" xb-ico-type="download"&gt;button&lt;/xb-button&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Button checkbox:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-button type="'+"checkbox"+'" name="'+"bt1"+'" value="'+"1"+'">'+"checkbox 1"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"checkbox"+'" name="'+"bt2"+'" value="'+"2"+'" checked="'+"checked"+'">'+"checkbox 2"+"</xb-button>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-button type="checkbox" name="bt1" value="1"&gt;checkbox 1&lt;/xb-button&gt;';r0+="<br/>";r0+='&lt;xb-button type="checkbox" name="bt2" value="2" checked&gt;checkbox 2&lt;/xb-button&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Button radio:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-button type="'+"radio"+'" name="'+"bt3"+'" value="'+"1"+'">'+"radio 1"+"</xb-button>";r0+=" ";r0+='<xb-button type="'+"radio"+'" name="'+"bt3"+'" value="'+"2"+'" checked="'+"checked"+'">'+"radio 2"+"</xb-button>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-button type="radio" name="bt3" value="1"&gt;radio 1&lt;/xb-button&gt;';r0+="<br/>";r0+='&lt;xb-button type="radio" name="bt3" value="2" checked&gt;radio 2&lt;/xb-button&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-button disabled="'+"disabled"+'">'+"disabled"+"</xb-button>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+="&lt;xb-button disabled&gt;disabled&lt;/xb-button&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<a href="'+"#/controls/buttons"+'">';r0+="See more info about buttons.";r0+="</a>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/checkbox"+'">';r0+="Checkbox";r0+="</h2>";r0+="To display checkbox, use the tag ";r0+="<code>";r0+="&lt;xb-checkbox&gt;";r0+="</code>";r0+=".";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-checkbox name="'+"cb1"+'" value="'+"1"+'" checked="'+"checked"+'">'+"checkbox 1"+"</xb-checkbox>";r0+=" ";r0+='<xb-checkbox name="'+"cb2"+'" value="'+"2"+'">'+"checkbox 2"+"</xb-checkbox>";r0+=" ";r0+='<xb-checkbox name="'+"cb3"+'" value="'+"3"+'" disabled="'+"disabled"+'">'+"checkbox 3"+"</xb-checkbox>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-checkbox name="cb1" value="1" checked&gt;checkbox 1&lt;/xb-checkbox&gt;';r0+="<br/>";r0+='&lt;xb-checkbox name="cb2" value="2"&gt;checkbox 2&lt;/xb-checkbox&gt;';r0+="<br/>";r0+='&lt;xb-checkbox name="cb3" value="3" disabled&gt;checkbox 3&lt;/xb-checkbox&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/radio"+'">';r0+="Radio";r0+="</h2>";r0+="To display radio, use the tag ";r0+="<code>";r0+="&lt;xb-radio&gt;";r0+="</code>";r0+=".";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-radio name="'+"radio1"+'" value="'+"1"+'" checked="'+"checked"+'">'+"radio 1"+"</xb-radio>";r0+=" ";r0+='<xb-radio name="'+"radio1"+'" value="'+"2"+'">'+"radio 2"+"</xb-radio>";r0+=" ";r0+='<xb-radio name="'+"radio1"+'" value="'+"3"+'" disabled="'+"disabled"+'">'+"radio 3"+"</xb-radio>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-radio name="radio" value="1" checked&gt;radio 1&lt;/xb-radio&gt;';r0+="<br/>";r0+='&lt;xb-radio name="radio" value="2"&gt;radio 2&lt;/xb-radio&gt;';r0+="<br/>";r0+='&lt;xb-radio name="radio" value="3" disabled&gt;radio 3&lt;/xb-radio&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/input"+'">';r0+="Input";r0+="</h2>";r0+="To display input, use the tag ";r0+="<code>";r0+="&lt;xb-input&gt;";r0+="</code>";r0+=".";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input value="'+"simple input"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input value="simple input"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input placeholder="'+"placeholder"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input placeholder="placeholder"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input value="'+"multiline"+'" multiline="'+"multiline"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input value="multiline" multiline&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input prefix="'+"prefix"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input prefix="prefix"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input postfix="'+"postfix"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input postfix="postfix"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input autosize="'+"autosize"+'" value="'+"autosize"+'"></xb-input>';r0+="<p></p>";r0+='<xb-input autosize="'+"autosize"+'" multiline="'+"multiline"+'" value="'+"autosize"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input autosize value="autosize"&gt;&lt;/xb-input&gt;';r0+="<br/>";r0+='&lt;xb-input autosize multiline value="autosize"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input readonly="'+"readonly"+'" value="'+"readonly"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input readonly value="readonly"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input disabled="'+"disabled"+'" value="'+"disabled"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input disabled value="disabled"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input reset="'+"reset"+'" value="'+"reset"+'"></xb-input>';r0+="<p></p>";r0+='<xb-input reset="'+"reset"+'" multiline="'+"multiline"+'" value="'+"reset"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input reset value="reset"&gt;&lt;/xb-input&gt;';r0+="<br/>";r0+='&lt;xb-input reset multiline value="reset"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input ghost="'+"ghost"+'" value="'+"ghost"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input ghost value="ghost"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-input xb-link="'+"link"+'" xb-link-href="'+"http://ya.ru"+'" xb-link-target="'+"_blank"+'"></xb-input>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-input xb-link="link" xb-link-href="http://ya.ru" xb-link-target="_blank"&gt;&lt;/xb-input&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/popup"+'">';r0+="Popup";r0+="</h2>";r0+="To display popup, use the tag ";r0+="<code>";r0+="&lt;xb-popup&gt;";r0+="</code>";r0+=".";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-popup close="'+"close"+'" id="'+"popup1"+'">';r0+="Popup body";r0+="</xb-popup>";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"popup1"+'">'+"show popup"+"</a>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+="&lt;xb-popup close&gt;";r0+="<br/>";r0+="   Popup body";r0+="<br/>";r0+="&lt;/xb-popup&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Complex window:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-popup close="'+"close"+'" id="'+"popup2"+'">';r0+='<script type="'+"text/x-template"+'" ref="'+"xb-popup-title"+'">';r0+="Title";r0+="</script>";r0+='<script type="'+"text/x-template"+'">';r0+="Body";r0+="</script>";r0+='<script type="'+"text/x-template"+'" ref="'+"xb-popup-buttons"+'">';r0+="<xb-button>"+"button"+"</xb-button>";r0+="</script>";r0+="</xb-popup>";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"popup2"+'">'+"show popup"+"</a>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+="&lt;xb-popup close&gt;";r0+="<br/>";r0+='    &lt;script type="text/x-template" ref="xb-popup-title"&gt;';r0+="<br/>";r0+="        Title";r0+="<br/>";r0+="    &lt;/script&gt;";r0+="<br/>";r0+='    &lt;script type="text/x-template"&gt;';r0+="<br/>";r0+="        Body";r0+="<br/>";r0+="    &lt;/script&gt;";r0+="<br/>";r0+='    &lt;script type="text/x-template" ref="xb-popup-buttons"&gt;';r0+="<br/>";r0+="        &lt;xb-button&gt;button&lt;/xb-button&gt;";r0+="<br/>";r0+="    &lt;/script&gt;";r0+="<br/>";r0+="&lt;/xb-popup&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-popup close="'+"close"+'" theme="'+"modal"+'" id="'+"popup3"+'">';r0+="Popup body";r0+="</xb-popup>";r0+='<xb-popup close="'+"close"+'" theme="'+"island"+'" id="'+"popup4"+'">';r0+="Popup body";r0+="</xb-popup>";r0+='<xb-popup close="'+"close"+'" theme="'+"error"+'" id="'+"popup5"+'">';r0+="Popup body";r0+="</xb-popup>";r0+='<xb-popup close="'+"close"+'" theme="'+"blank"+'" id="'+"popup6"+'">';r0+="Popup body";r0+="</xb-popup>";r0+="Themes: ";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"popup3"+'">'+"modal"+"</a>";r0+=" ";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"popup4"+'">'+"island"+"</a>";r0+=" ";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"popup5"+'">'+"error"+"</a>";r0+=" ";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"popup6"+'">'+"blank"+"</a>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-popup theme="modal" close&gt;';r0+="<br/>";r0+="   Popup body";r0+="<br/>";r0+="&lt;/xb-popup&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"examples/menu"+'">';r0+="Menu";r0+="</h2>";r0+="To display menu, use the tag ";r0+="<code>";r0+="&lt;xb-menu&gt;";r0+="</code>";r0+=".";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-menu id="'+"menu1"+'">';r0+='<xb-menuitem label="'+"label 1"+'">';r0+='<xb-menuitem label="'+"label 1.1"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 1.2"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 1.3"+'">';r0+='<xb-menuitem label="'+"label 1.3.1"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 1.3.2"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 1.3.3"+'"></xb-menuitem>';r0+="</xb-menuitem>";r0+="</xb-menuitem>";r0+='<xb-menuitem label="'+"label 2"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 3"+'"></xb-menuitem>';r0+="<xb-menuseparator></xb-menuseparator>";r0+='<xb-menuitem label="'+"label 4"+'" disabled="'+"disabled"+'"></xb-menuitem>';r0+="</xb-menu>";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"menu1"+'">'+"show menu"+"</a>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+="&lt;xb-menu&gt;";r0+="<br/>";r0+='    &lt;xb-menuitem label="label 1"&gt;';r0+="<br/>";r0+='        &lt;xb-menuitem label="label 1.1"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='        &lt;xb-menuitem label="label 1.2"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='        &lt;xb-menuitem label="label 1.3"&gt;';r0+="<br/>";r0+='            &lt;xb-menuitem label="label 1.3.1"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='            &lt;xb-menuitem label="label 1.3.2"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='            &lt;xb-menuitem label="label 1.3.3"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="        &lt;/xb-menuitem&gt;";r0+="<br/>";r0+="    &lt;/xb-menuitem&gt;";r0+="<br/>";r0+='    &lt;xb-menuitem label="label 2"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 3"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="    &lt;xb-menuseparator&gt;&lt;/xb-menuseparator&gt;";r0+="<br/>";r0+='    &lt;xb-menuitem label="label 4" disabled&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="&lt;/xb-menu&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Specify the size menu:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-menu id="'+"menu2"+'" size="'+"5"+'">';r0+='<xb-menuitem label="'+"label 1"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 2"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 3"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 4"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 5"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 6"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 7"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 8"+'"></xb-menuitem>';r0+="</xb-menu>";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"menu2"+'">'+"show menu"+"</a>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-menu size="5"&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 1"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 2"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 3"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 4"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 5"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 6"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 7"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 8"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="&lt;/xb-menu&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Icons in menu items:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-menu id="'+"menu3"+'">';r0+='<xb-menuitem label="'+"label 1"+'" xb-ico-type="'+"twitter"+'" xb-ico-float="'+"left"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 2"+'" xb-ico-type="'+"vk"+'" xb-ico-float="'+"right"+'"></xb-menuitem>';r0+="</xb-menu>";r0+='<a href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"menu3"+'">'+"show menu"+"</a>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+="&lt;xb-menu&gt;";r0+="<br/>";r0+='    &lt;xb-menuitem label="label 1" xb-ico-type="twitter" xb-ico-float="left"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 2" xb-ico-type="vk" xb-ico-float="right"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="&lt;/xb-menu&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Show menu for the target object:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<a id="'+"targetMenu4"+'" href="'+"#"+'" class="'+"popup-open label label-primary"+'" data-popup-id="'+"menu4"+'">';r0+="show menu for the target object";r0+="</a>";r0+='<xb-menu id="'+"menu4"+'" target="'+"#targetMenu4"+'" attachment="'+"top left"+'" target-attachment="'+"bottom left"+'">';r0+='<xb-menuitem label="'+"label 1"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 2"+'"></xb-menuitem>';r0+="</xb-menu>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;a id="targetMenu" href="#" onclick="document.getElementById(\'menu\').open();"&gt;';r0+="<br/>";r0+="    show menu for the target object";r0+="<br/>";r0+="&lt;/a&gt;";r0+="<br/><br/>";r0+='&lt;xb-menu id="menu" target="#targetMenu" attachment="top left" target-attachment="bottom left"&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 1"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 2"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="&lt;/xb-menu&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+="Context menu:";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-menu id="'+"menu5"+'" type="'+"context"+'">';r0+='<xb-menuitem label="'+"label 1"+'"></xb-menuitem>';r0+='<xb-menuitem label="'+"label 2"+'"></xb-menuitem>';r0+="</xb-menu>";r0+='<div contextmenu="'+"menu5"+'" class="'+"alert alert-info"+'" role="'+"alert"+'" style="'+"-webkit-user-select:none;user-select:none;"+'">';r0+="right click to display the context menu";r0+="</div>";r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-menu type="context" id="menuId"&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 1"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+='    &lt;xb-menuitem label="label 2"&gt;&lt;/xb-menuitem&gt;';r0+="<br/>";r0+="&lt;/xb-menu&gt;";r0+="<br/><br/>";r0+='&lt;span contextmenu="menuId"&gt;';r0+="<br/>";r0+="    right click to display the context menu";r0+="<br/>";r0+="&lt;/span&gt;";r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";return r0};M.t0.j=j0;M.t0.a=0;M.matcher={_content:{"*":["t0"]}};M.imports=["docs"];yr.register("examples",M)})();