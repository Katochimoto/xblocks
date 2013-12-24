/* borschik:include:../node_modules/yate/lib/runtime.js */
/* borschik:include:../node_modules/borschik/js/borschik.js */
/* borschik:include:../node_modules/x-tag-core/dist/x-tag-core.js */





/* borschik:include:../node_modules/tv4/tv4.js */

/* borschik:include:lib/xblocks/attrs/target.schema.js */
/* borschik:include:lib/xblocks/attrs/theme.schema.js */
/* borschik:include:lib/xblocks/attrs/size.schema.js */

/* borschik:include:blocks/ico/ico.schema.js */
/* borschik:include:blocks/link/link.schema.js */
/* borschik:include:blocks/field/field.schema.js */
/* borschik:include:blocks/button/button.schema.js */



/* borschik:include:lib/require.js */

requirejs.config({
    baseUrl: 'build',
    shim: {
        'jquery/ui': [ 'jquery' ],
        'jquery/ui/datepicker': [ 'jquery', 'jquery/ui' ]
    }
});



/* borschik:include:lib/array.js */
/* borschik:include:lib/object.js */
/* borschik:include:lib/modernizr.js */
/* borschik:include:lib/modernizr.tests.js */
/* borschik:include:lib/yate.ext.js */

/* borschik:include:lib/xblocks.js */

//borschik.addLinks();

/* borschik:include:blocks/link/link.js */
/* borschik:include:blocks/ico/ico.js */
/* borschik:include:blocks/button/button.js */
/* borschik:include:blocks/field/field.js */




