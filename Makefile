NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

src := $(shell find src -type f)

MAKEFLAGS+=-j 4

dir=-C $*

all: node_modules \
	bower_components \
	lodash \
	dist

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

dist: node_modules lodash $(src) webpack.config.js
	npm run prod
	touch dist

samples/dist: node_modules lodash $(src) webpack.config.js
	npm run dev
	touch samples/dist

clean:
	rm -rf dist
	rm -rf samples/dist
	rm -rf lodash

lodash: node_modules Makefile
	$(NPM_BIN)/lodash exports=umd include=debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign modularize -o $@
	touch lodash

test: node_modules bower_components lodash
	$(NPM_BIN)/eslint .
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

testall: node_modules bower_components lodash
	$(NPM_BIN)/eslint .
	./node_modules/karma/bin/karma start --single-run

.PHONY: all clean test testall
