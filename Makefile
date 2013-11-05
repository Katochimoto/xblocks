TESTS=test/spec/*.js
NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

STYL = $(shell find $(CURDIR)/src/blocks -type f -regex '^[^_]*\.styl')
CSS = $(patsubst %.styl, %.css, $(STYL))
YATE = $(shell find $(CURDIR)/src -type f -regex '^[^_]*\.yate')
JS = $(shell find $(CURDIR)/src -type f -regex '^[^_]*\.js')

all: npm lib/xblocks.yate.js lib/xblocks.js $(CSS)

clean:
	rm lib/xblocks.js
	rm lib/xblocks.yate.js
	rm -rf lib/blocks


$(CSS): %.css: %.styl npm
	mkdir -p $(CURDIR)/lib/blocks
	node $(CURDIR)/bin/styl.js -styl=$< -css=$(CURDIR)/lib/blocks/$(notdir $@)


lib/xblocks.yate.js: $(YATE) npm
	$(NPM_BIN)/yate src/index.yate > $@


lib/xblocks.js: $(JS) npm
	$(NPM_BIN)/borschik --input=src/index.js --minimize=no --output=$@


npm:
	npm install



#build:
#	./node_modules/.bin/requirer index.js strftime.js

#prod: build
#	./node_modules/.bin/uglifyjs -o strftime.min.js strftime.js

test:
	./node_modules/.bin/jshint .
	./node_modules/.bin/jscs .
#	./node_modules/.bin/mocha --reporter dot $(TESTS)

.PHONY: all clean test

