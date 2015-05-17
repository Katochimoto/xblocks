NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

dir=-C $*

all: node_modules \
	bower_components \
	jsdoc

clean:
	rm -rf jsdoc

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

jsdoc: node_modules bower_components
	$(NPM_BIN)/jsdoc --debug -r -c jsdoc.json -d jsdoc
	touch touch

.PHONY: all clean
