//classes

class Collection<T> {
 items: Array<T> = [];
  
  add(item: T) {
    this.items.push(item)
 }

 remove(item: T) {
  const index = this.items.findIndex(i => i === item);
  this.items.splice(index, 1);
  return this.items;
 }
}
const myCollection = new Collection<number>();
myCollection.add(1);
myCollection.remove(1);
const myCollectionString = new Collection<String>();
myCollectionString.add('1')


//functions
function removeItemArray<T>(arr: Array<T>, item: T): Array<T> {

  const index = arr.findIndex(i => i === item);
 arr.splice(index, 1)
 return arr;
}


removeItemArray<number>([1, 2, 3], 2)
removeItemArray<string>(['1', '2', '3'], '2')
