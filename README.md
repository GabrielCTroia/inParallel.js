Brings in the ability to chain methods over a collection (array, list) and pass each item i, trough the whole chain of methods in order to be modified, while iterating only once!
 
 
 The syntax looks like this: composinator([1, 2, 3])(doSomething)(doSomethingElse)();
 *** Note the last pair of braces is really needed, b/v it fires up the whole chain.
