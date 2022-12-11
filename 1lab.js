class Node{
    constructor(value,next=null) {
        this.value=value
        this.next=next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    toArray(){
            const nodes=[]

            let currentNode = this.head

            while (currentNode){
                nodes.push(currentNode)
                currentNode=currentNode.next
            }
            return nodes
        }

    append(value) {
        const newNode = new Node(value)

        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    prepend(value) {
        const newNode = new Node(value, this.head)

        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }
    }

    popFront() {
        if (!this.head) {
            return null
        }

        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
    }

    popBack() {
        if (!this.tail) {                                                      // list is empty
            return null
        }

        if (this.head === this.tail) {                                          // if 1 node
            this.head = null
            this.tail = null
        }

        let currentNode = this.head

        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null
            } else currentNode = currentNode.next
        }

        this.tail = currentNode
    }

    size() {
        if (!this.head) {
            return null
        }

        let currentNode = this.head
        let counter = 0

        while (currentNode != null) {
            counter++
            currentNode = currentNode.next
        }
        return counter
    }

    empty() {
        if (!this.head || !this.tail) {
            return console.log('List is Empty')
        } else return console.log('List is not Empty')
    }

    find(index) {

        let currentNode = this.head
        let count = 0
        while (currentNode) {

            if (count === index) {
                return console.log(currentNode.value)
            }

            count++
            currentNode = currentNode.next
        }
    }

    set(index, value) {

        let currentNode = this.head
        let count = 0
        while (currentNode) {
            if (count === index) {
                currentNode.value = value
            }
            count++
            currentNode = currentNode.next
        }
    }

    clear() {

        let currentNode = this.head

        while (currentNode) {
            this.popFront()
            currentNode = currentNode.next
        }

    }

    insertBefore(index, value) {
        if (!this.head) {
            return null;
        }

        let size=this.size()

        if (index===0){
            this.prepend(value)
            return 0
        }

        if (index>--size) return null

        let currentNode = this.head

        if(index === 1) {
            let NewNode = new (Node)
            NewNode.value = value
            NewNode.next = currentNode.next
            currentNode.next = NewNode
            return null
        }

        while(currentNode.next){
            --index;
            currentNode=currentNode.next
            if(index === 1) {
                let NewNode = new (Node)
                NewNode.value = value
                NewNode.next = currentNode.next
                currentNode.next = NewNode
                return null
            }
        }
    }

    deleteNode(index) {
            if (!this.head) {
                return null;
            }

            let currentNode = this.head
            let size=this.size()

            if (index>--size) return null

            if (index===--size){
                this.popBack()
                return null
            }

            if (index === 0) {
                this.popFront()
                return null
            }

          let count=1
            while (count < index) {
                currentNode = currentNode.next
                count++
            }
            currentNode.next=currentNode.next.next
        }

}

    const list=new LinkedList()
    const list2=new LinkedList()
    list2.append('a')
    list2.append('b')
    list2.append('c')
    list.append('0')
    list.append('1')
    list.append('2')
    console.log(JSON.stringify(list))
    console.log(JSON.stringify(list2))

    function insert(index){

        let currentNode=list.head
        let newNode=new(Node)
        while (currentNode.next){
            --index
            currentNode=currentNode.next
            if (index===0){
                let curNode2=list2.head
                while(curNode2.next){
                    newNode.next=curNode2.next
                    currentNode.value=curNode2.value
                    currentNode.next=curNode2.next
                    curNode2.next=newNode
                    return null
                }
            }
        }
    }
    console.log(insert(2))