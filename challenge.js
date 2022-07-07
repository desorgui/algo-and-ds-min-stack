class Stack {
constructor(){
  this.stack = [];
}
push(element){
    this.stack.push(element);
}
pop(){
  if(this.stack.length){
    return this.stack.pop();
  }
  return 'stack is empty';
}
min(){
    let minTemp = Infinity;
    this.stack.forEach(elem => {
        if(elem < minTemp) {
            minTemp = elem;
        }
    })
    return minTemp;
}
}


const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
