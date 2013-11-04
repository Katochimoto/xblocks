TESTS=test/spec/*.js
NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

filesstyl=$(shell find $(CURDIR)/src -name '*.styl')
filescss=$(patsubst %.styl, %.css, $(filesstyl))
filesyate=$(shell find $(CURDIR)/src -name '*.yate')
filesjs=$(shell find $(CURDIR)/src -name '*.js')

all: npm yate javascript $(filescss)


$(filescss): %.css: %.styl npm
	node $(CURDIR)/bin/styl.js -styl=$< -css=$@

yate: $(filesyate) npm
	$(NPM_BIN)/yate $(CURDIR)/src/index.yate > lib/xblocks.yate.js

javascript: $(filesjs) npm
	$(NPM_BIN)/borschik --input=src/index.js --minimize=no --output=lib/xblocks.js

npm:
	npm install

#build:
#	./node_modules/.bin/requirer index.js strftime.js

#prod: build
#	./node_modules/.bin/uglifyjs -o strftime.min.js strftime.js

#test:
#	./node_modules/.bin/mocha --reporter dot $(TESTS)
#	./node_modules/.bin/jshint .
#	./node_modules/.bin/jscs .

.PHONY: all

#test
