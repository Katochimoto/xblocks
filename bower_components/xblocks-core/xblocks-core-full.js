/* jshint -W067 */
/* jshint unused: false */
(function(global, undefined) {
    'use strict';

    if (!notUseNative() && (global.msSetImmediate || global.setImmediate)) {
        if (!global.setImmediate) {
            global.setImmediate = global.msSetImmediate;
            global.clearImmediate = global.msClearImmediate;
        }

        return;
    }

    var doc = global.document;
    var slice = Array.prototype.slice;
    var toString = Object.prototype.toString;
    var Timer = {};

    Timer.polifill = {};
    Timer.nextId = 1;
    Timer.tasks = {};
    Timer.lock = false;

    Timer.run = function(handleId) {
        if (Timer.lock) {
            global.setTimeout( Timer.wrap( Timer.run, handleId ), 0 );

        } else {
            var task = Timer.tasks[ handleId ];

            if (task) {
                Timer.lock = true;

                try {
                    task();

                } finally {
                    Timer.clear( handleId );
                    Timer.lock = false;
                }
            }
        }
    };

    Timer.wrap = function(handler) {
        var args = slice.call(arguments, 1);

        return function() {
            handler.apply(undefined, args);
        };
    };

    Timer.create = function(args) {
        Timer.tasks[ Timer.nextId ] = Timer.wrap.apply(undefined, args);
        return Timer.nextId++;
    };

    Timer.clear = function(handleId) {
        delete Timer.tasks[ handleId ];
    };

    /* polifill/messageChannel.js begin */
/* global global, Timer */

Timer.polifill.messageChannel = function() {
    var channel = new global.MessageChannel();

    channel.port1.onmessage = function(event) {
        Timer.run(Number(event.data));
    };

    return function() {
        var handleId = Timer.create(arguments);
        channel.port2.postMessage(handleId);
        return handleId;
    };
};

/* polifill/messageChannel.js end */

    /* polifill/nextTick.js begin */
/* global global, Timer */

Timer.polifill.nextTick = function() {
    return function() {
        var handleId = Timer.create(arguments);
        global.process.nextTick( Timer.wrap( Timer.run, handleId ) );
        return handleId;
    };
};

/* polifill/nextTick.js end */

    /* polifill/postMessage.js begin */
/* global global, Timer */

Timer.polifill.postMessage = function() {
    var messagePrefix = 'setImmediate$' + Math.random() + '$';

    var onGlobalMessage = function(event) {
        if (event.source === global &&
            typeof(event.data) === 'string' &&
            event.data.indexOf(messagePrefix) === 0) {

            Timer.run(Number(event.data.slice(messagePrefix.length)));
        }
    };

    if (global.addEventListener) {
        global.addEventListener('message', onGlobalMessage, false);

    } else {
        global.attachEvent('onmessage', onGlobalMessage);
    }

    return function() {
        var handleId = Timer.create(arguments);
        global.postMessage(messagePrefix + handleId, '*');
        return handleId;
    };
};

/* polifill/postMessage.js end */

    /* polifill/readyStateChange.js begin */
/* global Timer, doc */

Timer.polifill.readyStateChange = function() {
    var html = doc.documentElement;

    return function() {
        var handleId = Timer.create(arguments);
        var script = doc.createElement('script');

        script.onreadystatechange = function() {
            Timer.run(handleId);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
        };

        html.appendChild(script);

        return handleId;
    };
};

/* polifill/readyStateChange.js end */

    /* polifill/setTimeout.js begin */
/* global global, Timer */

Timer.polifill.setTimeout = function() {
    return function() {
        var handleId = Timer.create(arguments);
        global.setTimeout( Timer.wrap( Timer.run, handleId ), 0 );
        return handleId;
    };
};

/* polifill/setTimeout.js end */




    function canUsePostMessage() {
        if (global.postMessage && !global.importScripts) {
            var asynch = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                asynch = false;
            };
            global.postMessage('', '*');
            global.onmessage = oldOnMessage;
            return asynch;
        }
    }

    function notUseNative() {
        // @see http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
        return (global.navigator && /Trident/.test(global.navigator.userAgent));
    }


    var polifill;

    if (notUseNative()) {
        polifill = 'setTimeout';

    // Don't get fooled by e.g. browserify environments.
    // For Node.js before 0.9
    } else if (toString.call(global.process) === '[object process]') {
        polifill = 'nextTick';

    // For non-IE10 modern browsers
    } else if (canUsePostMessage()) {
        polifill = 'postMessage';

    // For web workers, where supported
    } else if (global.MessageChannel) {
        polifill = 'messageChannel';

    // For IE 6–8
    } else if (doc && ('onreadystatechange' in doc.createElement('script'))) {
        polifill = 'readyStateChange';

    // For older browsers
    } else {
        polifill = 'setTimeout';
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = (attachTo && attachTo.setTimeout ? attachTo : global);

    attachTo.setImmediate = Timer.polifill[ polifill ]();
    attachTo.setImmediate.usePolifill = polifill;
    attachTo.msSetImmediate = attachTo.setImmediate;

    attachTo.clearImmediate = Timer.clear;
    attachTo.msClearImmediate = Timer.clear;

}(function() {
    return this || (1, eval)('this');
}()));
/* jshint unused: false */

window.Platform = {};
var logFlags = {
    //dom: true
    //data: true
};

/* xtag/performance.js begin */
(function(global) {
    if (typeof(global.performance) === 'undefined') {
        global.performance = {};
    }

    if (!global.performance.now) {
        var nowOffset;

        if (global.performance.timing && global.performance.timing.navigationStart) {
            nowOffset = global.performance.timing.navigationStar;

        } else {
            nowOffset = Date.now();
        }

        global.performance.now = function() {
            return (Date.now() - nowOffset);
        };
    }

}(window));

/* xtag/performance.js end */

/* xtag/DOMAttrModified.js begin */
/**
 * @see http://engineering.silk.co/post/31921750832/mutation-events-what-happens
 */
(function() {
    var attrModifiedWorks = false;
    var listener = function() {
        attrModifiedWorks = true;
    };

    var doc = document.documentElement;
    doc.addEventListener('DOMAttrModified', listener, false);
    doc.setAttribute('___TEST___', true);
    doc.removeEventListener('DOMAttrModified', listener, false);
    doc.removeAttribute('___TEST___', true);

    if (attrModifiedWorks) {
        return;
    }

    var proto = Element.prototype;

    proto.__setAttribute = proto.setAttribute;
    proto.setAttribute = function(attrName, newVal) {
        var prevVal = this.getAttribute(attrName);
        this.__setAttribute(attrName, newVal);
        newVal = this.getAttribute(attrName);
        if (newVal != prevVal) {
            var evt = document.createEvent('MutationEvent');
            evt.initMutationEvent(
                'DOMAttrModified',
                true,
                false,
                this,
                prevVal || '',
                newVal || '',
                attrName,
                (prevVal == null) ? evt.ADDITION : evt.MODIFICATION
            );
            this.dispatchEvent(evt);
        }
    };

    proto.__removeAttribute = proto.removeAttribute;
    proto.removeAttribute = function(attrName) {
        var prevVal = this.getAttribute(attrName);
        this.__removeAttribute(attrName);
        var evt = document.createEvent('MutationEvent');
        evt.initMutationEvent(
            'DOMAttrModified',
            true,
            false,
            this,
            prevVal,
            '',
            attrName,
            evt.REMOVAL
        );
        this.dispatchEvent(evt);
    };

}());

/* xtag/DOMAttrModified.js end */


/* ../node_modules/dom-token-list-polyfill/src/token-list.js begin */
// DOMTokenList polyfill for IE9
(function () {

if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

var prototype = Array.prototype,
    indexOf = prototype.indexOf,
    slice = prototype.slice,
    push = prototype.push,
    splice = prototype.splice,
    join = prototype.join;

function DOMTokenList(el) {
  this._element = el;
  if (el.className != this._classCache) {
    this._classCache = el.className;

    if (!this._classCache) return;

      // The className needs to be trimmed and split on whitespace
      // to retrieve a list of classes.
      var classes = this._classCache.replace(/^\s+|\s+$/g,'').split(/\s+/),
        i;
    for (i = 0; i < classes.length; i++) {
      push.call(this, classes[i]);
    }
  }
};

function setToClassName(el, classes) {
  el.className = classes.join(' ');
}

DOMTokenList.prototype = {
  add: function(token) {
    if(this.contains(token)) return;
    push.call(this, token);
    setToClassName(this._element, slice.call(this, 0));
  },
  contains: function(token) {
    return indexOf.call(this, token) !== -1;
  },
  item: function(index) {
    return this[index] || null;
  },
  remove: function(token) {
    var i = indexOf.call(this, token);
     if (i === -1) {
       return;
     }
    splice.call(this, i, 1);
    setToClassName(this._element, slice.call(this, 0));
  },
  toString: function() {
    return join.call(this, ' ');
  },
  toggle: function(token) {
    if (indexOf.call(this, token) === -1) {
      this.add(token);
    } else {
      this.remove(token);
    }
  }
};

window.DOMTokenList = DOMTokenList;

function defineElementGetter (obj, prop, getter) {
  if (Object.defineProperty) {
    Object.defineProperty(obj, prop,{
      get : getter
    })
  } else {
    obj.__defineGetter__(prop, getter);
  }
}

defineElementGetter(Element.prototype, 'classList', function () {
  return new DOMTokenList(this);
});

})();


/* ../node_modules/dom-token-list-polyfill/src/token-list.js end */

/* ../node_modules/webcomponents.js/src/WeakMap/WeakMap.js begin */
/*
 * Copyright 2012 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

if (typeof WeakMap === 'undefined') {
  (function() {
    var defineProperty = Object.defineProperty;
    var counter = Date.now() % 1e9;

    var WeakMap = function() {
      this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
    };

    WeakMap.prototype = {
      set: function(key, value) {
        var entry = key[this.name];
        if (entry && entry[0] === key)
          entry[1] = value;
        else
          defineProperty(key, this.name, {value: [key, value], writable: true});
        return this;
      },
      get: function(key) {
        var entry;
        return (entry = key[this.name]) && entry[0] === key ?
            entry[1] : undefined;
      },
      delete: function(key) {
        var entry = key[this.name];
        if (!entry || entry[0] !== key) return false;
        entry[0] = entry[1] = undefined;
        return true;
      },
      has: function(key) {
        var entry = key[this.name];
        if (!entry) return false;
        return entry[0] === key;
      }
    };

    window.WeakMap = WeakMap;
  })();
}

/* ../node_modules/webcomponents.js/src/WeakMap/WeakMap.js end */

/* ../node_modules/webcomponents.js/src/MutationObserver/MutationObserver.js begin */
/*
 * Copyright 2012 The Polymer Authors. All rights reserved.
 * Use of this source code is goverened by a BSD-style
 * license that can be found in the LICENSE file.
 */

(function(global) {

  var registrationsTable = new WeakMap();

  var setImmediate;

  // As much as we would like to use the native implementation, IE
  // (all versions) suffers a rather annoying bug where it will drop or defer
  // callbacks when heavy DOM operations are being performed concurrently.
  //
  // For a thorough discussion on this, see:
  // http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
  if (/Trident/.test(navigator.userAgent)) {
    // Sadly, this bug also affects postMessage and MessageQueues.
    //
    // We would like to use the onreadystatechange hack for IE <= 10, but it is
    // dangerous in the polyfilled environment due to requiring that the
    // observed script element be in the document.
    setImmediate = setTimeout;

  // If some other browser ever implements it, let's prefer their native
  // implementation:
  } else if (window.setImmediate) {
    setImmediate = window.setImmediate;

  // Otherwise, we fall back to postMessage as a means of emulating the next
  // task semantics of setImmediate.
  } else {
    var setImmediateQueue = [];
    var sentinel = String(Math.random());
    window.addEventListener('message', function(e) {
      if (e.data === sentinel) {
        var queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach(function(func) {
          func();
        });
      }
    });
    setImmediate = function(func) {
      setImmediateQueue.push(func);
      window.postMessage(sentinel, '*');
    };
  }

  // This is used to ensure that we never schedule 2 callas to setImmediate
  var isScheduled = false;

  // Keep track of observers that needs to be notified next time.
  var scheduledObservers = [];

  /**
   * Schedules |dispatchCallback| to be called in the future.
   * @param {MutationObserver} observer
   */
  function scheduleCallback(observer) {
    scheduledObservers.push(observer);
    if (!isScheduled) {
      isScheduled = true;
      setImmediate(dispatchCallbacks);
    }
  }

  function wrapIfNeeded(node) {
    return window.ShadowDOMPolyfill &&
        window.ShadowDOMPolyfill.wrapIfNeeded(node) ||
        node;
  }

  function dispatchCallbacks() {
    // http://dom.spec.whatwg.org/#mutation-observers

    isScheduled = false; // Used to allow a new setImmediate call above.

    var observers = scheduledObservers;
    scheduledObservers = [];
    // Sort observers based on their creation UID (incremental).
    observers.sort(function(o1, o2) {
      return o1.uid_ - o2.uid_;
    });

    var anyNonEmpty = false;
    observers.forEach(function(observer) {

      // 2.1, 2.2
      var queue = observer.takeRecords();
      // 2.3. Remove all transient registered observers whose observer is mo.
      removeTransientObserversFor(observer);

      // 2.4
      if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
      }
    });

    // 3.
    if (anyNonEmpty)
      dispatchCallbacks();
  }

  function removeTransientObserversFor(observer) {
    observer.nodes_.forEach(function(node) {
      var registrations = registrationsTable.get(node);
      if (!registrations)
        return;
      registrations.forEach(function(registration) {
        if (registration.observer === observer)
          registration.removeTransientObservers();
      });
    });
  }

  /**
   * This function is used for the "For each registered observer observer (with
   * observer's options as options) in target's list of registered observers,
   * run these substeps:" and the "For each ancestor ancestor of target, and for
   * each registered observer observer (with options options) in ancestor's list
   * of registered observers, run these substeps:" part of the algorithms. The
   * |options.subtree| is checked to ensure that the callback is called
   * correctly.
   *
   * @param {Node} target
   * @param {function(MutationObserverInit):MutationRecord} callback
   */
  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
    for (var node = target; node; node = node.parentNode) {
      var registrations = registrationsTable.get(node);

      if (registrations) {
        for (var j = 0; j < registrations.length; j++) {
          var registration = registrations[j];
          var options = registration.options;

          // Only target ignores subtree.
          if (node !== target && !options.subtree)
            continue;

          var record = callback(options);
          if (record)
            registration.enqueue(record);
        }
      }
    }
  }

  var uidCounter = 0;

  /**
   * The class that maps to the DOM MutationObserver interface.
   * @param {Function} callback.
   * @constructor
   */
  function JsMutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
  }

  JsMutationObserver.prototype = {
    observe: function(target, options) {
      target = wrapIfNeeded(target);

      // 1.1
      if (!options.childList && !options.attributes && !options.characterData ||

          // 1.2
          options.attributeOldValue && !options.attributes ||

          // 1.3
          options.attributeFilter && options.attributeFilter.length &&
              !options.attributes ||

          // 1.4
          options.characterDataOldValue && !options.characterData) {

        throw new SyntaxError();
      }

      var registrations = registrationsTable.get(target);
      if (!registrations)
        registrationsTable.set(target, registrations = []);

      // 2
      // If target's list of registered observers already includes a registered
      // observer associated with the context object, replace that registered
      // observer's options with options.
      var registration;
      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }

      // 3.
      // Otherwise, add a new registered observer to target's list of registered
      // observers with the context object as the observer and options as the
      // options, and add target to context object's list of nodes on which it
      // is registered.
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes_.push(target);
      }

      registration.addListeners();
    },

    disconnect: function() {
      this.nodes_.forEach(function(node) {
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];
          if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            // Each node can only have one registered observer associated with
            // this observer.
            break;
          }
        }
      }, this);
      this.records_ = [];
    },

    takeRecords: function() {
      var copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  };

  /**
   * @param {string} type
   * @param {Node} target
   * @constructor
   */
  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = [];
    this.removedNodes = [];
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }

  function copyMutationRecord(original) {
    var record = new MutationRecord(original.type, original.target);
    record.addedNodes = original.addedNodes.slice();
    record.removedNodes = original.removedNodes.slice();
    record.previousSibling = original.previousSibling;
    record.nextSibling = original.nextSibling;
    record.attributeName = original.attributeName;
    record.attributeNamespace = original.attributeNamespace;
    record.oldValue = original.oldValue;
    return record;
  };

  // We keep track of the two (possibly one) records used in a single mutation.
  var currentRecord, recordWithOldValue;

  /**
   * Creates a record without |oldValue| and caches it as |currentRecord| for
   * later use.
   * @param {string} oldValue
   * @return {MutationRecord}
   */
  function getRecord(type, target) {
    return currentRecord = new MutationRecord(type, target);
  }

  /**
   * Gets or creates a record with |oldValue| based in the |currentRecord|
   * @param {string} oldValue
   * @return {MutationRecord}
   */
  function getRecordWithOldValue(oldValue) {
    if (recordWithOldValue)
      return recordWithOldValue;
    recordWithOldValue = copyMutationRecord(currentRecord);
    recordWithOldValue.oldValue = oldValue;
    return recordWithOldValue;
  }

  function clearRecords() {
    currentRecord = recordWithOldValue = undefined;
  }

  /**
   * @param {MutationRecord} record
   * @return {boolean} Whether the record represents a record from the current
   * mutation event.
   */
  function recordRepresentsCurrentMutation(record) {
    return record === recordWithOldValue || record === currentRecord;
  }

  /**
   * Selects which record, if any, to replace the last record in the queue.
   * This returns |null| if no record should be replaced.
   *
   * @param {MutationRecord} lastRecord
   * @param {MutationRecord} newRecord
   * @param {MutationRecord}
   */
  function selectRecord(lastRecord, newRecord) {
    if (lastRecord === newRecord)
      return lastRecord;

    // Check if the the record we are adding represents the same record. If
    // so, we keep the one with the oldValue in it.
    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord))
      return recordWithOldValue;

    return null;
  }

  /**
   * Class used to represent a registered observer.
   * @param {MutationObserver} observer
   * @param {Node} target
   * @param {MutationObserverInit} options
   * @constructor
   */
  function Registration(observer, target, options) {
    this.observer = observer;
    this.target = target;
    this.options = options;
    this.transientObservedNodes = [];
  }

  Registration.prototype = {
    enqueue: function(record) {
      var records = this.observer.records_;
      var length = records.length;

      // There are cases where we replace the last record with the new record.
      // For example if the record represents the same mutation we need to use
      // the one with the oldValue. If we get same record (this can happen as we
      // walk up the tree) we ignore the new record.
      if (records.length > 0) {
        var lastRecord = records[length - 1];
        var recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }

      records[length] = record;
    },

    addListeners: function() {
      this.addListeners_(this.target);
    },

    addListeners_: function(node) {
      var options = this.options;
      if (options.attributes)
        node.addEventListener('DOMAttrModified', this, true);

      if (options.characterData)
        node.addEventListener('DOMCharacterDataModified', this, true);

      if (options.childList)
        node.addEventListener('DOMNodeInserted', this, true);

      if (options.childList || options.subtree)
        node.addEventListener('DOMNodeRemoved', this, true);
    },

    removeListeners: function() {
      this.removeListeners_(this.target);
    },

    removeListeners_: function(node) {
      var options = this.options;
      if (options.attributes)
        node.removeEventListener('DOMAttrModified', this, true);

      if (options.characterData)
        node.removeEventListener('DOMCharacterDataModified', this, true);

      if (options.childList)
        node.removeEventListener('DOMNodeInserted', this, true);

      if (options.childList || options.subtree)
        node.removeEventListener('DOMNodeRemoved', this, true);
    },

    /**
     * Adds a transient observer on node. The transient observer gets removed
     * next time we deliver the change records.
     * @param {Node} node
     */
    addTransientObserver: function(node) {
      // Don't add transient observers on the target itself. We already have all
      // the required listeners set up on the target.
      if (node === this.target)
        return;

      this.addListeners_(node);
      this.transientObservedNodes.push(node);
      var registrations = registrationsTable.get(node);
      if (!registrations)
        registrationsTable.set(node, registrations = []);

      // We know that registrations does not contain this because we already
      // checked if node === this.target.
      registrations.push(this);
    },

    removeTransientObservers: function() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];

      transientObservedNodes.forEach(function(node) {
        // Transient observers are never added to the target.
        this.removeListeners_(node);

        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            // Each node can only have one registered observer associated with
            // this observer.
            break;
          }
        }
      }, this);
    },

    handleEvent: function(e) {
      // Stop propagation since we are managing the propagation manually.
      // This means that other mutation events on the page will not work
      // correctly but that is by design.
      e.stopImmediatePropagation();

      switch (e.type) {
        case 'DOMAttrModified':
          // http://dom.spec.whatwg.org/#concept-mo-queue-attributes

          var name = e.attrName;
          var namespace = e.relatedNode.namespaceURI;
          var target = e.target;

          // 1.
          var record = new getRecord('attributes', target);
          record.attributeName = name;
          record.attributeNamespace = namespace;

          // 2.
          var oldValue =
              e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;

          forEachAncestorAndObserverEnqueueRecord(target, function(options) {
            // 3.1, 4.2
            if (!options.attributes)
              return;

            // 3.2, 4.3
            if (options.attributeFilter && options.attributeFilter.length &&
                options.attributeFilter.indexOf(name) === -1 &&
                options.attributeFilter.indexOf(namespace) === -1) {
              return;
            }
            // 3.3, 4.4
            if (options.attributeOldValue)
              return getRecordWithOldValue(oldValue);

            // 3.4, 4.5
            return record;
          });

          break;

        case 'DOMCharacterDataModified':
          // http://dom.spec.whatwg.org/#concept-mo-queue-characterdata
          var target = e.target;

          // 1.
          var record = getRecord('characterData', target);

          // 2.
          var oldValue = e.prevValue;


          forEachAncestorAndObserverEnqueueRecord(target, function(options) {
            // 3.1, 4.2
            if (!options.characterData)
              return;

            // 3.2, 4.3
            if (options.characterDataOldValue)
              return getRecordWithOldValue(oldValue);

            // 3.3, 4.4
            return record;
          });

          break;

        case 'DOMNodeRemoved':
          this.addTransientObserver(e.target);
          // Fall through.
        case 'DOMNodeInserted':
          // http://dom.spec.whatwg.org/#concept-mo-queue-childlist
          var target = e.relatedNode;
          var changedNode = e.target;
          var addedNodes, removedNodes;
          if (e.type === 'DOMNodeInserted') {
            addedNodes = [changedNode];
            removedNodes = [];
          } else {

            addedNodes = [];
            removedNodes = [changedNode];
          }
          var previousSibling = changedNode.previousSibling;
          var nextSibling = changedNode.nextSibling;

          // 1.
          var record = getRecord('childList', target);
          record.addedNodes = addedNodes;
          record.removedNodes = removedNodes;
          record.previousSibling = previousSibling;
          record.nextSibling = nextSibling;

          forEachAncestorAndObserverEnqueueRecord(target, function(options) {
            // 2.1, 3.2
            if (!options.childList)
              return;

            // 2.2, 3.3
            return record;
          });

      }

      clearRecords();
    }
  };

  global.JsMutationObserver = JsMutationObserver;

  if (!global.MutationObserver)
    global.MutationObserver = JsMutationObserver;


})(this);

/* ../node_modules/webcomponents.js/src/MutationObserver/MutationObserver.js end */


(function() {
    /* ../node_modules/webcomponents.js/src/CustomElements/base.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
window.CustomElements = window.CustomElements || {flags:{}};

(function(scope) {

// imports
var flags = scope.flags;

// world's simplest module initializer
var modules = [];
var addModule = function(module) {
	modules.push(module);
};

var initializeModules = function() {
	modules.forEach(function(module) {
		module(scope);
	});
};

// exports
scope.addModule = addModule;
scope.initializeModules = initializeModules;
scope.hasNative = Boolean(document.registerElement);

// NOTE: For consistent timing, use native custom elements only when not
// polyfilling other key related web components features.
scope.useNative = !flags.register && scope.hasNative && 
		!window.ShadowDOMPolyfill && (!window.HTMLImports || HTMLImports.useNative);

})(CustomElements);
/* ../node_modules/webcomponents.js/src/CustomElements/base.js end */

    /* ../node_modules/webcomponents.js/src/CustomElements/traverse.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// helper methods for traversing through element trees
CustomElements.addModule(function(scope){

// imports
var IMPORT_LINK_TYPE = window.HTMLImports ? HTMLImports.IMPORT_LINK_TYPE : 'none';

// walk the subtree rooted at node, including descent into shadow-roots,
// applying 'cb' to each element
function forSubtree(node, cb) {
  //flags.dom && node.childNodes && node.childNodes.length && console.group('subTree: ', node);
  findAllElements(node, function(e) {
    if (cb(e)) {
      return true;
    }
    forRoots(e, cb);
  });
  forRoots(node, cb);
  //flags.dom && node.childNodes && node.childNodes.length && console.groupEnd();
}


// walk the subtree rooted at node, applying 'find(element, data)' function
// to each element
// if 'find' returns true for 'element', do not search element's subtree
function findAllElements(node, find, data) {
  var e = node.firstElementChild;
  if (!e) {
    e = node.firstChild;
    while (e && e.nodeType !== Node.ELEMENT_NODE) {
      e = e.nextSibling;
    }
  }
  while (e) {
    if (find(e, data) !== true) {
      findAllElements(e, find, data);
    }
    e = e.nextElementSibling;
  }
  return null;
}

// walk all shadowRoots on a given node.
function forRoots(node, cb) {
  var root = node.shadowRoot;
  while(root) {
    forSubtree(root, cb);
    root = root.olderShadowRoot;
  }
}

/*
Note that the import tree can consume itself and therefore special care
must be taken to avoid recursion.
*/
var processingDocuments;
function forDocumentTree(doc, cb) {
  processingDocuments = [];
  _forDocumentTree(doc, cb);
  processingDocuments = null;
}


function _forDocumentTree(doc, cb) {
  doc = wrap(doc);
  if (processingDocuments.indexOf(doc) >= 0) {
    return;
  }
  processingDocuments.push(doc);
  var imports = doc.querySelectorAll('link[rel=' + IMPORT_LINK_TYPE + ']');
  for (var i=0, l=imports.length, n; (i<l) && (n=imports[i]); i++) {
    if (n.import) {
      _forDocumentTree(n.import, cb);
    }
  }
  cb(doc);
}

// exports
scope.forDocumentTree = forDocumentTree;
scope.forSubtree = forSubtree;


});

/* ../node_modules/webcomponents.js/src/CustomElements/traverse.js end */

    /* ../node_modules/webcomponents.js/src/CustomElements/observe.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * Implements custom element observation and attached/detached callbacks
 * @module observe
*/

CustomElements.addModule(function(scope){

// imports
var flags = scope.flags;
var forSubtree = scope.forSubtree;
var forDocumentTree = scope.forDocumentTree;

/*
  Manage nodes attached to document trees
*/

// manage lifecycle on added node and it's subtree; upgrade the node and
// entire subtree if necessary and process attached for the node and entire
// subtree
function addedNode(node) {
  return added(node) || addedSubtree(node);
}

// manage lifecycle on added node; upgrade if necessary and process attached
function added(node) {
  if (scope.upgrade(node)) {
    return true;
  }
  attached(node);
}

// manage lifecycle on added node's subtree only; allows the entire subtree
// to upgrade if necessary and process attached
function addedSubtree(node) {
  forSubtree(node, function(e) {
    if (added(e)) {
      return true;
    }
  });
}

function attachedNode(node) {
  attached(node);
  // only check subtree if node is actually in document
  if (inDocument(node)) {
    forSubtree(node, function(e) {
      attached(e);
    });
  }
}

// On platforms without MutationObserver, mutations may not be
// reliable and therefore attached/detached are not reliable.
// To make these callbacks less likely to fail, we defer all inserts and removes
// to give a chance for elements to be attached into dom.
// This ensures attachedCallback fires for elements that are created and
// immediately added to dom.
var hasPolyfillMutations = (!window.MutationObserver ||
    (window.MutationObserver === window.JsMutationObserver));
scope.hasPolyfillMutations = hasPolyfillMutations;

var isPendingMutations = false;
var pendingMutations = [];
function deferMutation(fn) {
  pendingMutations.push(fn);
  if (!isPendingMutations) {
    isPendingMutations = true;
    setTimeout(takeMutations);
  }
}

function takeMutations() {
  isPendingMutations = false;
  var $p = pendingMutations;
  for (var i=0, l=$p.length, p; (i<l) && (p=$p[i]); i++) {
    p();
  }
  pendingMutations = [];
}

function attached(element) {
  if (hasPolyfillMutations) {
    deferMutation(function() {
      _attached(element);
    });
  } else {
    _attached(element);
  }
}

// NOTE: due to how MO works (see comments below), an element may be attached
// multiple times so we protect against extra processing here.
function _attached(element) {
  // track element for insertion if it's upgraded and cares about insertion
  if (element.__upgraded__ && 
    (element.attachedCallback || element.detachedCallback)) {
    // bail if the element is already marked as attached and proceed only 
    // if it's actually in the document at this moment.
    if (!element.__attached && inDocument(element)) {
      element.__attached = true;
      if (element.attachedCallback) {
        element.attachedCallback();
      }
    }
  }
}

/*
  Manage nodes detached from document trees
*/

// manage lifecycle on detached node and it's subtree; process detached 
// for the node and entire subtree
function detachedNode(node) {
  detached(node);
  forSubtree(node, function(e) {
    detached(e);
  });
}

function detached(element) {
  if (hasPolyfillMutations) {
    deferMutation(function() {
      _detached(element);
    });
  } else {
    _detached(element);
  }
}

// NOTE: due to how MO works (see comments below), an element may be detached
// multiple times so we protect against extra processing here.
function _detached(element) {
  // track element for removal if it's upgraded and cares about removal
  if (element.__upgraded__ && 
    (element.attachedCallback || element.detachedCallback)) {
    // bail if the element is already marked as not attached and proceed only 
    // if it's actually *not* in the document at this moment.
    if (element.__attached && !inDocument(element)) {
      element.__attached = false;
      if (element.detachedCallback) {
        element.detachedCallback();
      }
    }
  }
}

// recurse up the tree to check if an element is actually in the main document.
function inDocument(element) {
  var p = element;
  var doc = wrap(document);
  while (p) {
    if (p == doc) {
      return true;
    }
    p = p.parentNode || p.host;
  }
}

//  Install an element observer on all shadowRoots owned by node.
function watchShadow(node) {
  if (node.shadowRoot && !node.shadowRoot.__watched) {
    flags.dom && console.log('watching shadow-root for: ', node.localName);
    // watch all unwatched roots...
    var root = node.shadowRoot;
    while (root) {
      observe(root);
      root = root.olderShadowRoot;
    }
  }
}

/*
  NOTE: In order to process all mutations, it's necessary to recurse into
  any added nodes. However, it's not possible to determine a priori if a node
  will get its own mutation record. This means
  *nodes can be seen multiple times*.

  Here's an example:

  (1) In this case, recursion is required to see `child`: 

      node.innerHTML = '<div><child></child></div>'

  (2) In this case, child will get its own mutation record:

      node.appendChild(div).appendChild(child);
*/
function handler(mutations) {
  // for logging only
  if (flags.dom) {
    var mx = mutations[0];
    if (mx && mx.type === 'childList' && mx.addedNodes) {
        if (mx.addedNodes) {
          var d = mx.addedNodes[0];
          while (d && d !== document && !d.host) {
            d = d.parentNode;
          }
          var u = d && (d.URL || d._URL || (d.host && d.host.localName)) || '';
          u = u.split('/?').shift().split('/').pop();
        }
    }
    console.group('mutations (%d) [%s]', mutations.length, u || '');
  }
  // handle mutations
  mutations.forEach(function(mx) {
    if (mx.type === 'childList') {
      forEach(mx.addedNodes, function(n) {
        if (!n.localName) {
          return;
        }
        addedNode(n);
      });
      forEach(mx.removedNodes, function(n) {
        if (!n.localName) {
          return;
        }
        detachedNode(n);
      });
    }
  });
  flags.dom && console.groupEnd();
};


/*
  When elements are added to the dom, upgrade and attached/detached may be 
  asynchronous. `CustomElements.takeRecords` can be called to process any
  pending upgrades and attached/detached callbacks synchronously.
*/
function takeRecords(node) {
  node = wrap(node);
  // If the optional node is not supplied, assume we mean the whole document.
  if (!node) {
    node = wrap(document);
  }
  // Find the root of the tree, which will be an Document or ShadowRoot.
  while (node.parentNode) {
    node = node.parentNode;
  }
  var observer = node.__observer;
  if (observer) {
    handler(observer.takeRecords());
    takeMutations();
  }
}

var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);


// observe a node tree; bail if it's already being observed.
function observe(inRoot) {
  if (inRoot.__observer) {
    return;
  }
  // For each ShadowRoot, we create a new MutationObserver, so the root can be
  // garbage collected once all references to the `inRoot` node are gone.
  var observer = new MutationObserver(handler);
  observer.observe(inRoot, {childList: true, subtree: true});
  inRoot.__observer = observer;
}

// upgrade an entire document and observe it for elements changes.
function upgradeDocument(doc) {
  doc = wrap(doc);
  flags.dom && console.group('upgradeDocument: ', (doc.baseURI).split('/').pop());
  addedNode(doc);
  observe(doc);
  flags.dom && console.groupEnd();
}

/*
This method is intended to be called when the document tree (including imports)
has pending custom elements to upgrade. It can be called multiple times and 
should do nothing if no elements are in need of upgrade.
*/
function upgradeDocumentTree(doc) {
  forDocumentTree(doc, upgradeDocument);
}


// ensure that all ShadowRoots watch for CustomElements.
var originalCreateShadowRoot = Element.prototype.createShadowRoot;
Element.prototype.createShadowRoot = function() {
  var root = originalCreateShadowRoot.call(this);
  CustomElements.watchShadow(this);
  return root;
};

// exports
scope.watchShadow = watchShadow;
scope.upgradeDocumentTree = upgradeDocumentTree;
scope.upgradeSubtree = addedSubtree;
scope.upgradeAll = addedNode;
scope.attachedNode = attachedNode;
scope.takeRecords = takeRecords;

});

/* ../node_modules/webcomponents.js/src/CustomElements/observe.js end */

    /* ../node_modules/webcomponents.js/src/CustomElements/upgrade.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * Implements custom element upgrading
 * @module upgrade
*/

CustomElements.addModule(function(scope) {

// imports
var flags = scope.flags;

/**
 * Upgrade an element to a custom element. Upgrading an element
 * causes the custom prototype to be applied, an `is` attribute
 * to be attached (as needed), and invocation of the `readyCallback`.
 * If the element is in the main document, the `attachedkCallback` method
 * will be invoked.
 * `upgrade` does nothing if the element is already upgraded, or
 * if it matches no registered custom tag name.
 *
 * @method ugprade
 * @param {Element} element The element to upgrade.
 * @return {Element} The upgraded element.
 */
// Upgrade a node if it can be upgraded and is not already.
function upgrade(node) {
  if (!node.__upgraded__ && (node.nodeType === Node.ELEMENT_NODE)) {
    var is = node.getAttribute('is');
    var definition = scope.getRegisteredDefinition(is || node.localName);
    if (definition) {
      if (is && definition.tag == node.localName) {
        return upgradeWithDefinition(node, definition);
      } else if (!is && !definition.extends) {
        return upgradeWithDefinition(node, definition);
      }
    }
  }
}

function upgradeWithDefinition(element, definition) {
  flags.upgrade && console.group('upgrade:', element.localName);
  // some definitions specify an 'is' attribute
  if (definition.is) {
    element.setAttribute('is', definition.is);
  }
  // make 'element' implement definition.prototype
  implementPrototype(element, definition);
  // flag as upgraded
  element.__upgraded__ = true;
  // lifecycle management
  created(element);
  // attachedCallback fires in tree order, call before recursing
  scope.attachedNode(element);
  // there should never be a shadow root on element at this point
  scope.upgradeSubtree(element);
  flags.upgrade && console.groupEnd();
  // OUTPUT
  return element;
}

//  Set __proto__ on supported platforms and use a mixin strategy when 
//  this is not supported; e.g. on IE10.
function implementPrototype(element, definition) {
  // prototype swizzling is best
  if (Object.__proto__) {
    element.__proto__ = definition.prototype;
  } else {
    // where above we can re-acquire inPrototype via
    // getPrototypeOf(Element), we cannot do so when
    // we use mixin, so we install a magic reference
    customMixin(element, definition.prototype, definition.native);
    element.__proto__ = definition.prototype;
  }
}

function customMixin(inTarget, inSrc, inNative) {
  // TODO(sjmiles): 'used' allows us to only copy the 'youngest' version of
  // any property. This set should be precalculated. We also need to
  // consider this for supporting 'super'.
  var used = {};
  // start with inSrc
  var p = inSrc;
  // The default is HTMLElement.prototype, so we add a test to avoid mixing in
  // native prototypes
  while (p !== inNative && p !== HTMLElement.prototype) {
    var keys = Object.getOwnPropertyNames(p);
    for (var i=0, k; k=keys[i]; i++) {
      if (!used[k]) {
        Object.defineProperty(inTarget, k,
            Object.getOwnPropertyDescriptor(p, k));
        used[k] = 1;
      }
    }
    p = Object.getPrototypeOf(p);
  }
}

function created(element) {
  // invoke createdCallback
  if (element.createdCallback) {
    element.createdCallback();
  }
}

scope.upgrade = upgrade;
scope.upgradeWithDefinition = upgradeWithDefinition;
scope.implementPrototype = implementPrototype;

});

/* ../node_modules/webcomponents.js/src/CustomElements/upgrade.js end */

    /* ../node_modules/webcomponents.js/src/CustomElements/register.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * Implements `document.registerElement`
 * @module register
*/

/**
 * Polyfilled extensions to the `document` object.
 * @class Document
*/

CustomElements.addModule(function(scope) {

// imports
var upgradeDocumentTree = scope.upgradeDocumentTree;
var upgrade = scope.upgrade;
var upgradeWithDefinition = scope.upgradeWithDefinition;
var implementPrototype = scope.implementPrototype;
var useNative = scope.useNative;

/**
 * Registers a custom tag name with the document.
 *
 * When a registered element is created, a `readyCallback` method is called
 * in the scope of the element. The `readyCallback` method can be specified on
 * either `options.prototype` or `options.lifecycle` with the latter taking
 * precedence.
 *
 * @method register
 * @param {String} name The tag name to register. Must include a dash ('-'),
 *    for example 'x-component'.
 * @param {Object} options
 *    @param {String} [options.extends]
 *      (_off spec_) Tag name of an element to extend (or blank for a new
 *      element). This parameter is not part of the specification, but instead
 *      is a hint for the polyfill because the extendee is difficult to infer.
 *      Remember that the input prototype must chain to the extended element's
 *      prototype (or HTMLElement.prototype) regardless of the value of
 *      `extends`.
 *    @param {Object} options.prototype The prototype to use for the new
 *      element. The prototype must inherit from HTMLElement.
 *    @param {Object} [options.lifecycle]
 *      Callbacks that fire at important phases in the life of the custom
 *      element.
 *
 * @example
 *      FancyButton = document.registerElement("fancy-button", {
 *        extends: 'button',
 *        prototype: Object.create(HTMLButtonElement.prototype, {
 *          readyCallback: {
 *            value: function() {
 *              console.log("a fancy-button was created",
 *            }
 *          }
 *        })
 *      });
 * @return {Function} Constructor for the newly registered type.
 */
function register(name, options) {
  //console.warn('document.registerElement("' + name + '", ', options, ')');
  // construct a defintion out of options
  // TODO(sjmiles): probably should clone options instead of mutating it
  var definition = options || {};
  if (!name) {
    throw new Error('document.registerElement: first argument `name` must not be empty');
  }
  if (name.indexOf('-') < 0) {
    throw new Error('document.registerElement: first argument (\'name\') must contain a dash (\'-\'). Argument provided was \'' + String(name) + '\'.');
  }
  // prevent registering reserved names
  if (isReservedTag(name)) {
    throw new Error('Failed to execute \'registerElement\' on \'Document\': Registration failed for type \'' + String(name) + '\'. The type name is invalid.');
  }
  // elements may only be registered once
  if (getRegisteredDefinition(name)) {
    throw new Error('DuplicateDefinitionError: a type with name \'' + String(name) + '\' is already registered');
  }
  // prototype is optional, default to an extension of HTMLElement
  if (!definition.prototype) {
    definition.prototype = Object.create(HTMLElement.prototype);
  }
  // record name
  definition.__name = name.toLowerCase();
  // ensure a lifecycle object so we don't have to null test it
  definition.lifecycle = definition.lifecycle || {};
  // build a list of ancestral custom elements (for native base detection)
  // TODO(sjmiles): we used to need to store this, but current code only
  // uses it in 'resolveTagName': it should probably be inlined
  definition.ancestry = ancestry(definition.extends);
  // extensions of native specializations of HTMLElement require localName
  // to remain native, and use secondary 'is' specifier for extension type
  resolveTagName(definition);
  // some platforms require modifications to the user-supplied prototype
  // chain
  resolvePrototypeChain(definition);
  // overrides to implement attributeChanged callback
  overrideAttributeApi(definition.prototype);
  // 7.1.5: Register the DEFINITION with DOCUMENT
  registerDefinition(definition.__name, definition);
  // 7.1.7. Run custom element constructor generation algorithm with PROTOTYPE
  // 7.1.8. Return the output of the previous step.
  definition.ctor = generateConstructor(definition);
  definition.ctor.prototype = definition.prototype;
  // force our .constructor to be our actual constructor
  definition.prototype.constructor = definition.ctor;
  // if initial parsing is complete
  if (scope.ready) {
    // upgrade any pre-existing nodes of this type
    upgradeDocumentTree(document);
  }
  return definition.ctor;
}

// attribute watching
function overrideAttributeApi(prototype) {
  // overrides to implement callbacks
  // TODO(sjmiles): should support access via .attributes NamedNodeMap
  // TODO(sjmiles): preserves user defined overrides, if any
  if (prototype.setAttribute._polyfilled) {
    return;
  }
  var setAttribute = prototype.setAttribute;
  prototype.setAttribute = function(name, value) {
    changeAttribute.call(this, name, value, setAttribute);
  };
  var removeAttribute = prototype.removeAttribute;
  prototype.removeAttribute = function(name) {
    changeAttribute.call(this, name, null, removeAttribute);
  };
  prototype.setAttribute._polyfilled = true;
}

// https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/custom/
// index.html#dfn-attribute-changed-callback
function changeAttribute(name, value, operation) {
  name = name.toLowerCase();
  var oldValue = this.getAttribute(name);
  operation.apply(this, arguments);
  var newValue = this.getAttribute(name);
  if (this.attributeChangedCallback &&
      (newValue !== oldValue)) {
    this.attributeChangedCallback(name, oldValue, newValue);
  }
}

function isReservedTag(name) {
  for (var i = 0; i < reservedTagList.length; i++) {
    if (name === reservedTagList[i]) {
      return true;
    }
  }
}

var reservedTagList = [
  'annotation-xml', 'color-profile', 'font-face', 'font-face-src',
  'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph'
];

function ancestry(extnds) {
  var extendee = getRegisteredDefinition(extnds);
  if (extendee) {
    return ancestry(extendee.extends).concat([extendee]);
  }
  return [];
}

function resolveTagName(definition) {
  // if we are explicitly extending something, that thing is our
  // baseTag, unless it represents a custom component
  var baseTag = definition.extends;
  // if our ancestry includes custom components, we only have a
  // baseTag if one of them does
  for (var i=0, a; (a=definition.ancestry[i]); i++) {
    baseTag = a.is && a.tag;
  }
  // our tag is our baseTag, if it exists, and otherwise just our name
  definition.tag = baseTag || definition.__name;
  if (baseTag) {
    // if there is a base tag, use secondary 'is' specifier
    definition.is = definition.__name;
  }
}

function resolvePrototypeChain(definition) {
  // if we don't support __proto__ we need to locate the native level
  // prototype for precise mixing in
  if (!Object.__proto__) {
    // default prototype
    var nativePrototype = HTMLElement.prototype;
    // work out prototype when using type-extension
    if (definition.is) {
      var inst = document.createElement(definition.tag);
      var expectedPrototype = Object.getPrototypeOf(inst);
      // only set nativePrototype if it will actually appear in the definition's chain
      if (expectedPrototype === definition.prototype) {
        nativePrototype = expectedPrototype;
      }
    }
    // ensure __proto__ reference is installed at each point on the prototype
    // chain.
    // NOTE: On platforms without __proto__, a mixin strategy is used instead
    // of prototype swizzling. In this case, this generated __proto__ provides
    // limited support for prototype traversal.
    var proto = definition.prototype, ancestor;
    while (proto && (proto !== nativePrototype)) {
      ancestor = Object.getPrototypeOf(proto);
      proto.__proto__ = ancestor;
      proto = ancestor;
    }
    // cache this in case of mixin
    definition.native = nativePrototype;
  }
}

// SECTION 4

function instantiate(definition) {
  // 4.a.1. Create a new object that implements PROTOTYPE
  // 4.a.2. Let ELEMENT by this new object
  //
  // the custom element instantiation algorithm must also ensure that the
  // output is a valid DOM element with the proper wrapper in place.
  //
  return upgradeWithDefinition(domCreateElement(definition.tag), definition);
}

// element registry (maps tag names to definitions)

var registry = {};

function getRegisteredDefinition(name) {
  if (name) {
    return registry[name.toLowerCase()];
  }
}

function registerDefinition(name, definition) {
  registry[name] = definition;
}

function generateConstructor(definition) {
  return function() {
    return instantiate(definition);
  };
}

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
function createElementNS(namespace, tag, typeExtension) {
  // NOTE: we do not support non-HTML elements,
  // just call createElementNS for non HTML Elements
  if (namespace === HTML_NAMESPACE) {
    return createElement(tag, typeExtension);
  } else {
    return domCreateElementNS(namespace, tag);
  }
}

function createElement(tag, typeExtension) {
  // TODO(sjmiles): ignore 'tag' when using 'typeExtension', we could
  // error check it, or perhaps there should only ever be one argument
  var definition = getRegisteredDefinition(typeExtension || tag);
  if (definition) {
    if (tag == definition.tag && typeExtension == definition.is) {
      return new definition.ctor();
    }
    // Handle empty string for type extension.
    if (!typeExtension && !definition.is) {
      return new definition.ctor();
    }
  }
  var element;
  if (typeExtension) {
    element = createElement(tag);
    element.setAttribute('is', typeExtension);
    return element;
  }
  element = domCreateElement(tag);
  // Custom tags should be HTMLElements even if not upgraded.
  if (tag.indexOf('-') >= 0) {
    implementPrototype(element, HTMLElement);
  }
  return element;
}

function cloneNode(deep) {
  // call original clone
  var n = domCloneNode.call(this, deep);
  // upgrade the element and subtree
  upgrade(n);
  // return the clone
  return n;
}

// capture native createElement before we override it
var domCreateElement = document.createElement.bind(document);
var domCreateElementNS = document.createElementNS.bind(document);
// capture native cloneNode before we override it
var domCloneNode = Node.prototype.cloneNode;

// Create a custom 'instanceof'. This is necessary when CustomElements
// are implemented via a mixin strategy, as for example on IE10.
var isInstance;
if (!Object.__proto__ && !useNative) {
  isInstance = function(obj, ctor) {
    var p = obj;
    while (p) {
      // NOTE: this is not technically correct since we're not checking if
      // an object is an instance of a constructor; however, this should
      // be good enough for the mixin strategy.
      if (p === ctor.prototype) {
        return true;
      }
      p = p.__proto__;
    }
    return false;
  };
} else {
  isInstance = function(obj, base) {
    return obj instanceof base;
  };
}

// exports
document.registerElement = register;
document.createElement = createElement; // override
document.createElementNS = createElementNS; // override
Node.prototype.cloneNode = cloneNode; // override
scope.registry = registry;
scope.instanceof = isInstance;
scope.reservedTagList = reservedTagList;
scope.getRegisteredDefinition = getRegisteredDefinition;

// bc
document.register = document.registerElement;

});

/* ../node_modules/webcomponents.js/src/CustomElements/register.js end */

    /* ../node_modules/webcomponents.js/src/CustomElements/boot.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function(scope){

// imports
var useNative = scope.useNative;
var initializeModules = scope.initializeModules;

// If native, setup stub api and bail.
// NOTE: we fire `WebComponentsReady` under native for api compatibility
if (useNative) {
  // stub
  var nop = function() {};

  // exports
  scope.watchShadow = nop;
  scope.upgrade = nop;
  scope.upgradeAll = nop;
  scope.upgradeDocumentTree = nop;
  scope.upgradeSubtree = nop;
  scope.takeRecords = nop;

  scope.instanceof = function(obj, base) {
    return obj instanceof base;
  };

} else {
  // Initialize polyfill modules. Note, polyfill modules are loaded but not 
  // executed; this is a convenient way to control which modules run when 
  // the polyfill is required and allows the polyfill to load even when it's
  // not needed.
  initializeModules();
}

// imports
var upgradeDocumentTree = scope.upgradeDocumentTree;

// ShadowDOM polyfill wraps elements but some elements like `document`
// cannot be wrapped so we help the polyfill by wrapping some elements.
if (!window.wrap) {
  if (window.ShadowDOMPolyfill) {
    window.wrap = ShadowDOMPolyfill.wrapIfNeeded;
    window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded;
  } else {
    window.wrap = window.unwrap = function(node) {
      return node;
    };
  }
}

// bootstrap parsing
function bootstrap() {
  // parse document
  upgradeDocumentTree(wrap(document));
  // install upgrade hook if HTMLImports are available
  if (window.HTMLImports) {
    HTMLImports.__importsParsingHook = function(elt) {
      upgradeDocumentTree(wrap(elt.import));
      //CustomElements.parser.parse(elt.import);
    };
  }
  // set internal 'ready' flag, now document.registerElement will trigger 
  // synchronous upgrades
  CustomElements.ready = true;
  // async to ensure *native* custom elements upgrade prior to this
  // DOMContentLoaded can fire before elements upgrade (e.g. when there's
  // an external script)
  setTimeout(function() {
    // capture blunt profiling data
    CustomElements.readyTime = Date.now();
    if (window.HTMLImports) {
      CustomElements.elapsed = CustomElements.readyTime - HTMLImports.readyTime;
    }
    // notify the system that we are bootstrapped
    document.dispatchEvent(
      new CustomEvent('WebComponentsReady', {bubbles: true})
    );
  });
}

// CustomEvent shim for IE
if (typeof window.CustomEvent !== 'function') {
  window.CustomEvent = function(inType, params) {
    params = params || {};
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
    return e;
  };
  window.CustomEvent.prototype = window.Event.prototype;
}

// When loading at readyState complete time (or via flag), boot custom elements
// immediately.
// If relevant, HTMLImports must already be loaded.
if (document.readyState === 'complete' || scope.flags.eager) {
  bootstrap();
// When loading at readyState interactive time, bootstrap only if HTMLImports
// are not pending. Also avoid IE as the semantics of this state are unreliable.
} else if (document.readyState === 'interactive' && !window.attachEvent &&
    (!window.HTMLImports || window.HTMLImports.ready)) {
  bootstrap();
// When loading at other readyStates, wait for the appropriate DOM event to 
// bootstrap.
} else {
  var loadEvent = window.HTMLImports && !HTMLImports.ready ?
      'HTMLImportsLoaded' : 'DOMContentLoaded';
  window.addEventListener(loadEvent, bootstrap);
}

})(window.CustomElements);

/* ../node_modules/webcomponents.js/src/CustomElements/boot.js end */

}());

(function() {
    /* ../node_modules/webcomponents.js/src/HTMLImports/base.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/*
 * PLEASE NOTE: This file is duplicated within Polymer. Please keep it in sync!
 * https://github.com/Polymer/polymer/blob/master/src/system/HTMLImports/base.js
 */

/*
	Create polyfill scope and feature detect native support.
*/
window.HTMLImports = window.HTMLImports || {flags:{}};

(function(scope) {

/**
	Basic setup and simple module executer. We collect modules and then execute
  the code later, only if it's necessary for polyfilling.
*/
var IMPORT_LINK_TYPE = 'import';
var useNative = Boolean(IMPORT_LINK_TYPE in document.createElement('link'));

/**
  Support `currentScript` on all browsers as `document._currentScript.`

  NOTE: We cannot polyfill `document.currentScript` because it's not possible
  both to override and maintain the ability to capture the native value.
  Therefore we choose to expose `_currentScript` both when native imports
  and the polyfill are in use.
*/
// NOTE: ShadowDOMPolyfill intrusion.
var hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);
var wrap = function(node) {
  return hasShadowDOMPolyfill ? ShadowDOMPolyfill.wrapIfNeeded(node) : node;
};
var rootDocument = wrap(document);

var currentScriptDescriptor = {
  get: function() {
    var script = HTMLImports.currentScript || document.currentScript ||
        // NOTE: only works when called in synchronously executing code.
        // readyState should check if `loading` but IE10 is 
        // interactive when scripts run so we cheat.
        (document.readyState !== 'complete' ? 
        document.scripts[document.scripts.length - 1] : null);
    return wrap(script);
  },
  configurable: true
};

Object.defineProperty(document, '_currentScript', currentScriptDescriptor);
Object.defineProperty(rootDocument, '_currentScript', currentScriptDescriptor);

/**
  Add support for the `HTMLImportsLoaded` event and the `HTMLImports.whenReady`
  method. This api is necessary because unlike the native implementation,
  script elements do not force imports to resolve. Instead, users should wrap
  code in either an `HTMLImportsLoaded` hander or after load time in an
  `HTMLImports.whenReady(callback)` call.

  NOTE: This module also supports these apis under the native implementation. 
  Therefore, if this file is loaded, the same code can be used under both 
  the polyfill and native implementation.
 */

var isIE = /Trident/.test(navigator.userAgent);

// call a callback when all HTMLImports in the document at call time 
// (or at least document ready) have loaded.
// 1. ensure the document is in a ready state (has dom), then 
// 2. watch for loading of imports and call callback when done
function whenReady(callback, doc) {
  doc = doc || rootDocument;
  // if document is loading, wait and try again
  whenDocumentReady(function() {
    watchImportsLoad(callback, doc);
  }, doc);
}

// call the callback when the document is in a ready state (has dom)
var requiredReadyState = isIE ? 'complete' : 'interactive';
var READY_EVENT = 'readystatechange';
function isDocumentReady(doc) {
  return (doc.readyState === 'complete' ||
      doc.readyState === requiredReadyState);
}

// call <callback> when we ensure the document is in a ready state
function whenDocumentReady(callback, doc) {
  if (!isDocumentReady(doc)) {
    var checkReady = function() {
      if (doc.readyState === 'complete' || 
          doc.readyState === requiredReadyState) {
        doc.removeEventListener(READY_EVENT, checkReady);
        whenDocumentReady(callback, doc);
      }
    };
    doc.addEventListener(READY_EVENT, checkReady);
  } else if (callback) {
    callback();
  }
}

function markTargetLoaded(event) {
  event.target.__loaded = true;
}

// call <callback> when we ensure all imports have loaded
function watchImportsLoad(callback, doc) {
  var imports = doc.querySelectorAll('link[rel=import]');
  var loaded = 0, l = imports.length;
  function checkDone(d) { 
    if ((loaded == l) && callback) {
       callback();
    }
  }
  function loadedImport(e) {
    markTargetLoaded(e);
    loaded++;
    checkDone();
  }
  if (l) {
    for (var i=0, imp; (i<l) && (imp=imports[i]); i++) {
      if (isImportLoaded(imp)) {
        loadedImport.call(imp, {target: imp});
      } else {
        imp.addEventListener('load', loadedImport);
        imp.addEventListener('error', loadedImport);
      }
    }
  } else {
    checkDone();
  }
}

// NOTE: test for native imports loading is based on explicitly watching
// all imports (see below).
// However, we cannot rely on this entirely without watching the entire document
// for import links. For perf reasons, currently only head is watched.
// Instead, we fallback to checking if the import property is available 
// and the document is not itself loading. 
function isImportLoaded(link) {
  return useNative ? link.__loaded || 
      (link.import && link.import.readyState !== 'loading') :
      link.__importParsed;
}

// TODO(sorvell): Workaround for 
// https://www.w3.org/Bugs/Public/show_bug.cgi?id=25007, should be removed when
// this bug is addressed.
// (1) Install a mutation observer to see when HTMLImports have loaded
// (2) if this script is run during document load it will watch any existing
// imports for loading.
//
// NOTE: The workaround has restricted functionality: (1) it's only compatible
// with imports that are added to document.head since the mutation observer 
// watches only head for perf reasons, (2) it requires this script
// to run before any imports have completed loading.
if (useNative) {
  new MutationObserver(function(mxns) {
    for (var i=0, l=mxns.length, m; (i < l) && (m=mxns[i]); i++) {
      if (m.addedNodes) {
        handleImports(m.addedNodes);
      }
    }
  }).observe(document.head, {childList: true});

  function handleImports(nodes) {
    for (var i=0, l=nodes.length, n; (i<l) && (n=nodes[i]); i++) {
      if (isImport(n)) {
        handleImport(n);  
      }
    }
  }

  function isImport(element) {
    return element.localName === 'link' && element.rel === 'import';
  }

  function handleImport(element) {
    var loaded = element.import;
    if (loaded) {
      markTargetLoaded({target: element});
    } else {
      element.addEventListener('load', markTargetLoaded);
      element.addEventListener('error', markTargetLoaded);
    }
  }

  // make sure to catch any imports that are in the process of loading
  // when this script is run.
  (function() {
    if (document.readyState === 'loading') {
      var imports = document.querySelectorAll('link[rel=import]');
      for (var i=0, l=imports.length, imp; (i<l) && (imp=imports[i]); i++) {
        handleImport(imp);
      }
    }
  })();

}

// Fire the 'HTMLImportsLoaded' event when imports in document at load time 
// have loaded. This event is required to simulate the script blocking 
// behavior of native imports. A main document script that needs to be sure
// imports have loaded should wait for this event.
whenReady(function() {
  HTMLImports.ready = true;
  HTMLImports.readyTime = new Date().getTime();
  rootDocument.dispatchEvent(
    new CustomEvent('HTMLImportsLoaded', {bubbles: true})
  );
});

// exports
scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
scope.useNative = useNative;
scope.rootDocument = rootDocument;
scope.whenReady = whenReady;
scope.isIE = isIE;

})(HTMLImports);

/* ../node_modules/webcomponents.js/src/HTMLImports/base.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/module.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function(scope) {

// world's simplest module initializer
var modules = [];
var addModule = function(module) {
	modules.push(module);
};

var initializeModules = function() {
	modules.forEach(function(module) {
		module(scope);
	});
};

// exports
scope.addModule = addModule;
scope.initializeModules = initializeModules;

})(HTMLImports);


/* ../node_modules/webcomponents.js/src/HTMLImports/module.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/path.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

var CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
var CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;

// path fixup: style elements in imports must be made relative to the main 
// document. We fixup url's in url() and @import.
var path = {

  resolveUrlsInStyle: function(style) {
    var doc = style.ownerDocument;
    var resolver = doc.createElement('a');
    style.textContent = this.resolveUrlsInCssText(style.textContent, resolver);
    return style;  
  },

  resolveUrlsInCssText: function(cssText, urlObj) {
    var r = this.replaceUrls(cssText, urlObj, CSS_URL_REGEXP);
    r = this.replaceUrls(r, urlObj, CSS_IMPORT_REGEXP);
    return r;
  },

  replaceUrls: function(text, urlObj, regexp) {
    return text.replace(regexp, function(m, pre, url, post) {
      var urlPath = url.replace(/["']/g, '');
      urlObj.href = urlPath;
      urlPath = urlObj.href;
      return pre + '\'' + urlPath + '\'' + post;
    });    
  }

};

// exports
scope.path = path;

});

/* ../node_modules/webcomponents.js/src/HTMLImports/path.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/xhr.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

/*
  xhr processor.
*/
xhr = {
  async: true,

  ok: function(request) {
    return (request.status >= 200 && request.status < 300)
        || (request.status === 304)
        || (request.status === 0);
  },

  load: function(url, next, nextContext) {
    var request = new XMLHttpRequest();
    if (scope.flags.debug || scope.flags.bust) {
      url += '?' + Math.random();
    }
    request.open('GET', url, xhr.async);
    request.addEventListener('readystatechange', function(e) {
      if (request.readyState === 4) {
        // Servers redirecting an import can add a Location header to help us
        // polyfill correctly.
        var locationHeader = request.getResponseHeader("Location");
        var redirectedUrl = null;
        if (locationHeader) {
          var redirectedUrl = (locationHeader.substr( 0, 1 ) === "/")
            ? location.origin + locationHeader  // Location is a relative path
            : locationHeader;                    // Full path
        }
        next.call(nextContext, !xhr.ok(request) && request,
            request.response || request.responseText, redirectedUrl);
      }
    });
    request.send();
    return request;
  },

  loadDocument: function(url, next, nextContext) {
    this.load(url, next, nextContext).responseType = 'document';
  }
  
};

// exports
scope.xhr = xhr;

});

/* ../node_modules/webcomponents.js/src/HTMLImports/xhr.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/Loader.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

// imports
var xhr = scope.xhr;
var flags = scope.flags;

// This loader supports a dynamic list of urls
// and an oncomplete callback that is called when the loader is done.
// NOTE: The polyfill currently does *not* need this dynamism or the 
// onComplete concept. Because of this, the loader could be simplified 
// quite a bit.
var Loader = function(onLoad, onComplete) {
  this.cache = {};
  this.onload = onLoad;
  this.oncomplete = onComplete;
  this.inflight = 0;
  this.pending = {};
};

Loader.prototype = {

  addNodes: function(nodes) {
    // number of transactions to complete
    this.inflight += nodes.length;
    // commence transactions
    for (var i=0, l=nodes.length, n; (i<l) && (n=nodes[i]); i++) {
      this.require(n);
    }
    // anything to do?
    this.checkDone();
  },

  addNode: function(node) {
    // number of transactions to complete
    this.inflight++;
    // commence transactions
    this.require(node);
    // anything to do?
    this.checkDone();
  },

  require: function(elt) {
    var url = elt.src || elt.href;
    // ensure we have a standard url that can be used
    // reliably for deduping.
    // TODO(sjmiles): ad-hoc
    elt.__nodeUrl = url;
    // deduplication
    if (!this.dedupe(url, elt)) {
      // fetch this resource
      this.fetch(url, elt);
    }
  },

  dedupe: function(url, elt) {
    if (this.pending[url]) {
      // add to list of nodes waiting for inUrl
      this.pending[url].push(elt);
      // don't need fetch
      return true;
    }
    var resource;
    if (this.cache[url]) {
      this.onload(url, elt, this.cache[url]);
      // finished this transaction
      this.tail();
      // don't need fetch
      return true;
    }
    // first node waiting for inUrl
    this.pending[url] = [elt];
    // need fetch (not a dupe)
    return false;
  },

  fetch: function(url, elt) {
    flags.load && console.log('fetch', url, elt);
    if (url.match(/^data:/)) {
      // Handle Data URI Scheme
      var pieces = url.split(',');
      var header = pieces[0];
      var body = pieces[1];
      if(header.indexOf(';base64') > -1) {
        body = atob(body);
      } else {
        body = decodeURIComponent(body);
      }
      setTimeout(function() {
          this.receive(url, elt, null, body);
      }.bind(this), 0);
    } else {
      var receiveXhr = function(err, resource, redirectedUrl) {
        this.receive(url, elt, err, resource, redirectedUrl);
      }.bind(this);
      xhr.load(url, receiveXhr);
    }
  },

  receive: function(url, elt, err, resource, redirectedUrl) {
    this.cache[url] = resource;
    var $p = this.pending[url];
    for (var i=0, l=$p.length, p; (i<l) && (p=$p[i]); i++) {
      // If url was redirected, use the redirected location so paths are
      // calculated relative to that.
      this.onload(url, p, resource, err, redirectedUrl);
      this.tail();
    }
    this.pending[url] = null;
  },

  tail: function() {
    --this.inflight;
    this.checkDone();
  },

  checkDone: function() {
    if (!this.inflight) {
      this.oncomplete();
    }
  }

};

// exports
scope.Loader = Loader;

});
/* ../node_modules/webcomponents.js/src/HTMLImports/Loader.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/Observer.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

/*
  Use a mutation observer to call a callback for all added nodes.
*/
var Observer = function(addCallback) {
  this.addCallback = addCallback;
  this.mo = new MutationObserver(this.handler.bind(this));
};

Observer.prototype = {

  // we track mutations for addedNodes, looking for imports
  handler: function(mutations) {
    for (var i=0, l=mutations.length, m; (i<l) && (m=mutations[i]); i++) {
      if (m.type === 'childList' && m.addedNodes.length) {
        this.addedNodes(m.addedNodes);
      }
    }
  },

  addedNodes: function(nodes) {
    if (this.addCallback) {
      this.addCallback(nodes);
    }
    for (var i=0, l=nodes.length, n, loading; (i<l) && (n=nodes[i]); i++) {
      if (n.children && n.children.length) {
        this.addedNodes(n.children);
      }
    }
  },

  observe: function(root) {
    this.mo.observe(root, {childList: true, subtree: true});
  }

};

// exports
scope.Observer = Observer;

});

/* ../node_modules/webcomponents.js/src/HTMLImports/Observer.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/parser.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

// imports
var path = scope.path;
var rootDocument = scope.rootDocument;
var flags = scope.flags;
var isIE = scope.isIE;
var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
var IMPORT_SELECTOR = 'link[rel=' + IMPORT_LINK_TYPE + ']';

// importParser
// highlander object to manage parsing of imports
// parses import related elements and ensures proper parse order
// parse order is enforced by crawling the tree and monitoring which elements
// have been parsed;
// elements can be dynamically added to imports. These are maintained in a 
// separate queue and parsed after all other elements.
var importParser = {

  // parse selectors for main document elements
  documentSelectors: IMPORT_SELECTOR,

  // parse selectors for import document elements
  importsSelectors: [
    IMPORT_SELECTOR,
    'link[rel=stylesheet]',
    'style',
    'script:not([type])',
    'script[type="text/javascript"]'
  ].join(','),

  map: {
    link: 'parseLink',
    script: 'parseScript',
    style: 'parseStyle'
  },

  dynamicElements: [],

  // try to parse the next import in the tree
  parseNext: function() {
    var next = this.nextToParse();
    if (next) {
      this.parse(next);
    }
  },

  parse: function(elt) {
    if (this.isParsed(elt)) {
      flags.parse && console.log('[%s] is already parsed', elt.localName);
      return;
    }
    var fn = this[this.map[elt.localName]];
    if (fn) {
      this.markParsing(elt);
      fn.call(this, elt);
    }
  },

  // marks an element for dynamic parsing and attempts to parse the next element
  parseDynamic: function(elt, quiet) {
    this.dynamicElements.push(elt);
    if (!quiet) {
      this.parseNext();
    }
  },

  // only 1 element may be parsed at a time; parsing is async so each
  // parsing implementation must inform the system that parsing is complete
  // via markParsingComplete.
  // To prompt the system to parse the next element, parseNext should then be
  // called.
  // Note, parseNext used to be included at the end of markParsingComplete, but
  // we must not do this so that, for example, we can (1) mark parsing complete 
  // then (2) fire an import load event, and then (3) parse the next resource.
  markParsing: function(elt) {
    flags.parse && console.log('parsing', elt);
    this.parsingElement = elt;
  },

  markParsingComplete: function(elt) {
    elt.__importParsed = true;
    this.markDynamicParsingComplete(elt);
    if (elt.__importElement) {
      elt.__importElement.__importParsed = true;
      this.markDynamicParsingComplete(elt.__importElement);
    }
    this.parsingElement = null;
    flags.parse && console.log('completed', elt);
  },

  markDynamicParsingComplete: function(elt) {
    var i = this.dynamicElements.indexOf(elt);
    if (i >= 0) {
      this.dynamicElements.splice(i, 1);
    }
  },

  parseImport: function(elt) {
    // TODO(sorvell): consider if there's a better way to do this;
    // expose an imports parsing hook; this is needed, for example, by the
    // CustomElements polyfill.
    if (HTMLImports.__importsParsingHook) {
      HTMLImports.__importsParsingHook(elt);
    }
    if (elt.import) {
      elt.import.__importParsed = true;
    }
    this.markParsingComplete(elt);
    // fire load event
    if (elt.__resource && !elt.__error) {
      elt.dispatchEvent(new CustomEvent('load', {bubbles: false}));    
    } else {
      elt.dispatchEvent(new CustomEvent('error', {bubbles: false}));
    }
    // TODO(sorvell): workaround for Safari addEventListener not working
    // for elements not in the main document.
    if (elt.__pending) {
      var fn;
      while (elt.__pending.length) {
        fn = elt.__pending.shift();
        if (fn) {
          fn({target: elt});
        }
      }
    }
    this.parseNext();
  },

  parseLink: function(linkElt) {
    if (nodeIsImport(linkElt)) {
      this.parseImport(linkElt);
    } else {
      // make href absolute
      linkElt.href = linkElt.href;
      this.parseGeneric(linkElt);
    }
  },

  parseStyle: function(elt) {
    // TODO(sorvell): style element load event can just not fire so clone styles
    var src = elt;
    elt = cloneStyle(elt);
    elt.__importElement = src;
    this.parseGeneric(elt);
  },

  parseGeneric: function(elt) {
    this.trackElement(elt);
    this.addElementToDocument(elt);
  },

  rootImportForElement: function(elt) {
    var n = elt;
    while (n.ownerDocument.__importLink) {
      n = n.ownerDocument.__importLink;
    }
    return n;
  },

  addElementToDocument: function(elt) {
    var port = this.rootImportForElement(elt.__importElement || elt);
    var l = port.__insertedElements = port.__insertedElements || 0;
    var refNode = port.nextElementSibling;
    for (var i=0; i < l; i++) {
      refNode = refNode && refNode.nextElementSibling;
    }
    port.parentNode.insertBefore(elt, refNode);
  },

  // tracks when a loadable element has loaded
  trackElement: function(elt, callback) {
    var self = this;
    var done = function(e) {
      if (callback) {
        callback(e);
      }
      self.markParsingComplete(elt);
      self.parseNext();
    };
    elt.addEventListener('load', done);
    elt.addEventListener('error', done);

    // NOTE: IE does not fire "load" event for styles that have already loaded
    // This is in violation of the spec, so we try our hardest to work around it
    if (isIE && elt.localName === 'style') {
      var fakeLoad = false;
      // If there's not @import in the textContent, assume it has loaded
      if (elt.textContent.indexOf('@import') == -1) {
        fakeLoad = true;
      // if we have a sheet, we have been parsed
      } else if (elt.sheet) {
        fakeLoad = true;
        var csr = elt.sheet.cssRules;
        var len = csr ? csr.length : 0;
        // search the rules for @import's
        for (var i = 0, r; (i < len) && (r = csr[i]); i++) {
          if (r.type === CSSRule.IMPORT_RULE) {
            // if every @import has resolved, fake the load
            fakeLoad = fakeLoad && Boolean(r.styleSheet);
          }
        }
      }
      // dispatch a fake load event and continue parsing
      if (fakeLoad) {
        elt.dispatchEvent(new CustomEvent('load', {bubbles: false}));
      }
    }
  },

  // NOTE: execute scripts by injecting them and watching for the load/error
  // event. Inline scripts are handled via dataURL's because browsers tend to
  // provide correct parsing errors in this case. If this has any compatibility
  // issues, we can switch to injecting the inline script with textContent.
  parseScript: function(scriptElt) {
    var script = document.createElement('script');
    script.__importElement = scriptElt;
    script.src = scriptElt.src ? scriptElt.src : 
        generateScriptDataUrl(scriptElt);
    // keep track of executing script to help polyfill `document.currentScript`
    scope.currentScript = scriptElt;
    this.trackElement(script, function(e) {
      script.parentNode.removeChild(script);
      scope.currentScript = null;  
    });
    this.addElementToDocument(script);
  },

  // determine the next element in the tree which should be parsed
  // crawl the document tree to find the next unparsed element
  // then process any dynamically added elements (these should process in 'add'
  // order.
  nextToParse: function() {
    this._mayParse = [];
    return !this.parsingElement && (this.nextToParseInDoc(rootDocument) || 
        this.nextToParseDynamic());
  },

  nextToParseInDoc: function(doc, link) {
    // use `marParse` list to avoid looping into the same document again
    // since it could cause an iloop.
    if (doc && this._mayParse.indexOf(doc) < 0) {
      this._mayParse.push(doc);
      var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));
      for (var i=0, l=nodes.length, p=0, n; (i<l) && (n=nodes[i]); i++) {
        if (!this.isParsed(n)) {
          if (this.hasResource(n)) {
            return nodeIsImport(n) ? this.nextToParseInDoc(n.import, n) : n;
          } else {
            return;
          }
        }
      }
    }
    // all nodes have been parsed, ready to parse import, if any
    return link;
  },

  // note dynamically added elements are stored in a separate queue
  nextToParseDynamic: function() {
    return this.dynamicElements[0];
  },

  // return the set of parse selectors relevant for this node.
  parseSelectorsForNode: function(node) {
    var doc = node.ownerDocument || node;
    return doc === rootDocument ? this.documentSelectors :
        this.importsSelectors;
  },

  isParsed: function(node) {
    return node.__importParsed;
  },

  needsDynamicParsing: function(elt) {
    return (this.dynamicElements.indexOf(elt) >= 0);
  },

  hasResource: function(node) {
    if (nodeIsImport(node) && (node.import === undefined)) {
      return false;
    }
    return true;
  }

};

function nodeIsImport(elt) {
  return (elt.localName === 'link') && (elt.rel === IMPORT_LINK_TYPE);
}

function generateScriptDataUrl(script) {
  var scriptContent = generateScriptContent(script);
  return 'data:text/javascript;charset=utf-8,' + encodeURIComponent(scriptContent);
}

function generateScriptContent(script) {
  return script.textContent + generateSourceMapHint(script);
}

// calculate source map hint
function generateSourceMapHint(script) {
  var owner = script.ownerDocument;
  owner.__importedScripts = owner.__importedScripts || 0;
  var moniker = script.ownerDocument.baseURI;
  var num = owner.__importedScripts ? '-' + owner.__importedScripts : '';
  owner.__importedScripts++;
  return '\n//# sourceURL=' + moniker + num + '.js\n';
}

// style/stylesheet handling

// clone style with proper path resolution for main document
// NOTE: styles are the only elements that require direct path fixup.
function cloneStyle(style) {
  var clone = style.ownerDocument.createElement('style');
  clone.textContent = style.textContent;
  path.resolveUrlsInStyle(clone);
  return clone;
}

// exports
scope.parser = importParser;
scope.IMPORT_SELECTOR = IMPORT_SELECTOR;

});

/* ../node_modules/webcomponents.js/src/HTMLImports/parser.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/importer.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

// imports
var flags = scope.flags;
var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
var IMPORT_SELECTOR = scope.IMPORT_SELECTOR;
var rootDocument = scope.rootDocument;
var Loader = scope.Loader;
var Observer = scope.Observer;
var parser = scope.parser;

// importer
// highlander object to manage loading of imports
// for any document, importer:
// - loads any linked import documents (with deduping)
// - whenever an import is loaded, prompts the parser to try to parse
// - observes imported documents for new elements (these are handled via the 
// dynamic importer)
var importer = {

  documents: {},
  
  // nodes to load in the mian document
  documentPreloadSelectors: IMPORT_SELECTOR,
  
  // nodes to load in imports
  importsPreloadSelectors: [
    IMPORT_SELECTOR
  ].join(','),
  
  loadNode: function(node) {
    importLoader.addNode(node);
  },
  
  // load all loadable elements within the parent element
  loadSubtree: function(parent) {
    var nodes = this.marshalNodes(parent);
    // add these nodes to loader's queue
    importLoader.addNodes(nodes);
  },
  
  marshalNodes: function(parent) {
    // all preloadable nodes in inDocument
    return parent.querySelectorAll(this.loadSelectorsForNode(parent));
  },
  
  // find the proper set of load selectors for a given node
  loadSelectorsForNode: function(node) {
    var doc = node.ownerDocument || node;
    return doc === rootDocument ? this.documentPreloadSelectors :
        this.importsPreloadSelectors;
  },
  
  loaded: function(url, elt, resource, err, redirectedUrl) {
    flags.load && console.log('loaded', url, elt);
    // store generic resource
    // TODO(sorvell): fails for nodes inside <template>.content
    // see https://code.google.com/p/chromium/issues/detail?id=249381.
    elt.__resource = resource;
    elt.__error = err;
    if (isImportLink(elt)) {
      var doc = this.documents[url];
      // if we've never seen a document at this url
      if (doc === undefined) {
        // generate an HTMLDocument from data
        doc = err ? null : makeDocument(resource, redirectedUrl || url);
        if (doc) {
          doc.__importLink = elt;
          // note, we cannot use MO to detect parsed nodes because
          // SD polyfill does not report these as mutations.
          this.bootDocument(doc);
        }
        // cache document
        this.documents[url] = doc;
      }
      // don't store import record until we're actually loaded
      // store document resource
      elt.import = doc;
    }
    parser.parseNext();
  },
  
  bootDocument: function(doc) {
    this.loadSubtree(doc);
    // observe documents for new elements being added
    this.observer.observe(doc);
    parser.parseNext();
  },

  loadedAll: function() {
    parser.parseNext();
  }

};

// loader singleton to handle loading imports
var importLoader = new Loader(importer.loaded.bind(importer), 
    importer.loadedAll.bind(importer));

// observer singleton to handle observing elements in imports
// NOTE: the observer has a node added callback and this is set 
// by the dynamic importer module.
importer.observer = new Observer();

function isImportLink(elt) {
  return isLinkRel(elt, IMPORT_LINK_TYPE);
}

function isLinkRel(elt, rel) {
  return elt.localName === 'link' && elt.getAttribute('rel') === rel;
}

function makeDocument(resource, url) {
  // create a new HTML document
  var doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
  // cache the new document's source url
  doc._URL = url;
  // establish a relative path via <base>
  var base = doc.createElement('base');
  base.setAttribute('href', url);
  // add baseURI support to browsers (IE) that lack it.
  if (!doc.baseURI) {
    doc.baseURI = url;
  }
  // ensure UTF-8 charset
  var meta = doc.createElement('meta');
  meta.setAttribute('charset', 'utf-8');

  doc.head.appendChild(meta);
  doc.head.appendChild(base);
  // install html
  doc.body.innerHTML = resource;
  // TODO(sorvell): ideally this code is not aware of Template polyfill,
  // but for now the polyfill needs help to bootstrap these templates
  if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
    HTMLTemplateElement.bootstrap(doc);
  }
  return doc;
}

// Polyfill document.baseURI for browsers without it.
if (!document.baseURI) {
  var baseURIDescriptor = {
    get: function() {
      var base = document.querySelector('base');
      return base ? base.href : window.location.href;
    },
    configurable: true
  };

  Object.defineProperty(document, 'baseURI', baseURIDescriptor);
  Object.defineProperty(rootDocument, 'baseURI', baseURIDescriptor);
}

// exports
scope.importer = importer;
scope.importLoader = importLoader;

});
/* ../node_modules/webcomponents.js/src/HTMLImports/importer.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/dynamic.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
HTMLImports.addModule(function(scope) {

// imports
var parser = scope.parser;
var importer = scope.importer;

// dynamic
// highlander object to manage elements dynamically added to imports
// for any observed document, dynamic:
// - tells the importer to load any imports that are added.
// - tells the parser to parse any added elements that need to be parsed.
// dynamic importer)
var dynamic = {
  // process (load/parse) any nodes added to imported documents.
  added: function(nodes) {
    var owner, parsed;
    for (var i=0, l=nodes.length, n; (i<l) && (n=nodes[i]); i++) {
      if (!owner) {
        owner = n.ownerDocument;
        parsed = parser.isParsed(owner);
      }
      // note: the act of loading kicks the parser, so we use parseDynamic's
      // 2nd argument to control if this added node needs to kick the parser.
      loading = this.shouldLoadNode(n);
      if (loading) {
        importer.loadNode(n);
      }
      if (this.shouldParseNode(n) && parsed) {
        parser.parseDynamic(n, loading);
      }
    }
  },

  shouldLoadNode: function(node) {
    return (node.nodeType === 1) && matches.call(node,
        importer.loadSelectorsForNode(node));
  },

  shouldParseNode: function(node) {
    return (node.nodeType === 1) && matches.call(node,
        parser.parseSelectorsForNode(node));  
  }
  
};

// let the dynamic element helper tie into the import observer.
importer.observer.addCallback = dynamic.added.bind(dynamic);

// x-plat matches
var matches = HTMLElement.prototype.matches || 
    HTMLElement.prototype.matchesSelector || 
    HTMLElement.prototype.webkitMatchesSelector ||
    HTMLElement.prototype.mozMatchesSelector ||
    HTMLElement.prototype.msMatchesSelector;

});

/* ../node_modules/webcomponents.js/src/HTMLImports/dynamic.js end */

    /* ../node_modules/webcomponents.js/src/HTMLImports/boot.js begin */
/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function(scope){

// imports
initializeModules = scope.initializeModules;

/*
NOTE: Even when native HTMLImports exists, the following api is available by
loading the polyfill. This provides api compabitility where the polyfill
cannot be "correct":

  * `document._currentScript`
  * `HTMLImportsLoaded` event
  * `HTMLImports.whenReady(callback)
*/
if (scope.useNative) {
  return;
}

// IE shim for CustomEvent
if (typeof window.CustomEvent !== 'function') {
  window.CustomEvent = function(inType, dictionary) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(inType,
      dictionary.bubbles === false ? false : true,
      dictionary.cancelable === false ? false : true,
      dictionary.detail);
    return e;
  };
}

// Initialize polyfill modules. Note, polyfill modules are loaded but not 
// executed; this is a convenient way to control which modules run when 
// the polyfill is required and allows the polyfill to load even when it's
// not needed.
initializeModules();

// imports
var rootDocument = scope.rootDocument;

/*
  Bootstrap the imports machine.
*/
function bootstrap() {
  HTMLImports.importer.bootDocument(rootDocument);
}
  
// TODO(sorvell): SD polyfill does *not* generate mutations for nodes added
// by the parser. For this reason, we must wait until the dom exists to 
// bootstrap.
if (document.readyState === 'complete' ||
    (document.readyState === 'interactive' && !window.attachEvent)) {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

})(HTMLImports);

/* ../node_modules/webcomponents.js/src/HTMLImports/boot.js end */

}());

/* ../node_modules/x-tag-core/src/core.js begin */
(function () {

/*** Variables ***/

  var win = window,
    doc = document,
    attrProto = {
      setAttribute: Element.prototype.setAttribute,
      removeAttribute: Element.prototype.removeAttribute,
    },
    hasShadow = Element.prototype.createShadowRoot,
    container = doc.createElement('div'),
    noop = function(){},
    trueop = function(){ return true; },
    regexCamelToDash = /([a-z])([A-Z])/g,
    regexPseudoSplit = /([\w-]+(?:\([^\)]+\))?)/g,
    regexPseudoReplace = /(\w*)(?:\(([^\)]*)\))?/,
    regexDigits = /(\d+)/g,
    keypseudo = {
      action: function (pseudo, event) {
        return pseudo.value.match(regexDigits).indexOf(String(event.keyCode)) > -1 == (pseudo.name == 'keypass') || null;
      }
    },
    /*
      - The prefix object generated here is added to the xtag object as xtag.prefix later in the code
      - Prefix provides a variety of prefix variations for the browser in which your code is running
      - The 4 variations of prefix are as follows:
        * prefix.dom: the correct prefix case and form when used on DOM elements/style properties
        * prefix.lowercase: a lowercase version of the prefix for use in various user-code situations
        * prefix.css: the lowercase, dashed version of the prefix
        * prefix.js: addresses prefixed APIs present in global and non-Element contexts
    */
    prefix = (function () {
      var styles = win.getComputedStyle(doc.documentElement, ''),
          pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
          )[1];
      return {
        dom: pre == 'ms' ? 'MS' : pre,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre == 'ms' ? pre : pre[0].toUpperCase() + pre.substr(1)
      };
    })(),
    matchSelector = Element.prototype.matchesSelector || Element.prototype[prefix.lowercase + 'MatchesSelector'],
    mutation = win.MutationObserver || win[prefix.js + 'MutationObserver'];

/*** Functions ***/

// Utilities

  /*
    This is an enhanced typeof check for all types of objects. Where typeof would normaly return
    'object' for many common DOM objects (like NodeLists and HTMLCollections).
    - For example: typeOf(document.children) will correctly return 'htmlcollection'
  */
  var typeCache = {},
      typeString = typeCache.toString,
      typeRegexp = /\s([a-zA-Z]+)/;
  function typeOf(obj) {
    var type = typeString.call(obj);
    return typeCache[type] || (typeCache[type] = type.match(typeRegexp)[1].toLowerCase());
  }

  function clone(item, type){
    var fn = clone[type || typeOf(item)];
    return fn ? fn(item) : item;
  }
    clone.object = function(src){
      var obj = {};
      for (var key in src) obj[key] = clone(src[key]);
      return obj;
    };
    clone.array = function(src){
      var i = src.length, array = new Array(i);
      while (i--) array[i] = clone(src[i]);
      return array;
    };

  /*
    The toArray() method allows for conversion of any object to a true array. For types that
    cannot be converted to an array, the method returns a 1 item array containing the passed-in object.
  */
  var unsliceable = ['undefined', 'null', 'number', 'boolean', 'string', 'function'];
  function toArray(obj){
    return unsliceable.indexOf(typeOf(obj)) == -1 ?
    Array.prototype.slice.call(obj, 0) :
    [obj];
  }

// DOM

  var str = '';
  function query(element, selector){
    return (selector || str).length ? toArray(element.querySelectorAll(selector)) : [];
  }

  function parseMutations(element, mutations) {
    var diff = { added: [], removed: [] };
    mutations.forEach(function(record){
      record._mutation = true;
      for (var z in diff) {
        var type = element._records[(z == 'added') ? 'inserted' : 'removed'],
          nodes = record[z + 'Nodes'], length = nodes.length;
        for (var i = 0; i < length && diff[z].indexOf(nodes[i]) == -1; i++){
          diff[z].push(nodes[i]);
          type.forEach(function(fn){
            fn(nodes[i], record);
          });
        }
      }
    });
  }

// Mixins

  function mergeOne(source, key, current){
    var type = typeOf(current);
    if (type == 'object' && typeOf(source[key]) == 'object') xtag.merge(source[key], current);
    else source[key] = clone(current, type);
    return source;
  }

  function wrapMixin(tag, key, pseudo, value, original){
    var fn = original[key];
    if (!(key in original)) {
      original[key + (pseudo.match(':mixins') ? '' : ':mixins')] = value;
    }
    else if (typeof original[key] == 'function') {
      if (!fn.__mixins__) fn.__mixins__ = [];
      fn.__mixins__.push(xtag.applyPseudos(pseudo, value, tag.pseudos));
    }
  }

  var uniqueMixinCount = 0;
  function mergeMixin(tag, mixin, original, mix) {
    if (mix) {
      var uniques = {};
      for (var z in original) uniques[z.split(':')[0]] = z;
      for (z in mixin) {
        wrapMixin(tag, uniques[z.split(':')[0]] || z, z, mixin[z], original);
      }
    }
    else {
      for (var zz in mixin){
        original[zz + ':__mixin__(' + (uniqueMixinCount++) + ')'] = xtag.applyPseudos(zz, mixin[zz], tag.pseudos);
      }
    }
  }

  function applyMixins(tag) {
    tag.mixins.forEach(function (name) {
      var mixin = xtag.mixins[name];
      for (var type in mixin) {
        var item = mixin[type],
            original = tag[type];
        if (!original) tag[type] = item;
        else {
          switch (type){
            case 'accessors': case 'prototype':
              for (var z in item) {
                if (!original[z]) original[z] = item[z];
                else mergeMixin(tag, item[z], original[z], true);
              }
              break;
            default: mergeMixin(tag, item, original, type != 'events');
          }
        }
      }
    });
    return tag;
  }

// Events

  function delegateAction(pseudo, event) {
    var match, target = event.target;
    if (!target.tagName) return null;
    if (xtag.matchSelector(target, pseudo.value)) match = target;
    else if (xtag.matchSelector(target, pseudo.value + ' *')) {
      var parent = target.parentNode;
      while (!match) {
        if (xtag.matchSelector(parent, pseudo.value)) match = parent;
        parent = parent.parentNode;
      }
    }
    return match ? pseudo.listener = pseudo.listener.bind(match) : null;
  }

  function touchFilter(event) {
    if (event.type.match('touch')){
      event.target.__touched__ = true;
    }
    else if (event.target.__touched__ && event.type.match('mouse')){
      delete event.target.__touched__;
      return;
    }
    return true;
  }

  function writeProperty(key, event, base, desc){
    if (desc) event[key] = base[key];
    else Object.defineProperty(event, key, {
      writable: true,
      enumerable: true,
      value: base[key]
    });
  }

  var skipProps = {};
  for (var z in doc.createEvent('CustomEvent')) skipProps[z] = 1;
  function inheritEvent(event, base){
    var desc = Object.getOwnPropertyDescriptor(event, 'target');
    for (var z in base) {
      if (!skipProps[z]) writeProperty(z, event, base, desc);
    }
    event.baseEvent = base;
  }

// Accessors

  function modAttr(element, attr, name, value, method){
    attrProto[method].call(element, name, attr && attr.boolean ? '' : value);
    if (attr && (attr.property || attr.selector)) {
      var nodes = attr.property ? [element.xtag[attr.property]] : attr.selector ? xtag.query(element, attr.selector) : [],
          index = nodes.length;
      while (index--) nodes[index][method](name, value);
    }
  }

  function updateView(element, name, value){
    if (element.__view__){
      element.__view__.updateBindingValue(element, name, value);
    }
  }

  function attachProperties(tag, prop, z, accessor, attr, name){
    var key = z.split(':'), type = key[0];
    if (type == 'get') {
      key[0] = prop;
      tag.prototype[prop].get = xtag.applyPseudos(key.join(':'), accessor[z], tag.pseudos, accessor[z]);
    }
    else if (type == 'set') {
      key[0] = prop;
      var setter = tag.prototype[prop].set = xtag.applyPseudos(key.join(':'), attr ? function(value){
        modAttr(this, attr, name, value, attr.boolean ? (value ? 'setAttribute' : 'removeAttribute') : 'setAttribute');
        accessor[z].call(this, attr.boolean ? !!value : value);
        updateView(this, prop, value);
      } : accessor[z] ? function(value){
        accessor[z].call(this, value);
        updateView(this, prop, value);
      } : null, tag.pseudos, accessor[z]);

      if (attr) attr.setter = accessor[z];
    }
    else tag.prototype[prop][z] = accessor[z];
  }

  function parseAccessor(tag, prop){
    tag.prototype[prop] = {};
    var accessor = tag.accessors[prop],
        attr = accessor.attribute;

    if (attr) {
      var name = attr.name = (attr ? (attr.name || prop.replace(regexCamelToDash, '$1-$2')) : prop).toLowerCase();
      attr.key = prop;
      tag.attributes[name] = attr;
    }

    for (var z in accessor) attachProperties(tag, prop, z, accessor, attr, name);

    if (attr) {
      if (!tag.prototype[prop].get) {
        var method = (attr.boolean ? 'has' : 'get') + 'Attribute';
        tag.prototype[prop].get = function(){
          return this[method](name);
        };
      }
      if (!tag.prototype[prop].set) tag.prototype[prop].set = function(value){
        modAttr(this, attr, name, value, attr.boolean ? (value ? 'setAttribute' : 'removeAttribute') : 'setAttribute');
        updateView(this, name, value);
      };
    }
  }

  var unwrapComment = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;
  function parseMultiline(fn){
    return unwrapComment.exec(fn.toString())[1];
  }

/*** X-Tag Object Definition ***/

  var xtag = {
    tags: {},
    defaultOptions: {
      pseudos: [],
      mixins: [],
      events: {},
      methods: {},
      accessors: {},
      lifecycle: {},
      attributes: {},
      'prototype': {
        xtag: {
          get: function(){
            return this.__xtag__ ? this.__xtag__ : (this.__xtag__ = { data: {} });
          }
        }
      }
    },
    register: function (name, options) {
      var _name;
      if (typeof name == 'string') {
        _name = name.toLowerCase();
      } else {
        return;
      }
      xtag.tags[_name] = options || {};
      // save prototype for actual object creation below
      var basePrototype = options.prototype;
      delete options.prototype;
      var tag = xtag.tags[_name].compiled = applyMixins(xtag.merge({}, xtag.defaultOptions, options));

      for (var z in tag.events) tag.events[z] = xtag.parseEvent(z, tag.events[z]);
      for (z in tag.lifecycle) tag.lifecycle[z.split(':')[0]] = xtag.applyPseudos(z, tag.lifecycle[z], tag.pseudos, tag.lifecycle[z]);
      for (z in tag.methods) tag.prototype[z.split(':')[0]] = { value: xtag.applyPseudos(z, tag.methods[z], tag.pseudos, tag.methods[z]), enumerable: true };
      for (z in tag.accessors) parseAccessor(tag, z);

      tag.shadow = tag.shadow ? xtag.createFragment(tag.shadow) : null;
      tag.content = tag.content ? xtag.createFragment(tag.content) : null;
      var ready = tag.lifecycle.created || tag.lifecycle.ready;
      tag.prototype.createdCallback = {
        enumerable: true,
        value: function(){
          var element = this;
          if (tag.shadow && hasShadow) this.createShadowRoot().appendChild(tag.shadow.cloneNode(true));
          if (tag.content) this.appendChild(tag.content.cloneNode(true));
          xtag.addEvents(this, tag.events);
          var output = ready ? ready.apply(this, arguments) : null;
          for (var name in tag.attributes) {
            var attr = tag.attributes[name],
                hasAttr = this.hasAttribute(name);
            if (hasAttr || attr.boolean) {
              this[attr.key] = attr.boolean ? hasAttr : this.getAttribute(name);
            }
          }
          tag.pseudos.forEach(function(obj){
            obj.onAdd.call(element, obj);
          });
          return output;
        }
      };

      var inserted = tag.lifecycle.inserted,
          removed = tag.lifecycle.removed;
      if (inserted || removed) {
        tag.prototype.attachedCallback = { value: function(){
          if (removed) this.xtag.__parentNode__ = this.parentNode;
          if (inserted) return inserted.apply(this, arguments);
        }, enumerable: true };
      }
      if (removed) {
        tag.prototype.detachedCallback = { value: function(){
          var args = toArray(arguments);
          args.unshift(this.xtag.__parentNode__);
          var output = removed.apply(this, args);
          delete this.xtag.__parentNode__;
          return output;
        }, enumerable: true };
      }
      if (tag.lifecycle.attributeChanged) tag.prototype.attributeChangedCallback = { value: tag.lifecycle.attributeChanged, enumerable: true };

      tag.prototype.setAttribute = {
        writable: true,
        enumberable: true,
        value: function (name, value){
          var _name = name.toLowerCase();
          var attr = tag.attributes[_name];
          modAttr(this, attr, _name, attr && attr.boolean ? '' : value, 'setAttribute');
          if (attr) attr.setter.call(this, attr.boolean ? true : value);
        }
      };

      tag.prototype.removeAttribute = {
        writable: true,
        enumberable: true,
        value: function (name){
          var _name = name.toLowerCase();
          var attr = tag.attributes[_name];
          modAttr(this, attr, _name, '', 'removeAttribute');
          if (attr) attr.setter.call(this, attr.boolean ? false : undefined);
        }
      };

      var elementProto = basePrototype ?
            basePrototype :
            options['extends'] ?
            Object.create(doc.createElement(options['extends']).constructor).prototype :
            win.HTMLElement.prototype;

      var definition = {
        'prototype': Object.create(elementProto, tag.prototype)
      };
      if (options['extends']) {
        definition['extends'] = options['extends'];
      }
      var reg = doc.registerElement(_name, definition);
      return reg;
    },

    /* Exposed Variables */

    mixins: {},
    prefix: prefix,
    captureEvents: ['focus', 'blur', 'scroll', 'underflow', 'overflow', 'overflowchanged', 'DOMMouseScroll'],
    customEvents: {
      animationstart: {
        attach: [prefix.dom + 'AnimationStart']
      },
      animationend: {
        attach: [prefix.dom + 'AnimationEnd']
      },
      transitionend: {
        attach: [prefix.dom + 'TransitionEnd']
      },
      move: {
        attach: ['mousemove', 'touchmove'],
        condition: touchFilter
      },
      enter: {
        attach: ['mouseover', 'touchenter'],
        condition: touchFilter
      },
      leave: {
        attach: ['mouseout', 'touchleave'],
        condition: touchFilter
      },
      scrollwheel: {
        attach: ['DOMMouseScroll', 'mousewheel'],
        condition: function(event){
          event.delta = event.wheelDelta ? event.wheelDelta / 40 : Math.round(event.detail / 3.5 * -1);
          return true;
        }
      },
      tapstart: {
        observe: {
          mousedown: doc,
          touchstart: doc
        },
        condition: touchFilter
      },
      tapend: {
        observe: {
          mouseup: doc,
          touchend: doc
        },
        condition: touchFilter
      },
      tapmove: {
        attach: ['tapstart', 'dragend', 'touchcancel'],
        condition: function(event, custom){
          switch (event.type) {
            case 'move':  return true;
            case 'dragover':
              var last = custom.lastDrag || {};
              custom.lastDrag = event;
              return (last.pageX != event.pageX && last.pageY != event.pageY) || null;
            case 'tapstart':
              if (!custom.move) {
                custom.current = this;
                custom.move = xtag.addEvents(this, {
                  move: custom.listener,
                  dragover: custom.listener
                });
                custom.tapend = xtag.addEvent(doc, 'tapend', custom.listener);
              }
              break;
            case 'tapend': case 'dragend': case 'touchcancel':
              if (!event.touches.length) {
                if (custom.move) xtag.removeEvents(custom.current , custom.move || {});
                if (custom.tapend) xtag.removeEvent(doc, custom.tapend || {});
                delete custom.lastDrag;
                delete custom.current;
                delete custom.tapend;
                delete custom.move;
              }
          }
        }
      }
    },
    pseudos: {
      __mixin__: {},
      /*


      */
      mixins: {
        onCompiled: function(fn, pseudo){
          var mixins = pseudo.source.__mixins__;
          if (mixins) switch (pseudo.value) {
            case 'before': return function(){
              var self = this,
                  args = arguments;
              mixins.forEach(function(m){
                m.apply(self, args);
              });
              return fn.apply(self, args);
            };
            case null: case '': case 'after': return function(){
              var self = this,
                  args = arguments;
                  returns = fn.apply(self, args);
              mixins.forEach(function(m){
                m.apply(self, args);
              });
              return returns;
            };
          }
        }
      },
      keypass: keypseudo,
      keyfail: keypseudo,
      delegate: { action: delegateAction },
      within: {
        action: delegateAction,
        onAdd: function(pseudo){
          var condition = pseudo.source.condition;
          if (condition) pseudo.source.condition = function(event, custom){
            return xtag.query(this, pseudo.value).filter(function(node){
              return node == event.target || node.contains ? node.contains(event.target) : null;
            })[0] ? condition.call(this, event, custom) : null;
          };
        }
      },
      preventable: {
        action: function (pseudo, event) {
          return !event.defaultPrevented;
        }
      }
    },

    /* UTILITIES */

    clone: clone,
    typeOf: typeOf,
    toArray: toArray,

    wrap: function (original, fn) {
      return function(){
        var args = arguments,
            output = original.apply(this, args);
        fn.apply(this, args);
        return output;
      };
    },
    /*
      Recursively merges one object with another. The first argument is the destination object,
      all other objects passed in as arguments are merged from right to left, conflicts are overwritten
    */
    merge: function(source, k, v){
      if (typeOf(k) == 'string') return mergeOne(source, k, v);
      for (var i = 1, l = arguments.length; i < l; i++){
        var object = arguments[i];
        for (var key in object) mergeOne(source, key, object[key]);
      }
      return source;
    },

    /*
      ----- This should be simplified! -----
      Generates a random ID string
    */
    uid: function(){
      return Math.random().toString(36).substr(2,10);
    },

    /* DOM */

    query: query,

    skipTransition: function(element, fn, bind){
      var prop = prefix.js + 'TransitionProperty';
      element.style[prop] = element.style.transitionProperty = 'none';
      var callback = fn ? fn.call(bind || element) : null;
      return xtag.skipFrame(function(){
        element.style[prop] = element.style.transitionProperty = '';
        if (callback) callback.call(bind || element)
      });
    },

    requestFrame: (function(){
      var raf = win.requestAnimationFrame ||
                win[prefix.lowercase + 'RequestAnimationFrame'] ||
                function(fn){ return win.setTimeout(fn, 20); };
      return function(fn){ return raf(fn); };
    })(),

    cancelFrame: (function(){
      var cancel = win.cancelAnimationFrame ||
                   win[prefix.lowercase + 'CancelAnimationFrame'] ||
                   win.clearTimeout;
      return function(id){ return cancel(id); };
    })(),

    skipFrame: function(fn){
      var id = xtag.requestFrame(function(){ id = xtag.requestFrame(fn) });
      return id;
    },

    matchSelector: function (element, selector) {
      return matchSelector.call(element, selector);
    },

    set: function (element, method, value) {
      element[method] = value;
      if (window.CustomElements) CustomElements.upgradeAll(element);
    },

    innerHTML: function(el, html){
      xtag.set(el, 'innerHTML', html);
    },

    hasClass: function (element, klass) {
      return element.className.split(' ').indexOf(klass.trim())>-1;
    },

    addClass: function (element, klass) {
      var list = element.className.trim().split(' ');
      klass.trim().split(' ').forEach(function (name) {
        if (!~list.indexOf(name)) list.push(name);
      });
      element.className = list.join(' ').trim();
      return element;
    },

    removeClass: function (element, klass) {
      var classes = klass.trim().split(' ');
      element.className = element.className.trim().split(' ').filter(function (name) {
        return name && !~classes.indexOf(name);
      }).join(' ');
      return element;
    },

    toggleClass: function (element, klass) {
      return xtag[xtag.hasClass(element, klass) ? 'removeClass' : 'addClass'].call(null, element, klass);
    },

    /*
      Runs a query on only the children of an element
    */
    queryChildren: function (element, selector) {
      var id = element.id,
        guid = element.id = id || 'x_' + xtag.uid(),
        attr = '#' + guid + ' > ',
        noParent = false;
      if (!element.parentNode){
        noParent = true;
        container.appendChild(element);
      }
      selector = attr + (selector + '').replace(',', ',' + attr, 'g');
      var result = element.parentNode.querySelectorAll(selector);
      if (!id) element.removeAttribute('id');
      if (noParent){
        container.removeChild(element);
      }
      return toArray(result);
    },
    /*
      Creates a document fragment with the content passed in - content can be
      a string of HTML, an element, or an array/collection of elements
    */
    createFragment: function(content) {
      var frag = doc.createDocumentFragment();
      if (content) {
        var div = frag.appendChild(doc.createElement('div')),
          nodes = toArray(content.nodeName ? arguments : !(div.innerHTML = typeof content == 'function' ? parseMultiline(content) : content) || div.children),
          length = nodes.length,
          index = 0;
        while (index < length) frag.insertBefore(nodes[index++], div);
        frag.removeChild(div);
      }
      return frag;
    },

    /*
      Removes an element from the DOM for more performant node manipulation. The element
      is placed back into the DOM at the place it was taken from.
    */
    manipulate: function(element, fn){
      var next = element.nextSibling,
        parent = element.parentNode,
        frag = doc.createDocumentFragment(),
        returned = fn.call(frag.appendChild(element), frag) || element;
      if (next) parent.insertBefore(returned, next);
      else parent.appendChild(returned);
    },

    /* PSEUDOS */

    applyPseudos: function(key, fn, target, source) {
      var listener = fn,
          pseudos = {};
      if (key.match(':')) {
        var split = key.match(regexPseudoSplit),
            i = split.length;
        while (--i) {
          split[i].replace(regexPseudoReplace, function (match, name, value) {
            if (!xtag.pseudos[name]) throw "pseudo not found: " + name + " " + split;
            value = (value === '' || typeof value == 'undefined') ? null : value;
            var pseudo = pseudos[i] = Object.create(xtag.pseudos[name]);
            pseudo.key = key;
            pseudo.name = name;
            pseudo.value = value;
            pseudo['arguments'] = (value || '').split(',');
            pseudo.action = pseudo.action || trueop;
            pseudo.source = source;
            var original = pseudo.listener = listener;
            listener = function(){
              var output = pseudo.action.apply(this, [pseudo].concat(toArray(arguments)));
              if (output === null || output === false) return output;
              output = pseudo.listener.apply(this, arguments);
              pseudo.listener = original;
              return output;
            };
            if (target && pseudo.onAdd) {
              if (target.nodeName) pseudo.onAdd.call(target, pseudo);
              else target.push(pseudo);
            }
          });
        }
      }
      for (var z in pseudos) {
        if (pseudos[z].onCompiled) listener = pseudos[z].onCompiled(listener, pseudos[z]) || listener;
      }
      return listener;
    },

    removePseudos: function(target, pseudos){
      pseudos.forEach(function(obj){
        if (obj.onRemove) obj.onRemove.call(target, obj);
      });
    },

  /*** Events ***/

    parseEvent: function(type, fn) {
      var pseudos = type.split(':'),
          key = pseudos.shift(),
          custom = xtag.customEvents[key],
          event = xtag.merge({
            type: key,
            stack: noop,
            condition: trueop,
            attach: [],
            _attach: [],
            pseudos: '',
            _pseudos: [],
            onAdd: noop,
            onRemove: noop
          }, custom || {});
      event.attach = toArray(event.base || event.attach);
      event.chain = key + (event.pseudos.length ? ':' + event.pseudos : '') + (pseudos.length ? ':' + pseudos.join(':') : '');
      var condition = event.condition;
      event.condition = function(e){
        var t = e.touches, tt = e.targetTouches;
        return condition.apply(this, arguments);
      };
      var stack = xtag.applyPseudos(event.chain, fn, event._pseudos, event);
      event.stack = function(e){
        e.currentTarget = e.currentTarget || this;
        var t = e.touches, tt = e.targetTouches;
        var detail = e.detail || {};
        if (!detail.__stack__) return stack.apply(this, arguments);
        else if (detail.__stack__ == stack) {
          e.stopPropagation();
          e.cancelBubble = true;
          return stack.apply(this, arguments);
        }
      };
      event.listener = function(e){
        var args = toArray(arguments),
            output = event.condition.apply(this, args.concat([event]));
        if (!output) return output;
        // The second condition in this IF is to address the following Blink regression: https://code.google.com/p/chromium/issues/detail?id=367537
        // Remove this when affected browser builds with this regression fall below 5% marketshare
        if (e.type != key && (e.baseEvent && e.type != e.baseEvent.type)) {
          xtag.fireEvent(e.target, key, {
            baseEvent: e,
            detail: output !== true && (output.__stack__ = stack) ? output : { __stack__: stack }
          });
        }
        else return event.stack.apply(this, args);
      };
      event.attach.forEach(function(name) {
        event._attach.push(xtag.parseEvent(name, event.listener));
      });
      if (custom && custom.observe && !custom.__observing__) {
        custom.observer = function(e){
          var output = event.condition.apply(this, toArray(arguments).concat([custom]));
          if (!output) return output;
          xtag.fireEvent(e.target, key, {
            baseEvent: e,
            detail: output !== true ? output : {}
          });
        };
        for (var z in custom.observe) xtag.addEvent(custom.observe[z] || document, z, custom.observer, true);
        custom.__observing__ = true;
      }
      return event;
    },

    addEvent: function (element, type, fn, capture) {
      var event = typeof fn == 'function' ? xtag.parseEvent(type, fn) : fn;
      event._pseudos.forEach(function(obj){
        obj.onAdd.call(element, obj);
      });
      event._attach.forEach(function(obj) {
        xtag.addEvent(element, obj.type, obj);
      });
      event.onAdd.call(element, event, event.listener);
      element.addEventListener(event.type, event.stack, capture || xtag.captureEvents.indexOf(event.type) > -1);
      return event;
    },

    addEvents: function (element, obj) {
      var events = {};
      for (var z in obj) {
        events[z] = xtag.addEvent(element, z, obj[z]);
      }
      return events;
    },

    removeEvent: function (element, type, event) {
      event = event || type;
      event.onRemove.call(element, event, event.listener);
      xtag.removePseudos(element, event._pseudos);
      event._attach.forEach(function(obj) {
        xtag.removeEvent(element, obj);
      });
      element.removeEventListener(event.type, event.stack);
    },

    removeEvents: function(element, obj){
      for (var z in obj) xtag.removeEvent(element, obj[z]);
    },

    fireEvent: function(element, type, options){
      var event = doc.createEvent('CustomEvent');
      options = options || {};
      event.initCustomEvent(type,
        options.bubbles !== false,
        options.cancelable !== false,
        options.detail
      );
      if (options.baseEvent) inheritEvent(event, options.baseEvent);
      element.dispatchEvent(event);
    },

    /*
      Listens for insertion or removal of nodes from a given element using
      Mutation Observers, or Mutation Events as a fallback
    */
    addObserver: function(element, type, fn){
      if (!element._records) {
        element._records = { inserted: [], removed: [] };
        if (mutation){
          element._observer = new mutation(function(mutations) {
            parseMutations(element, mutations);
          });
          element._observer.observe(element, {
            subtree: true,
            childList: true,
            attributes: !true,
            characterData: false
          });
        }
        else ['Inserted', 'Removed'].forEach(function(type){
          element.addEventListener('DOMNode' + type, function(event){
            event._mutation = true;
            element._records[type.toLowerCase()].forEach(function(fn){
              fn(event.target, event);
            });
          }, false);
        });
      }
      if (element._records[type].indexOf(fn) == -1) element._records[type].push(fn);
    },

    removeObserver: function(element, type, fn){
      var obj = element._records;
      if (obj && fn){
        obj[type].splice(obj[type].indexOf(fn), 1);
      }
      else{
        obj[type] = [];
      }
    }

  };

/*** Universal Touch ***/

var touching = false,
    touchTarget = null;

doc.addEventListener('mousedown', function(e){
  touching = true;
  touchTarget = e.target;
}, true);

doc.addEventListener('mouseup', function(){
  touching = false;
  touchTarget = null;
}, true);

doc.addEventListener('dragend', function(){
  touching = false;
  touchTarget = null;
}, true);

var UIEventProto = {
  touches: {
    configurable: true,
    get: function(){
      return this.__touches__ ||
        (this.identifier = 0) ||
        (this.__touches__ = touching ? [this] : []);
    }
  },
  targetTouches: {
    configurable: true,
    get: function(){
      return this.__targetTouches__ || (this.__targetTouches__ =
        (touching && this.currentTarget &&
        (this.currentTarget == touchTarget ||
        (this.currentTarget.contains && this.currentTarget.contains(touchTarget)))) ? (this.identifier = 0) || [this] : []);
    }
  },
  changedTouches: {
    configurable: true,
    get: function(){
      return this.__changedTouches__ || (this.identifier = 0) || (this.__changedTouches__ = [this]);
    }
  }
};

for (z in UIEventProto){
  UIEvent.prototype[z] = UIEventProto[z];
  Object.defineProperty(UIEvent.prototype, z, UIEventProto[z]);
}


/*** Custom Event Definitions ***/

  function addTap(el, tap, e){
    if (!el.__tap__) {
      el.__tap__ = { click: e.type == 'mousedown' };
      if (el.__tap__.click) el.addEventListener('click', tap.observer);
      else {
        el.__tap__.scroll = tap.observer.bind(el);
        window.addEventListener('scroll', el.__tap__.scroll, true);
        el.addEventListener('touchmove', tap.observer);
        el.addEventListener('touchcancel', tap.observer);
        el.addEventListener('touchend', tap.observer);
      }
    }
    if (!el.__tap__.click) {
      el.__tap__.x = e.touches[0].pageX;
      el.__tap__.y = e.touches[0].pageY;
    }
  }

  function removeTap(el, tap){
    if (el.__tap__) {
      if (el.__tap__.click) el.removeEventListener('click', tap.observer);
      else {
        window.removeEventListener('scroll', el.__tap__.scroll, true);
        el.removeEventListener('touchmove', tap.observer);
        el.removeEventListener('touchcancel', tap.observer);
        el.removeEventListener('touchend', tap.observer);
      }
      delete el.__tap__;
    }
  }

  function checkTapPosition(el, tap, e){
    var touch = e.changedTouches[0],
        tol = tap.gesture.tolerance;
    if (
      touch.pageX < el.__tap__.x + tol &&
      touch.pageX > el.__tap__.x - tol &&
      touch.pageY < el.__tap__.y + tol &&
      touch.pageY > el.__tap__.y - tol
    ) return true;
  }

  xtag.customEvents.tap = {
    observe: {
      mousedown: document,
      touchstart: document
    },
    gesture: {
      tolerance: 8
    },
    condition: function(e, tap){
      var el = e.target;
      switch (e.type) {
        case 'touchstart':
          if (el.__tap__ && el.__tap__.click) removeTap(el, tap);
          addTap(el, tap, e);
          return;
        case 'mousedown':
          if (!el.__tap__) addTap(el, tap, e);
          return;
        case 'scroll':
        case 'touchcancel':
          removeTap(this, tap);
          return;
        case 'touchmove':
        case 'touchend':
          if (this.__tap__ && !checkTapPosition(this, tap, e)) {
            removeTap(this, tap);
            return;
          }
          return e.type == 'touchend' || null;
        case 'click':
          removeTap(this, tap);
          return true;
      }
    }
  };

  win.xtag = xtag;
  if (typeof define == 'function' && define.amd) define(xtag);

  doc.addEventListener('WebComponentsReady', function(){
    xtag.fireEvent(doc.body, 'DOMComponentsLoaded');
  });

})();

/* ../node_modules/x-tag-core/src/core.js end */

/* jshint -W067 */
/* jshint unused: false */
(function(global, undefined) {
    'use strict';

    /**
     * @namespace React
     */
    var React = global.React;

    /**
     * @namespace xblocks
     */
    var xblocks = global.xblocks = {};

    /* xblocks/utils.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.utils = xblocks.utils || {};

xblocks.utils.REG_TYPE_EXTRACT = /\s([a-zA-Z]+)/;
xblocks.utils.REG_PRISTINE = /^[\$_a-z][\$\w]*$/i;

/* xblocks/utils/log.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.log = {};

xblocks.utils.log.time = function(/*element, name*/) {
    /*
    if (!element._xtimers) {
        element._xtimers = {};
    }

    if (!Array.isArray(element._xtimers[ name ])) {
        element._xtimers[ name ] = [];
    }

    element._xtimers[ name ].push(performance.now());
    */
};

/* xblocks/utils/log.js end */

/* xblocks/utils/seq.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @returns {number}
 */
xblocks.utils.seq = (function() {
    var i = 0;
    return function() {
        return ++i;
    };
}());

/* xblocks/utils/seq.js end */

/* xblocks/utils/type.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {*} param
 * @returns {string}
 */
xblocks.utils.type = function(param) {
    if (param === undefined) {
        return 'undefined';
    }

    if (param === null) {
        return 'null';
    }

    var type = typeof(param);

    if (type === 'object') {
        type = Object.prototype.toString.call(param)
            .match(xblocks.utils.REG_TYPE_EXTRACT)[1]
            .toLowerCase();
    }

    if (type === 'number') {
        var paramStr = param.toString();
        if (paramStr === 'NaN') {
            type = 'NaN';

        } else {
            type = paramStr.indexOf('.') === -1 ? 'integer' : 'float';
        }
    }

    return type;
};

/* xblocks/utils/type.js end */

/* xblocks/utils/isPlainObject.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {*} obj
 * @returns {boolean}
 */
xblocks.utils.isPlainObject = function(obj) {
    if (xblocks.utils.type(obj) !== 'object') {
        return false;
    }

    if (obj.constructor && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
        return false;
    }

    return true;
};

/* xblocks/utils/isPlainObject.js end */

/* xblocks/utils/pristine.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @param {string} methodName
 * @returns {boolean}
 */
xblocks.utils.pristine = function(methodName) {
    var method = global[methodName];

    if (!methodName || !method) {
        return false;
    }

    if (!xblocks.utils.REG_PRISTINE.test(methodName)) {
        return false;
    }

    var type = typeof(method);

    if (type !== 'function' && type !== 'object') {
        return false;
    }

    var re = new RegExp("function\\s+" + methodName + "\\(\\s*\\)\\s*{\\s*\\[native code\\]\\s*}");

    if (!re.test(method)) {
        return false;
    }

    if (type === 'function') {
        if (!method.valueOf || method.valueOf() !== method) {
            return false;
        }
    }

    return true;
};

/* xblocks/utils/pristine.js end */

/* xblocks/utils/merge.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @returns {object}
 */
xblocks.utils.merge = function() {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    var i = 1;
    var length = arguments.length;
    var deep = false;
    var type = xblocks.utils.type(target);

    if (type === 'boolean') {
        deep = target;
        target = arguments[i] || {};
        i++;
    }

    type = xblocks.utils.type(target);

    if (type !== 'object' && type !== 'function') {
        target = {};
    }

    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {
        if ((options = arguments[i]) !== null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                if (target === copy) {
                    continue;
                }

                if (deep && copy && (xblocks.utils.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];

                    } else {
                        clone = src && xblocks.utils.isPlainObject(src) ? src : {};
                    }

                    target[name] = xblocks.utils.merge( deep, clone, copy );

                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    return target;
};

/* xblocks/utils/merge.js end */

/* xblocks/utils/lazy.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @function
 * @private
 */
xblocks.utils._lazy = (function() {
    if (typeof(global.setImmediate) === 'function') {
        return global.setImmediate;

    } else {
        return function(callback) {
            return global.setTimeout(callback, 0);
        };
    }
}());

/**
 * @param {function} callback
 * @param {*} args
 * @returns {function}
 */
xblocks.utils.lazy = function(callback, args) {
    if (!callback._args) {
        callback._args = [];
    }

    callback._args.push(args);

    if (!callback._timer) {
        callback._timer = xblocks.utils._lazy(function() {
            callback._timer = 0;
            callback(callback._args.splice(0, callback._args.length));
        });
    }

    return callback;
};

/* xblocks/utils/lazy.js end */

/* xblocks/utils/equals.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */

xblocks.utils._equal = {
    'array': function(x, y) {
        if (x === y) {
            return true;
        }

        var i = 0;
        var l = x.length;

        if (l !== y.length) {
            return false;
        }

        for (; i < l; i++) {
            if (!xblocks.utils.equals(x[i], y[i])) {
                return false;
            }
        }

        return true;
    },

    'object': function(x, y) {
        if (x === y) {
            return true;
        }

        var i;

        for (i in x) {
            if (y.hasOwnProperty(i)) {
                if (!xblocks.utils.equals(x[i], y[i])) {
                    return false;
                }

            } else {
                return false;
            }
    	}

        for (i in y) {
            if (!x.hasOwnProperty(i)) {
                return false;
            }
        }

    	return true;
    },

    'date': function(x, y) {
        return x.getTime() === y.getTime();
    },

    'regexp': function(x, y) {
        return x.toString() === y.toString();
    },

    'function': function(x, y) {
        return x.toString() === y.toString();
    }
};

xblocks.utils.equals = function(x, y) {
    if (x === y) {
        return true;
    }

    var xType = xblocks.utils.type(x);
    var yType = xblocks.utils.type(y);

    if (xType !== yType) {
        return false;
    }

    if (xblocks.utils._equal.hasOwnProperty(xType)) {
        return xblocks.utils._equal[ xType ](x, y);
    }

    return x == y;
};

/* xblocks/utils/equals.js end */

/* xblocks/utils/propTypes.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {string} tagName
 * @returns {object}
 */
xblocks.utils.propTypes = function(tagName) {
    var view = xblocks.view.get(tagName);

    if (!view) {
        return {};
    }

    if (view.propTypes) {
        return view.propTypes;
    }

    if (view.originalSpec && view.originalSpec.propTypes) {
        return view.originalSpec.propTypes;
    }

    return {};
};

/* xblocks/utils/propTypes.js end */

/* xblocks/utils/tmpl.js begin */
/* global xblocks */
/* jshint strict: false */

(function() {
    var cache = {};

    /**
     * @param {string} str
     * @param {object} data
     * @returns {string}
     * @see http://ejohn.org/blog/javascript-micro-templating/
     */
    xblocks.utils.tmpl = function(str, data) {
        if (!cache.hasOwnProperty(str)) {
            /* jshint -W054 */
            cache[str] = new Function('obj',
               "var p=[],print=function(){p.push.apply(p,arguments);};" +
               "with(obj){p.push('" +
               str.replace(/[\r\t\n]/g, " ")
                   .split("<%").join("\t")
                   .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                   .replace(/\t=(.*?)%>/g, "',$1,'")
                   .split("\t").join("');")
                   .split("%>").join("p.push('")
                   .split("\r").join("\\'") +
                   "');}return p.join('');");
        }

        return data ? cache[str](data) : cache[str];
    };

}());

/* xblocks/utils/tmpl.js end */


/* xblocks/utils.js end */

    /* xblocks/dom.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.dom = xblocks.dom || {};
xblocks.dom.attrs = xblocks.dom.attrs || {};

/**
 * @type {string[]}
 */
xblocks.dom.attrs.ARRTS_BOOLEAN = [
    'active',
    'autofocus',
    'checked',
    'defer',
    'disabled',
    'ismap',
    'multiple',
    'readonly',
    'required',
    'selected',
    'xb-static'
];

/**
 * @type {object}
 */
xblocks.dom.attrs.XB_ATTRS = {
    STATIC: 'xb-static'
};

/* xblocks/dom/attrs.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * @param {HTMLElement} element
 * @param {object} attrs
 * @return {object}
 */
xblocks.dom.attrs.get = function(element, attrs) {
    if (element.nodeType !== 1 || !element.hasAttributes()) {
        return attrs;
    }

    for (var attrName in attrs) {
        if (attrs.hasOwnProperty(attrName) && element.hasAttribute(attrName)) {
            if (typeof(attrs[ attrName ]) === 'boolean') {
                attrs[ attrName ] = xblocks.dom.attrs.valueConversion(
                    attrName,
                    element.getAttribute(attrName),
                    React.PropTypes.bool
                );

            } else {
                attrs[ attrName ] = element.getAttribute(attrName);
            }
        }
    }

    return attrs;
};

/**
 * @param {HTMLElement} element
 * @return {object}
 */
xblocks.dom.attrs.toObject = function(element) {
    var attrs = {};

    if (element.nodeType === 1 && element.hasAttributes()) {
        Array.prototype.forEach.call(element.attributes, xblocks.dom.attrs._toObjectIterator, attrs);
    }

    return attrs;
};

/**
 * @param {Attr} attr
 * @private
 */
xblocks.dom.attrs._toObjectIterator = function(attr) {
    this[ attr.nodeName ] = attr.value;
};

/**
 * @param {string} prop
 * @param {*} value
 * @param {function} [type]
 * @returns {*}
 */
xblocks.dom.attrs.valueConversion = function(prop, value, type) {
    if (!type) {
        if (value === 'true' || value === 'false' || xblocks.dom.attrs.ARRTS_BOOLEAN.indexOf(prop) !== -1) {
            type = React.PropTypes.bool;
        }
    }

    switch (type) {
        case React.PropTypes.bool:
            return Boolean(value === true || value === '' || prop === value || value === 'true');

        case React.PropTypes.string:
            return String(value);

        case React.PropTypes.number:
            return Number(value);

        default:
            return value;
    }
};

/**
 * @param {object} props
 * @param {object} [propTypes]
 * @returns {object}
 */
xblocks.dom.attrs.typeConversion = function(props, propTypes) {
    propTypes = propTypes || {};
    var prop;

    for (prop in props) {
        if (props.hasOwnProperty(prop)) {
            props[ prop ] = xblocks.dom.attrs.valueConversion(
                prop,
                props[ prop ],
                propTypes[ prop ]
            );
        }
    }

    return props;
};

/* xblocks/dom/attrs.js end */

/* xblocks/dom/contentNode.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement}
 */
xblocks.dom.contentNode = function(node) {
    var element;

    if (node.xuid && node.nodeType === 1 && node.hasChildNodes()) {
        element = node.querySelector('[data-xb-content="' + node.xuid + '"]');

        if (!element) {
            element = node.querySelector('script[type="text/x-template"]:not([ref]),template:not([ref])');
        }
    }

    return element || node;
};

/* xblocks/dom/contentNode.js end */

/* xblocks/dom/upgradeElements.js begin */
/* global xblocks, global */
/* jshint strict: false */

xblocks.dom.upgradeElements = (function() {
    if (global.CustomElements && typeof(global.CustomElements.upgradeAll) === 'function') {
        return global.CustomElements.upgradeAll;

    } else {
        return function() {};
    }
}());

/* xblocks/dom/upgradeElements.js end */


/* xblocks/dom.js end */

    /* xblocks/event.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.event = xblocks.event || {};

/**
 * @constructor
 */
xblocks.event.Custom = (function() {
    if (!xblocks.utils.pristine('CustomEvent')) {
        var CustomEvent = function(event, params) {
            params = params || {};
            var evt = global.document.createEvent('CustomEvent');
            evt.initCustomEvent(event, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
            return evt;
        };

        CustomEvent.prototype = global.Event.prototype;

        return CustomEvent;

    } else {
        return global.CustomEvent;
    }
}());

/**
 * @param {HTMLElement} element
 * @param {string} name
 * @param {object} params
 */
xblocks.event.dispatch = function(element, name, params) {
    element.dispatchEvent(new xblocks.event.Custom(name, params));
};

/* xblocks/event.js end */

    /* xblocks/react.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.react = xblocks.react || {};

/**
 * @param {String} rootNodeID
 * @returns {HTMLElement}
 */
xblocks.react.findContainerForID = function(rootNodeID) {
    return React.__internals.Mount.findReactContainerForID(rootNodeID);
};

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement}
 */
xblocks.react.findContainerForNode = function(node) {
    var reatId = xblocks.react.getID(node);
    return (reatId && xblocks.react.findContainerForID(reatId));
};

/**
 * @param {HTMLElement} node
 * @returns {?String}
 */
xblocks.react.getRootID = function(node) {
    var rootElement = xblocks.react.getRootElementInContainer(node);
    return rootElement && xblocks.react.getID(rootElement);
};

/**
 * @param {String} rootId
 * @returns {?Object}
 */
xblocks.react.getInstancesByRootID = function(rootId) {
    return React.__internals.Mount._instancesByReactRootID[ rootId ];
};

/**
 * FIXME check after update React !!
 * @param {HTMLElement} node
 * @returns {?HTMLElement}
 */
xblocks.react.getRootElementInContainer = function(node) {
    if (!node) {
        return null;
    }

    if (node.nodeType === 9) {
        return node.documentElement;
    } else {
        return node.firstChild;
    }
};

/**
 * FIXME check after update React !!
 * @param {HTMLElement} node
 * @returns {?String}
 */
xblocks.react.getID = function(node) {
    return node && node.getAttribute && node.getAttribute('data-reactid') || '';
};

/* xblocks/react.js end */

    /* xblocks/tag.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.tag = global.xtag;

/* xblocks/tag.js end */

    /* xblocks/view.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * @module xblocks.view
 */
xblocks.view = {};

var _viewCommon = {
    propTypes: {
        '_uid': React.PropTypes.renderable,
        'children': React.PropTypes.renderable,
        'xb-static': React.PropTypes.bool
    },

    template: function(ref, props) {
        var rootNode = xblocks.react.findContainerForID(this._rootNodeID);
        var xtmpl = rootNode && rootNode.xtmpl;

        if (typeof(xtmpl) === 'object' && xtmpl.hasOwnProperty(ref)) {
            props = props || {};
            props.dangerouslySetInnerHTML = {
                '__html': this._templatePrepare(xtmpl[ref])
            };

            return React.DOM.div(props);
        }

        return null;
    }
};

var _viewCommonUser = {
    _templatePrepare: function(tmplString) {
        return tmplString;
    }
};

/**
 * @param {object} component
 */
xblocks.view.create = function(component) {
    component = Array.isArray(component) ? component : [ component ];
    component.unshift(true, {}, _viewCommonUser);
    component.push(_viewCommon);

    return React.createClass(xblocks.utils.merge.apply({}, component));
};

/**
 * @param {string} blockName
 * @param {object} component
 * @throws
 */
xblocks.view.register = function(blockName, component) {
    if (React.DOM.hasOwnProperty(blockName)) {
        throw 'Specified item "' + blockName + '" is already defined';
    }

    React.DOM[ blockName ] = xblocks.view.create(component);
    return React.DOM[ blockName ];
};

/**
 * @param {string} blockName
 * @returns {*}
 */
xblocks.view.get = function(blockName) {
    return React.DOM[ blockName ];
};

/* xblocks/view.js end */

    /* xblocks/block.js begin */
/* global xblocks */
/* jshint strict: false */

var _blockStatic = {
    tmplCompile: function(tmplElement) {
        this.xtmpl[ tmplElement.getAttribute('ref') ] = tmplElement.innerHTML;
    },

    create: function(element) {
        if (element.hasChildNodes()) {
            Array.prototype.forEach.call(
                element.querySelectorAll('script[type="text/x-template"][ref],template[ref]'),
                _blockStatic.tmplCompile,
                element
            );
        }

        element.xblock = xblocks.element.create(element);
    },

    createLazy: function(elements) {
        elements.forEach(_blockStatic.create);
    }
};

var _blockCommon = {
    lifecycle: {
        created: function() {
            xblocks.utils.log.time(this, 'xb_init');
            xblocks.utils.log.time(this, 'dom_inserted');

            this.xtagName = this.tagName.toLowerCase();
            this.xtmpl = {};
            this.xuid = xblocks.utils.seq();
            this.xprops = xblocks.utils.propTypes(this.xtagName);
            this._xinserted = false;
        },

        inserted: function() {
            if (this._xinserted) {
                return;
            }

            this._xinserted = true;

            // asynchronous read content
            // <xb-test><script>...</script><div>not found</div></xb-test>
            if (this.getElementsByTagName('script').length) {
                xblocks.utils.lazy(_blockStatic.createLazy, this);

            } else {
                _blockStatic.create(this);
            }

            xblocks.utils.log.time(this, 'dom_inserted');
        },

        removed: function() {
            this._xinserted = false;

            // replace initial content after destroy react component
            // fix:
            // element.parentNode.removeChild(element);
            // document.body.appendChild(element);
            if (this.xblock) {
                var content = this.content;
                this.xblock.destroy();
                this.xblock = undefined;
                this.content = content;
            }
        },

        attributeChanged: function(attrName, oldValue, newValue) {
            // removeAttribute('xb-static')
            if (attrName === xblocks.dom.attrs.XB_ATTRS.STATIC &&
                newValue === null &&
                this.xblock &&
                !this.mounted) {

                this.xblock.repaint();
            }
        }
    },

    accessors: {
        // check mounted react
        mounted: {
            get: function() {
                return Boolean(this.xblock && this.xblock.isMounted());
            }
        },

        content: {
            get: function() {
                if (this.mounted) {
                    return this.xblock.getMountedContent();
                }

                return xblocks.dom.contentNode(this).innerHTML;
            },

            set: function(content) {
                if (this.mounted) {
                    this.xblock.setMountedContent(content);

                } else {
                    xblocks.dom.contentNode(this).innerHTML = content;
                    this.upgrade();
                }
            }
        },

        // getting object attributes
        attrs: {
            get: function() {
                return xblocks.dom.attrs.toObject(this);
            }
        },

        state: {
            get: function() {
                var prop;
                var props = xblocks.dom.attrs.toObject(this);
                var xprops = this.xprops;
                var eprops = xblocks.tag.tags[ this.xtagName ].accessors;
                var common = _blockCommon.accessors;

                for (prop in eprops) {
                    if (xprops.hasOwnProperty(prop) &&
                        eprops.hasOwnProperty(prop) &&
                        !common.hasOwnProperty(prop)) {

                        props[ prop ] = this[ prop ];
                    }
                }

                xblocks.dom.attrs.typeConversion(props, xprops);
                return props;
            }
        }
    },

    methods: {
        upgrade: function() {
            xblocks.dom.upgradeElements(this);
        },

        cloneNode: function(deep) {
            // not to clone the contents
            var node = Node.prototype.cloneNode.call(this, false);
            node.xtmpl = this.xtmpl;
            node._xinserted = false;

            if (deep) {
                node.content = this.content;
            }

            return node;
        }
    }
};

/**
 * @param {string} blockName
 * @param {?object} options
 * @returns {HTMLElement}
 */
xblocks.create = function(blockName, options) {
    options = Array.isArray(options) ? options : [ options ];
    options.unshift(true, {});
    options.push(_blockCommon);
    return xblocks.tag.register(blockName, xblocks.utils.merge.apply({}, options));
};

/* xblocks/block.js end */

    /* xblocks/element.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

var _elementStatic = {
    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    checkNodeChange: function(record) {
        return (record.type === 'childList');
    },

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    checkAttributesChange: function(record) {
        return (record.type === 'attributes');
    },

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    filterAttributesRemove: function(record) {
        return (record.type === 'attributes' && !this._node.hasAttribute(record.attributeName));
    },

    /**
     * @param {MutationRecord} record
     * @returns {string}
     * @private
     */
    mapAttributesName: function(record) {
        return record.attributeName;
    },

    /**
     * @param {array} records
     * @private
     */
    globalInitEvent: function(records) {
        xblocks.event.dispatch(global, 'xb-created', { detail: { records: records } });
    },

    /**
     * @param {array} records
     * @private
     */
    globalRepaintEvent: function(records) {
        xblocks.event.dispatch(global, 'xb-repaint', { detail: { records: records } });
    }

    /**
     * @param {array} records
     * @private
     */
    //globalUpdateEvent: function(records) {
    //    xblocks.event.dispatch(global, 'xb-update', { detail: { records: records } });
    //}
};

/**
 * @param {HTMLElement} node
 * @constructor
 */
xblocks.element = function(node) {
    node.xblock = this;
    this._node = node;
    this._init(node.state, node.content, this._callbackInit);
};

/**
 * @param {HTMLElement} node
 * @returns {xblocks.element}
 */
xblocks.element.create = function(node) {
    return new xblocks.element(node);
};

/**
 * @type {HTMLElement}
 * @private
 */
xblocks.element.prototype._node = null;

/**
 * @type {Constructor}
 * @private
 */
xblocks.element.prototype._component = null;

/**
 * @type {MutationObserver}
 * @private
 */
xblocks.element.prototype._observer = null;

/**
 * Unmounts a component and removes it from the DOM
 */
xblocks.element.prototype.destroy = function() {
    React.unmountComponentAtNode(this._node);
    this.unmount();
};

/**
 * Unmounts a component
 */
xblocks.element.prototype.unmount = function() {
    if (this._observer) {
        this._observer.disconnect();
    }

    if (this.isMounted()) {
        this._component.unmountComponent();
    }

    this._component = null;
};

/**
 * @param {object} [props]
 * @param {Array} [removeProps]
 * @param {function} [callback]
 */
xblocks.element.prototype.update = function(props, removeProps, callback) {
    if (!this.isMounted()) {
        return;
    }

    var nextProps = this._node.state;
    var action = 'setProps';

    if (typeof(props) === 'object') {
        var prop;
        for (prop in props) {
            if (props.hasOwnProperty(prop)) {
                nextProps[ prop ] = props[ prop ];
            }
        }
    }

    // merge of new and current properties
    // and the exclusion of remote properties
    if (Array.isArray(removeProps) && removeProps.length) {
        action = 'replaceProps';
        nextProps = xblocks.utils.merge(true, {}, this.getMountedProps(), nextProps);

        var l = removeProps.length;
        while (l--) {
            if (nextProps.hasOwnProperty(removeProps[l])) {
                delete nextProps[ removeProps[l] ];
            }
        }
    }

    if (nextProps.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
        this.repaint(callback);

    } else {
        xblocks.dom.attrs.typeConversion(nextProps, this._node.xprops);
        this._component[ action ](nextProps, this._callbackUpdate.bind(this, callback));
    }
};

/**
 * @param {function} [callback]
 */
xblocks.element.prototype.repaint = function(callback) {
    var children = this._node.content;
    var props = this._node.state;
    var mprops = this.getMountedProps() || {};
    var prop;

    for (prop in mprops) {
        if (mprops.hasOwnProperty(prop)) {
            props[ prop ] = mprops[ prop ];
        }
    }

    this.destroy();
    this._init(props, children, this._callbackRepaint.bind(this, callback));
};

/**
 *
 * @returns {boolean}
 */
xblocks.element.prototype.isMounted = function() {
    return Boolean(this._component && this._component.isMounted());
};

xblocks.element.prototype.setMountedContent = function(content) {
    if (this.isMounted()) {
        this.update({ 'children': content });
    }
};

xblocks.element.prototype.getMountedContent = function() {
    if (this.isMounted()) {
        return this._component.props.children;
    }
};

/**
 * @returns {?object}
 */
xblocks.element.prototype.getMountedProps = function() {
    return this.isMounted() ? this._component.props : null;
};

/**
 * @param {object} [props]
 * @param {string} [children]
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._init = function(props, children, callback) {
    if (this.isMounted()) {
        return;
    }

    // FIXME need more tests
    // only polyfill
    // internal elements are re-created, while retaining component reference react that you created earlier
    // possible solutions: to use the tag <template> or <script> for the inner elements
    // example:
    // <xb-menu>
    //   <template>
    //     <xb-menuitem></xb-menuitem>
    //     <xb-menuitem></xb-menuitem>
    //     <xb-menuitem></xb-menuitem>
    //   </template>
    // </xb-menu>
    if (!global.CustomElements.useNative) {
        var reactId = xblocks.react.getRootID(this._node);
        if (reactId) {
            var reactNode = xblocks.react.findContainerForID(reactId);
            if (reactNode !== this._node) {
                var oldProxyConstructor = xblocks.react.getInstancesByRootID(reactId);
                if (oldProxyConstructor && oldProxyConstructor.isMounted()) {
                    children = oldProxyConstructor.props.children || '';
                    React.unmountComponentAtNode(reactNode);
                    this._node.innerHTML = '';
                }
            }
        }
    }

    props._uid = this._node.xuid;
    xblocks.dom.attrs.typeConversion(props, this._node.xprops);

    var proxyConstructor = xblocks.view.get(this._node.xtagName)(props, children);

    if (props.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
        this.unmount();
        xblocks.utils.log.time(this._node, 'react_render');
        this._node.innerHTML = React.renderComponentToStaticMarkup(proxyConstructor);
        xblocks.utils.log.time(this._node, 'react_render');
        this._node.upgrade();

        if (callback) {
            callback.call(this);
        }

    } else {
        xblocks.utils.log.time(this._node, 'react_render');
        var that = this;
        this._component = React.renderComponent(
            proxyConstructor,
            this._node,
            function() {
                xblocks.utils.log.time(that._node, 'react_render');
                that._component = this;
                that._callbackRender(callback);
            }
        );
    }
};

/**
 * @private
 */
xblocks.element.prototype._callbackInit = function() {
    xblocks.event.dispatch(this._node, 'xb-created');
    xblocks.utils.lazy(_elementStatic.globalInitEvent, this._node);
    xblocks.utils.log.time(this._node, 'xb_init');
};

/**
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._callbackRepaint = function(callback) {
    xblocks.event.dispatch(this._node, 'xb-repaint');
    xblocks.utils.lazy(_elementStatic.globalRepaintEvent, this._node);

    if (callback) {
        callback.call(this);
    }
};

/**
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._callbackRender = function(callback) {
    this._node.upgrade();

    if (!this._observer) {
        this._observer = new global.MutationObserver(this._callbackMutation.bind(this));
    }

    this._observer.observe(this._node, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: false,
        attributeOldValue: false,
        characterDataOldValue: false,
        attributeFilter: Object.keys(this._node.xprops)
    });

    if (callback) {
        callback.call(this);
    }
};

/**
 * @param {MutationRecord[]} records
 * @private
 */
xblocks.element.prototype._callbackMutation = function(records) {
    if (!this.isMounted()) {
        return;
    }

    // full repaint
    if (records.some(_elementStatic.checkNodeChange)) {
        this.repaint();

    } else if (records.some(_elementStatic.checkAttributesChange)) {

        var removeAttrs = records
            .filter(_elementStatic.filterAttributesRemove, this)
            .map(_elementStatic.mapAttributesName);

        this.update(null, removeAttrs);
    }
};

/**
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._callbackUpdate = function(callback) {
    this._node.upgrade();

    xblocks.event.dispatch(this._node, 'xb-update');
    //xblocks.utils.lazy(_elementStatic.globalUpdateEvent, this._node);

    if (callback) {
        callback.call(this);
    }
};

/* xblocks/element.js end */


}(function() {
    return this || (1, eval)('this');
}()));
