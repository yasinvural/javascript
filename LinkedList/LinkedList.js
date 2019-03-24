class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    length(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirstNode(){
        return this.head;
    }

    getLastNode(){
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }

    clearNodes(){
        this.head = null;
    }

    removeFirstNode(){
        let node = this.head;

        if(!node){
            return;
        }

        this.head = node.next;
    }

    removeLastNode(){
        let node = this.head;
        //empty
        if(!node){
            return;
        }
        //only head node
        if(!node.next){
            this.head = null;
            return;
        }

        let previousNode = this.head;
        let node = this.head.next;
        while(node.next){
            previousNode = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLastNode(data){
        let newNode = new Node(data);
        let lastNode = this.getLastNode();
        if(lastNode){
            lastNode.next = newNode;
        }else{
            this.head = newNode;
        }
    }

    getNode(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            }else{
                counter++;
                node = node.next;
            }
        }

        return null;
    }

    removeNode(index){
        if(!this.head){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getNode(index-1);
        if( !previousNode || !previousNode.next){
            return;
        }
        previousNode.next = previousNode.next.next;
    }

    insertNode(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index === 0){
            this.head = new Node(data,this.head);
            return;
        }
        let previousNode = this.getNode(index-1);
        let newNode = new Node(data,previousNode.next);
        previousNode.next = newNode;
    }

}