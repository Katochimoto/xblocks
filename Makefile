NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

src_tmpl := $(shell find docs -type f -name "*.tmpl")
src_html := $(patsubst %.tmpl, %.html, $(src_tmpl))

all: node_modules \
	bower_components \
	jsdoc

jsdoc: node_modules bower_components
	$(NPM_BIN)/jsdoc --debug -r -c jsdoc.json -d jsdoc

clean:
	find jsdoc -type f -name "*.html" -exec rm -f {} \;

node_modules: package.json
	npm install
	touch node_modules

bower_components: bower.json
	bower install
	touch bower_components

$(src_html): %.html: %.tmpl node_modules
	$(NPM_BIN)/borschik -m no -i $< -o $@


.PHONY: all clean
