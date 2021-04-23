

export
 function log(m) {
 console.log(m);

}

var m = 'hello';
console.log(m);

let count: Number = 5;
enum color { Red = 0, Blue = 'hi', orange = 1 }

let data: String = color.Blue;


let message;
message = 'abc'
let end = (<String>message).endsWith('a')
console.log(end);

class Point {

 // public x: number;
 // private y: number;

 constructor(private x?:number,private y?:number) {
  //this.x = x;
  //this.y = y;

 }
 draw() {
  console.log('x is ' + this.x + 'y is' + this.y);

 }


}

let point = new Point();



point.draw()


