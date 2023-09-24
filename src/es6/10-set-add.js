const list = new Set();

list.add(1);
list.add(2).add(3).add(4);
list.delete(4);
//list.clear();

console.log(list.has(3));
console.log(list.size);
console.log(list);