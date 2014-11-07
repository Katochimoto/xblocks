<br/>
Popup html element.

For positioning of the window is used [tether](http://github.hubspot.com/tether/)

```html
&#60;xb-popup
    optimizations-gpu="true|false"
    target=".classname"
    target-parent="true|false"
    target-attachment="middle center"
    target-modifier="visible"
    target-offset="..."
    attachment="middle center"
    offset="..."
    constraints="..."
    theme="normal|modal|island|error|blank"
    close>

...

&#60;/xb-popup>
```

JavaScript methods:
* setOptions(nextOptions) - override settings tether
* open([options])
* close()
* position() - recalculate the position of the popup

<p>&#160;</p>

Attributes:
* options - settings tether [read-only]
* tether - the object tether [read-only]
* opened - the popup is open [read-only]

<p>&#160;</p>

Events:
* xb-open - the popup is open and has focus
* xb-close - the popup closed and no focus

<p>&#160;</p>

<a href="#" class="popup" ref="popup1">open</a>

```html
&#60;xb-popup close>
    Body
&#60;/xb-popup>
```

<a href="#" class="popup" ref="popup2">open</a>

```html
&#60;xb-popup close>
    &#60;script type="text/x-template" ref="xb-popup-title">
        Title
    &#60;/script>

    &#60;script type="text/x-template">
        Body
    &#60;/script>

    &#60;script type="text/x-template" ref="xb-popup-buttons">
        &#60;xb-button>button&#60;/xb-button>
    &#60;/script>
&#60;/xb-popup>
```

<a href="#" class="popup" ref="popup3">open</a>

```html
&#60;xb-popup theme="modal" close>
    Body
&#60;/xb-popup>
```

<a href="#" class="popup" ref="popup4">open</a>

```html
&#60;xb-popup theme="island" close>
    Body
&#60;/xb-popup>
```

<a href="#" class="popup" ref="popup5">open</a>

```html
&#60;xb-popup theme="error" close>
    Body
&#60;/xb-popup>
```

<a href="#" class="popup" ref="popup6">open</a>

```html
&#60;xb-popup theme="blank" close>
    Body
&#60;/xb-popup>
```


<script type="text/x-template" ref="popup1">
    <xb-popup id="popup1" close>Body</xb-popup>
</script>

<script type="text/x-template" ref="popup2">
    <xb-popup close>
        <template ref="xb-popup-title">
            Title
        </template>

        <template>Body</template>

        <template ref="xb-popup-buttons">
            <xb-button>button</xb-button>
        </template>
    </xb-popup>
</script>

<script type="text/x-template" ref="popup3">
    <xb-popup id="popup3" theme="modal" close>Body</xb-popup>
</script>

<script type="text/x-template" ref="popup4">
    <xb-popup id="popup4" theme="island" close>Body</xb-popup>
</script>

<script type="text/x-template" ref="popup5">
    <xb-popup id="popup5" theme="error" close>Body</xb-popup>
</script>

<script type="text/x-template" ref="popup6">
    <xb-popup id="popup6" theme="blank" close>Body</xb-popup>
</script>

<script>
$('.popup').on('click', function(event) {
    event.preventDefault();
    var ref = $(this).attr('ref');
    var $popup = $('#' + ref);

    if (!$popup.length) {
        $popup = $($('script[ref="' + ref + '"]').html()).appendTo('body');
    }



    setTimeout(function() {
        $('xb-popup').each(function() {
            this.close();
        });

        $popup[0].open();
    }, 200);

    return false;
});
</script>
