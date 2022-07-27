class Stack {
	constructor() {
		this.stack = [];
	}
	getLength() {
		return this.stack.length;
	}
	push(element) {
		this.stack.push(element);
	}
	pop() {
		return this.stack.pop();
	}
	peek() {
		return this.stack[this.stack.length - 1];
	}
	isEmpty() {
		return this.stack.length === 0;
	}
}

const stack = new Stack();
stack.push(3)
stack.push(4)
stack.push(13)
stack.push("rrrr")
console.log(stack)
console.log("length: ",stack.getLength());
console.log("isEmpty: ",stack.isEmpty());
console.log("peek: ",stack.peek());
console.log("pop: ",stack.pop());
console.log("peek: ",stack.peek());
console.log("length: ",stack.getLength());
