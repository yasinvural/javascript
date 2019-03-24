class Stack {
    constructor(){
        this.stack = [];
    }

    add(data){
        this.stack.push(data);
    }

    remove(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.length()-1];
    }

    length(){
        return this.stack.length;
    }
}