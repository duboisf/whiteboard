(function() {
    var count = 0;

    Shape = function (type) {
        this.type = type;
    };

    Shape.prototype.increment = function () {
        return ++count;
    };

    Shape.prototype.getType = function () {
        return this.type;
    };

    Shape.staticMethod = function() {
        return "We dont need know stinking instance!";
    }

}());

console.log( Shape.staticMethod() );
var a = new Shape('Triangle');
var b = new Shape('Square');
a.getType();
b.getType();
console.log( "a: " + a.increment() );
console.log( "a: " + a.increment() );
console.log( "b: " + b.increment() );

/*
Explanations:
We execute he anonymous function to createa  closure that wraps the count variable into the scope chain of the anonymouse namespace which contains Shape.

So once this is run Shape has the global, scope (containing count) and the local contexts in each function wrapped up in it. This chain persists even after execution. (So count isn't lost when the anonymous function finishes executing)

Since variable and function resolution will traverse the prorotype chaing, any objects performing actions on the count variable (assuming they dont shadow it) will resolve to the same variable for all instances of Shape.

This, in effect mimics the 'static' keyword / accessor of the Java language.
*/
