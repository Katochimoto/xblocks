NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

src_styl := $(shell find src -type f -name "*.styl")
src_js := $(shell find src -type f -regex ".*\.\(js\|jsx\)")

MAKEFLAGS+=-j 4

dir=-C $*

all: node_modules \
	bower_components \
	lodash \
	dist/xblocks.css \
	dist/xblocks.min.css \
	dist

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

dist: node_modules lodash $(src_js) webpack.config.js
	$(NPM_BIN)/webpack --progress
	touch dist

clean:
	rm -rf dist
	rm -rf lodash

lodash: node_modules Makefile
	$(NPM_BIN)/lodash exports=umd include=debounce,throttle,merge,isEmpty,pick,transform modularize -o $@
	touch lodash

test: node_modules bower_components lodash
	$(NPM_BIN)/jshint .
	$(NPM_BIN)/jscs .
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

testall: node_modules bower_components lodash
	$(NPM_BIN)/jshint .
	$(NPM_BIN)/jscs .
	./node_modules/karma/bin/karma start --single-run

.PHONY: all clean test testall
