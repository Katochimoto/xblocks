NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

src_yate := $(shell find docs -type f -name "*.yate")
src_js := $(patsubst %.yate, %.js, $(src_yate))

all: node_modules \
	bower_components \
	docs/docs.yate.js \
	jsdoc \
	$(src_js)

jsdoc: node_modules bower_components
	$(NPM_BIN)/jsdoc --debug -r -c jsdoc.json -d jsdoc

clean:
	find jsdoc -type f -name "*.html" -exec rm -f {} \;
	find docs -type f -name "*.js" -exec rm -f {} \;
	find docs -type f -name "*.yate.obj" -exec rm -f {} \;

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

docs/docs.yate.js: docs/docs.yate node_modules
	$(NPM_BIN)/yate $< > $@

$(src_js): %.js: %.yate node_modules docs/docs.yate.js
	$(NPM_BIN)/yate $< --import docs/docs.yate.obj > $@
	$(NPM_BIN)/uglifyjs -o $@ -- $@


.PHONY: all clean
