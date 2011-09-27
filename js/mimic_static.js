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

/*
Explanations:
Need this to be refined
@TODO -> issue with binding 'self' in our EXT apps and not sure why, try and re-create one day.
*/
