NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

src_styl := $(shell find src -type f -name "*.styl")
src_jsx := $(shell find src -type f -name "*.jsx")
src_jsx_js := $(addsuffix .js, $(src_jsx))
src_js := $(shell find src -type f -name "*.js" | grep -v ".jsx.js")

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
	$(NPM_BIN)/stylus --print --resolve-url --inline $< > $@
	$(NPM_BIN)/autoprefixer --browsers "> 1%, Firefox >= 14, Opera >= 12, Chrome >= 4" $@

build/xblocks.min.css: build/xblocks.css
	$(NPM_BIN)/stylus --compress < $< > $@


$(src_jsx_js): %.jsx.js: %.jsx node_modules
	$(NPM_BIN)/babel $< -o $@

build/xblocks.js: src/xblocks.js $(src_jsx_js) $(src_js) node_modules
	$(NPM_BIN)/borschik -m no -i $< -o $@

build/xblocks.min.js: build/xblocks.js
	$(NPM_BIN)/borschik -i $< -o $@


clean:
	rm -f build/xblocks.css
	rm -f build/xblocks.min.css
	rm -f build/xblocks.js
	rm -f build/xblocks.min.js
	find src -type f -name "*.jsx.js" -exec rm -f {} \;


test: node_modules bower_components
	$(NPM_BIN)/jshint .
	$(NPM_BIN)/jscs .
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

testall: node_modules bower_components
	$(NPM_BIN)/jshint .
	$(NPM_BIN)/jscs .
	./node_modules/karma/bin/karma start --single-run

.PHONY: all clean test testall
