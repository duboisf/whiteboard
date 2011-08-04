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
        return "We don't need no steenking instance!";
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
Need this to be refineds
*/
