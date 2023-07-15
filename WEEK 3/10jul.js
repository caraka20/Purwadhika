console.log('==== QUEUE ====');
class Queque {
    #maxSize
    #container = []
    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }
    enqueue(element) { //masuk antrian
        this.#container.push(element)

    }

    dequeue() { // keluar antrian
        this.#container.shift()
    }

    getElementa(){
        return this.#container
    }
}

let q1 = new Queque(4)
q1.enqueue(2)
q1.enqueue(4)
q1.dequeue()
q1.enqueue(1)
q1.enqueue(7)
console.log(q1.getElementa());

console.log('\n');
console.log('==== SET ===='); //mereduce, ilangin yg sama dan yg asli ga ilang
let fruit = ['banana','grape','apple','mango','orange','banana','grape']
let newFruit = new Set(fruit)
console.log(newFruit);
newFruit.add('bananaa') //nambah element
console.log(newFruit.has('apple')); //cek apakah mempunyai elemen apple
console.log(newFruit);


console.log('\n');
console.log('==== MAP ====');
const myMap = new Map()
myMap.set('caraka','001')
myMap.set('wijaya','002')

console.log(myMap);
console.log(myMap.size);

for (let [key,value] of myMap) {
    console.log(key, 'and', value);
}


console.log('\n');
console.log('==== LinkedLink ====');
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(element) {
        let node = new Node(element);
        let current;

        // jika list ada, tambahkan element dan make it head
        if (this.head == null ) {
            this.head = node
        } else {
            current = this.head

            // note : end of the list -> next === nul
            while (current.next) {
                current = current.next
            }

            // add node
            current.next = node
        }
        this.size += 1
    }

    printList() {
        const curr = this.head
        while (curr) {
            console.log(curr.element);
            curr = curr.next
        }
    }

    insertAt (element, index) {
        if ( index < 0 || index > this.size) {
            return console.log('please enter index yg betul');
        } else {
            // create a new node
            const node = new Node(element);
            let curr = this.head
        }
    } 
}





// console.log('\n');
// console.log('==== LATIHAN MULTIDIMENSI ARRAI ====');
function pertama(n) {
    let matrix = []
    let tampungMatrix = []
    
    for (let i = n.length; i > 0; i--) {
        if (i % 3 == 0 && i !== 9 && i !== 0) {
            matrix.push(tampungMatrix)
            tampungMatrix =[]
        }
        tampungMatrix.push(n[i-1])
    }
    matrix.push(tampungMatrix)
    return matrix
}
// console.log(pertama([1,2,3,4,5,6,7,8,9]));


function kedua(n) {
    let matrix = []
    let tampungMatrix = []
    
    for (let i = 0; i < n.length; i++) {
        if (i % 3 == 0 &&  i !== 0) {
            matrix.push(tampungMatrix)
            tampungMatrix =[]
        }
        tampungMatrix.push(n[i])
    }
    matrix.push(tampungMatrix)
    return matrix
}
// console.log(kedua([1,2,3,4,5,6,7,8,9]));

/*
x 0 x ==> 00=x 01==0 02=x
0 x 0
x 0 x
*/

function tiga(n) {
    let hasil = []
    let tampung = []
    for (let i = 1; i <= n; i++) {
        if ( i % 2 == 0) {
            tampung.push('X')
        } else if (i % 2 == 1) {
            tampung.push('O')
        } if (i % 3 == 0 && i !== 0) {
            hasil.push(tampung)
            tampung = []
        }
    }
    return hasil
}
// console.log(tiga(9));


