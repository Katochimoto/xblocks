TESTS=test/spec/*.js
NPM_BIN=node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

#.SECONDEXPANSION:
STYL = $(shell find src -type f -regex '^[^_]*\.styl')
CSS = $(patsubst %.styl, %.css, $(STYL))
YATE = $(shell find src/blocks -type f -regex '^[^_]*\.yate')
YATE_JS = $(patsubst %.yate, %.yate.js, $(YATE))
JS = $(shell find src -type f -regex '^[^_]*\.js')

.PHONY: all clean test


all: node_modules src/xblocks.yate.js lib/xblocks.yate.js lib/xblocks.css lib/xblocks.js lib/freeze.json $(YATE_JS) $(CSS)

clean:
	rm -f lib/xblocks.js
	rm -f lib/_xblocks.js
	rm -f lib/xblocks.yate.js
	rm -f lib/_xblocks.yate.js
	rm -f lib/xblocks.css
	rm -f lib/_xblocks.css
	rm -f lib/freeze.json
	rm -rf lib/_
	find src -type f -regex '.*\.\(css\|yate\.js\|yate\.obj\)' -delete


### CSS ############################################

#$(CSS): dir=-C $*
$(CSS): node_modules
$(CSS): %.css: %.styl
	node bin/styl.js -input=$< -output=$@
	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)


lib/xblocks.css: $(CSS) node_modules
	find src -type f -regex '^[^_]*\.css' | sort -r | xargs cat > $@
	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)




### YATE ###########################################

src/xblocks.yate.js: src/xblocks.yate node_modules
	$(NPM_BIN)/yate --output=src/xblocks.yate.js src/xblocks.yate


$(YATE_JS): %.yate.js: %.yate node_modules src/xblocks.yate.js
	$(NPM_BIN)/yate --import=src/xblocks.yate.obj --output=$@ $<


lib/xblocks.yate.js: src/xblocks.yate.js $(YATE_JS) node_modules
	find src -type f -name '*.yate.js' | sort -r | xargs cat > $@
	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)



### FREEZE #########################################

lib/freeze.json: $(CSS) node_modules
	$(NPM_BIN)/borschik --tech=json --input=freeze.json --output=$@



### JS #############################################

lib/xblocks.js: src/index.js lib/freeze.json $(JS) node_modules
	$(NPM_BIN)/borschik --input=src/index.js --minimize=no --output=$@
	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)


node_modules: package.json
	npm install
	touch node_modules



#build:
#	./node_modules/.bin/requirer index.js strftime.js

#prod: build
#	./node_modules/.bin/uglifyjs -o strftime.min.js strftime.js

test:
	./node_modules/.bin/jshint .
	./node_modules/.bin/jscs .
#	./node_modules/.bin/mocha --reporter dot $(TESTS)



