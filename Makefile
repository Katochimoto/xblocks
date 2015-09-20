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
	dist/xblocks.css \
	dist/xblocks.min.css \
	dist/xblocks.js \
	$(src_jsx_js)

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

dist/xblocks.css: src/xblocks.styl $(src_styl) node_modules
	$(NPM_BIN)/stylus --print --resolve-url --inline $< > $@
	$(NPM_BIN)/autoprefixer --browsers "> 1%, Firefox >= 14, Opera >= 12, Chrome >= 4" $@

dist/xblocks.min.css: dist/xblocks.css
	$(NPM_BIN)/stylus --compress < $< > $@

$(src_jsx_js): %.jsx.js: %.jsx node_modules
	$(NPM_BIN)/babel $< -o $@

dist/xblocks.js: node_modules $(src_jsx_js) $(src_js)
	$(NPM_BIN)/webpack src/xblocks.js dist/xblocks.js
	$(NPM_BIN)/webpack src/xblocks.js dist/xblocks.min.js --optimize-minimize

clean:
	rm -rf dist
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
