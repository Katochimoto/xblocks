NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

jsdoc: node_modules bower_components
	$(NPM_BIN)/jsdoc --debug -r -c jsdoc.json -d jsdoc


.PHONY: jsdoc
