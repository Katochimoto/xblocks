NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

jsdoc: node_modules
	$(NPM_BIN)/jsdoc --debug -r -c jsdoc.json -d .

node_modules: package.json
	npm install
	touch node_modules

.PHONY: jsdoc