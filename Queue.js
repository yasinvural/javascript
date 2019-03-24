class Queue{
    constructor(){
        this.queue = [];
    }

    add(data){
        this.queue.unshift(data);
    }

    remove(){
        this.queue.pop();
    }
}