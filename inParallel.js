/**
 * Brings in the ability to chain methods over a collection (array, list)
 * and pass each item i, trough the whole chain of methods in order to be modified,
 * while iterating only once!
 *
 * The syntax looks like this: composinator([1, 2, 3])(doSomething)(doSomethingElse)();
 * *** Note the last pair of braces is really needed, b/v it fires up the whole chain.
 *
 * @param collection
 * @returns {wrapper}
 */
function inParallel(collection) {
    var fns = [];

    return function wrapper(fn) {
        // If there is a callback function passed, than stack it to be used later
        if (typeof fn == 'function') {
            fns.push(fn);
            return wrapper;
        }
        // Otherwise, replace itself with the initiator, and fire up the chain of operations!
        return function() {
            return collection.map(function (item) {
                for (var i = 0; i < fns.length; i++) {
                    var modifiedItem = fns[i](item);

                    // If the method didn't return an item, than don't use it!
                    item = (modifiedItem) ? modifiedItem : item;
                }

                return item;
            });
        }();
    }
}


var modified = inParallel([1, 2, 3])(
	function(n) {
	return n + 'first - ';
})(function(n) {
	return n + 'second - '
})(function(n) {
	return n + 'third - '
})(function(n) {
	return n;
})(function(n) {
	return n + 'fifth- '
})();


console.log(modified)