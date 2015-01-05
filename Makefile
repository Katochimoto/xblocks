src_styl := $(shell find src -type f -name "*.styl")
src_jsx := $(shell find src -type f -name "*.jsx")
src_jsx_js := $(addsuffix .js, $(src_jsx))
src_js := $(shell find src -type f -name "*.js")

MAKEFLAGS+=-j 4

dir=-C $*

all: node_modules \
	bower_components \
	build/xblocks.css \
	build/xblocks.min.css \
	build/xblocks.js \
	build/xblocks.min.js \
	$(src_jsx_js)

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components


build/xblocks.css: src/xblocks.styl $(src_styl) node_modules
	./node_modules/.bin/stylus --print --resolve-url --inline $< > $@
	./node_modules/.bin/autoprefixer --browsers "> 1%, Firefox >= 14, Opera >= 12, Chrome >= 4" $@

build/xblocks.min.css: build/xblocks.css
	./node_modules/.bin/stylus --compress < $< > $@


$(src_jsx_js): %.jsx.js: %.jsx node_modules
	./node_modules/.bin/jsx --no-cache-dir --strip-types --harmony $< > $@

build/xblocks.js: src/xblocks.js $(src_jsx_js) $(src_js) node_modules
	./node_modules/.bin/borschik -m no -i $< -o $@

build/xblocks.min.js: build/xblocks.js
	./node_modules/.bin/borschik -i $< -o $@


clean:
	rm -f build/xblocks.css
	rm -f build/xblocks.min.css
	rm -f build/xblocks.js
	rm -f build/xblocks.min.js
	find src -type f -name "*.jsx.js" -exec rm -f {} \;


test: node_modules bower_components
	./node_modules/.bin/jshint .
	./node_modules/.bin/jscs .
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS


.PHONY: all clean test
