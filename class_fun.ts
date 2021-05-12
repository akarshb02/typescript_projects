interface GreetingOptions {
 log?: boolean;
 name: string;
 parting?: boolean;
}

let a: string = "there is no data";

function greeting(options: GreetingOptions): string {
 if (options.log) {

  console.log(options.name);

 } else {
  console.log(`Hello to ${a}`)

 }
 return a;
}
let opt = { name: 'xyz', log: false }
greeting(opt)



class Greet {
 log?: boolean;

 greetSome(options: GreetingOptions): string {
  if (options.log) {
   console.log(options.name);

  }
  return `Helo`
 }
}

let opts = { name: 'xyz', log: true }

let g = new Greet();
g.greetSome(opts);
