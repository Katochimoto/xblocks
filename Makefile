TESTS=test/spec/*.js
NPM_BIN=node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

#.SECONDEXPANSION:
#STYL = $(shell find src -type f -regex '^[^_]*\.styl')
#CSS = $(patsubst %.styl, %.css, $(STYL))
YATE = $(shell find src/blocks -type f -regex '^[^_]*\.yate')
YATE_JS = $(patsubst %.yate, %.yate.js, $(YATE))
JS = $(shell find src -type f -regex '^[^_]*\.js')

.PHONY: all clean test


all: node_modules build/xblocks.yate.js build/_xblocks.css build/xblocks.yate.js src/lib/yate/xblocks.yate.js $(YATE_JS)


#build/xblocks.js build/freeze.json

clean:
	rm -f build/xblocks.js
	rm -f build/_xblocks.js
	rm -f build/xblocks.yate.js
	rm -f build/_xblocks.yate.js
	rm -f build/xblocks.css
	rm -f build/_xblocks.css
	rm -f build/freeze.json
	rm -rf build/_
	find src -type f -regex '.*\.\(css\|yate\.js\|yate\.obj\)' -delete


### CSS ############################################

build/_xblocks.css: node_modules
build/_xblocks.css: $(shell find src -type f -name '*\.styl')
	node bin/styl.js -input=src/index.styl -output=build/xblocks.css
	$(NPM_BIN)/borschik --input=build/xblocks.css --output=build/_xblocks.css


#$(CSS): dir=-C $*
#$(CSS): node_modules
#$(CSS): %.css: %.styl
#	node bin/styl.js -input=$< -output=$@
#	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)


#build/xblocks.css: $(CSS) node_modules
#	find src -type f -regex '^[^_]*\.css' | sort -r | xargs cat > $@
#	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)




### YATE ###########################################


src/lib/yate/xblocks.yate.js: node_modules
src/lib/yate/xblocks.yate.js: src/lib/yate/xblocks.yate
	$(NPM_BIN)/yate --output=$@ src/lib/yate/xblocks.yate

$(YATE_JS): node_modules
$(YATE_JS): src/lib/yate/xblocks.yate.js
$(YATE_JS): %.yate.js: %.yate
	$(NPM_BIN)/yate --import=src/lib/yate/xblocks.yate.obj --output=$@ $<


build/xblocks.yate.js: node_modules
build/xblocks.yate.js: src/lib/yate/xblocks.yate.js $(YATE_JS)
	find src -type f -name '*.yate.js' | sort -r | xargs cat > $@
	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)



### FREEZE #########################################

#build/freeze.json: $(CSS) node_modules
#	$(NPM_BIN)/borschik --tech=json --input=freeze.json --output=$@



### JS #############################################

#build/xblocks.js: src/index.js build/freeze.json $(JS) node_modules
#	$(NPM_BIN)/borschik --input=src/index.js --minimize=no --output=$@
#	$(NPM_BIN)/borschik --input=$@ --output=$(dir $@)_$(notdir $@)


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



