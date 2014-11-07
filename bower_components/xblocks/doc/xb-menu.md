<br/>
Menu html element.

Inherit popup.

For positioning of the window is used [tether](http://github.hubspot.com/tether/).

Child elements can only be **xb-menuitem** and **xb-menuseparator**.

<p>&#160;</p>

<a href="#" class="menu" ref="menu1">open</a>

```html
&#60;xb-menu
    optimizations-gpu="true|false"
    target=".classname"
    target-parent="true|false"
    target-attachment="middle center"
    target-modifier="visible"
    target-offset="..."
    attachment="middle center"
    offset="..."
    constraints="...">

    &#60;xb-menuitem label="label 1">
        &#60;xb-menuitem label="label 1.1">&#60;/xb-menuitem>
        &#60;xb-menuitem label="label 1.2">&#60;/xb-menuitem>
        &#60;xb-menuitem label="label 1.3">&#60;/xb-menuitem>
    &#60;/xb-menuitem>
    &#60;xb-menuitem label="label 2">&#60;/xb-menuitem>
    &#60;xb-menuitem label="label 3">&#60;/xb-menuitem>
    &#60;xb-menuseparator>&#60;/xb-menuseparator>
    &#60;xb-menuitem label="label 4" disabled>&#60;/xb-menuitem>
&#60;/xb-menu>
```

<script type="text/x-template" ref="menu1">
    <xb-menu id="menu1">
        <xb-menuitem label="label 1">
            <xb-menuitem label="label 1.1"></xb-menuitem>
            <xb-menuitem label="label 1.2"></xb-menuitem>
            <xb-menuitem label="label 1.3"></xb-menuitem>
        </xb-menuitem>
        <xb-menuitem label="label 2"></xb-menuitem>
        <xb-menuitem label="label 3"></xb-menuitem>
        <xb-menuseparator></xb-menuseparator>
        <xb-menuitem label="label 4" disabled></xb-menuitem>
    </xb-menu>
</script>

<script>
$('.menu').on('click', function(event) {
    event.preventDefault();
    var ref = $(this).attr('ref');
    var $popup = $('#' + ref);

    if (!$popup.length) {
        $popup = $($('script[ref="' + ref + '"]').html()).appendTo('body');
    }



    setTimeout(function() {
        $('xb-menu').each(function() {
            this.close();
        });
        
        $popup[0].open();
    }, 200);

    return false;
});
</script>
