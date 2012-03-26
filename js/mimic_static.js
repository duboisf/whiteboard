(function() {
    var count = 0;

    Shape = function (type, start) {
        this.type = type;
        count = start;
    };

    Shape.prototype.increment = function () {
        return ++count;
    };

    Shape.prototype.getType = function () {
        return this.type;
    };

    Shape.staticMethod = function() {
        return "We don't need no steenking instance!";
    }

}());

console.log( Shape.staticMethod() );
var a = new Shape('Triangle', 5);
console.log( "a: " + a.getType() );
console.log( "a: (6) " + a.increment() );
console.log( "a: (7) " + a.increment() );
var b = new Shape('Square', 100);
console.log( "b: " + b.getType() );
console.log( "b: (101) " + b.increment() );
console.log( "a: " + a.getType() );
// Here's how closures are dangerous... the scope / properites and value are tied so we tied up previously instantiated values / props with new values.
console.log( "a: (102)" + a.increment() );

