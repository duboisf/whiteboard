var gng = {};

var f = 15;
console.log('Global "f" initially set to: ' + f);

// One showing 'context wrapped to variable'.
(function(){
   var g = f;

   gng.Test = function(val) {
      this.i = val;
      console.log('Setting this.i: [' + this.i + '] to val: [' + val +']');
   };

   gng.Test.prototype.inci = function() {
      this.i++;
      return this.i;
   };

   gng.Test.prototype.geti = function() {
      return this.i;
   };

   gng.Test.prototype.showg = function(){
      g++;
      f++;
      console.log("g: " + g);
      console.log("inner f: " + f );
      console.log("this.i: " + this.inci());
   };

})();


// One showing 'context wrapped to variable'.
/*
(function(e){
   var g = e;

   gng.Test = function(val) {
      this.i = val;
      console.log('Setting this.i: [' + this.i + '] to val: [' + val +']');
   };

   gng.Test.prototype.inci = function() {
      this.i++;
      return this.i;
   };

   gng.Test.prototype.geti = function() {
      return this.i;
   };

   gng.Test.prototype.showg = function(){
      ++g;
      console.log("++g: " + g);
      console.log("inner f++: " + f++                );
      console.log("this.i: " + this.inci())
   };

})(f);
*/

var t = new gng.Test(5);
t.showg();
var w = new gng.Test(10);
w.showg();
console.log("outerf: (expect 15) " + f);
console.log('t.geti(): ' + t.geti());
console.log('w.geti(): ' + w.geti());

// Explain how they are tied to the following:
var a = [1,2,3,4];
console.log('a: ' + a);
var b = a;
console.log('b: ' + b);
a.push(6);
console.log('a: ' + a);
console.log('b: ' + b);
a = [5,6,7,8];
console.log('a: ' + a);
console.log('b: ' + b);