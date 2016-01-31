NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

src := $(shell find src -type f)

MAKEFLAGS+=-j 4

dir=-C $*

all: node_modules \
	bower_components \
	dist

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

dist: node_modules $(src) webpack.config.js
	npm run prod
	touch dist

clean:
	rm -rf dist

test: node_modules bower_components
	$(NPM_BIN)/eslint .
	./node_modules/karma/bin/karma start --single-run --browsers PhantomJS

testall: node_modules bower_components
	$(NPM_BIN)/eslint .
	./node_modules/karma/bin/karma start --single-run

.PHONY: all clean test testall
