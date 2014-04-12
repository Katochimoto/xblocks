(function(xblocks) {
    var optionsCache = {};

    function createOptions(options) {
        var object = optionsCache[options] = {};

        (options.match(/\S+/g) || []).forEach(function(flag) {
            object[flag] = true;
        });

        return object;
    }

    xblocks.Callbacks = function(options) {

        options = _.isString(options) ?
            (optionsCache[options] || createOptions(options)) :
            _.cloneDeep(options);

        var memory;
        var fired;
        var firing;
        var firingStart;
        var firingLength;
        var firingIndex;
        var list = [];
        var stack = !options.once && [];

        var fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for ( ; list && firingIndex < firingLength; firingIndex++ ) {
                if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
                    memory = false; // To prevent further calls using add
                    break;
                }
            }
            firing = false;
            if ( list ) {
                if ( stack ) {
                    if ( stack.length ) {
                        fire( stack.shift() );
                    }
                } else if ( memory ) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        };

        var self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if ( list ) {
                    // First, we save the current length
                    var start = list.length;

                    (function add(args) {
                        _.forEach(args, function(arg) {
                            if (_.isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) {
                                    list.push( arg );
                                }

                            } else if (arg && arg.length && !_.isString(arg)) {
                                // Inspect recursively
                                add(arg);
                            }
                        });

                    })(arguments);

                    // Do we need to add the callbacks to the
                    // current firing batch?
                    if ( firing ) {
                        firingLength = list.length;
                        // With memory, if we're not firing then
                        // we should call right away
                    } else if ( memory ) {
                        firingStart = start;
                        fire( memory );
                    }
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                if ( list ) {
                    _.forEach(arguments, function(arg) {
                        var index;
                        while ((index = _.indexOf(list, arg, index)) > -1) {
                            list.splice( index, 1 );
                            // Handle firing indexes
                            if ( firing ) {
                                if ( index <= firingLength ) {
                                    firingLength--;
                                }
                                if ( index <= firingIndex ) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function( fn ) {
                return fn ? _.indexOf(list, fn) > -1 : !!( list && list.length );
            },
            // Remove all callbacks from the list
            empty: function() {
                list = [];
                firingLength = 0;
                return this;
            },
            // Have the list do nothing anymore
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            // Is it disabled?
            disabled: function() {
                return !list;
            },
            // Lock the list in its current state
            lock: function() {
                stack = undefined;
                if ( !memory ) {
                    self.disable();
                }
                return this;
            },
            // Is it locked?
            locked: function() {
                return !stack;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function( context, args ) {
                if ( list && ( !fired || stack ) ) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    if ( firing ) {
                        stack.push( args );
                    } else {
                        fire( args );
                    }
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith( this, arguments );
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };

        return self;
    };

}(xblocks));