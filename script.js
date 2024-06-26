

//  Question 1
// const arr=[1,2,3,4,5,6,7,8,9,10];
// class Stack{
//     constructor()
//     {
//         this.items = [];
//     }
//     push(arr)
//      {
//         for (let i = arr.length - 1; i >= 0; i--){
//         this.items.push(arr[i]);
//      }}
//      printStack() {
//          let str = "";
//          for (let i = 0; i < this.items.length; i++)
//              str += this.items[i] + " ";
//          return str.trim();
//      }
    
// }

// let stack = new Stack();
// stack.push(arr);
// console.log(stack.printStack());


// class TwoStackQueue {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     // Push element to the end of the queue
//     push(element) {
//         this.stack1.push(element);
//     }

//     // Remove the element from the start of the queue
//     pop() {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }

//         if (this.stack2.length === 0) {
//             return 'Underflow';
//         }
//         return this.stack2.pop();
//     }

//     printQueue() {
//         let str = "";
//         for (let i = 0; i < this.stack2.length; i++) {
//             str += this.stack2[i] + " ";
//         }
//         for (let i = this.stack1.length - 1; i >= 0; i--) {
//             str += this.stack1[i] + " ";
//         }
//         return str.trim();
//     }
// }

// // Testing the TwoStackQueue implementation
// let queue = new TwoStackQueue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(4);
// // console.log(stack1.printStack());
// // console.log(stack2.printStack());

// console.log(queue.printQueue()); // Expected output: "1 2 3 4"
// console.log(queue.pop()); // Expected output: 1
// console.log(queue.printQueue()); // Expected output: "2 3 4"
// console.log(queue.pop()); // Expected output: 2
// console.log(queue.printQueue()); // Expected output: "3 4"
// console.log(queue.pop()); // Expected output: 3
// console.log(queue.printQueue()); // Expected output: "4"
// console.log(queue.pop()); // Expected output: 4
// console.log(queue.pop()); // Expected output: "Underflow"
// console.log(queue.printQueue()); // Expected output: ""

// Qustion 2
// class Queue {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     push(element) {
//         this.stack1.push(element);
//     }

//     pop() {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }

//         if (this.stack2.length === 0) {
//             return 'Underflow';
//         }
//         return this.stack2.pop();
//     }

//     printQueue() {
//         let str = "";
//         for (let i = this.stack2.length - 1; i >= 0; i--) {
//             str += this.stack2[i] + " ";
//         }
//         for (let i = 0; i < this.stack1.length; i++) {
//             str += this.stack1[i] + " ";
//         }
//         return str.trim();
//     }
// }

// let queue = new Queue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// console.log(queue.printQueue()); 

// const arr=[1,2,3,4,5];


// Question 3
// function sum(arr){
//     let index=arr.length-1;
//     if(index<0){
//         console.log("TASK COMPLETED!")
//         return 0}
//     return arr[index]+sum(arr.slice(0, index));
// }
// console.log(sum([1,2,3,4,5]))

// Question 4
// class linkedList{
//    constructor(value){
//     this.value=value;
//     this.next=null;
//    }
//    append(value){
//     const newNode=new linkedList(value);
//     if(!this.head){
//         this.head=newNode;
//     }
//     else{
//         let current = this.head;
//                       while (current.next) {
//                           current = current.next;
//                       }
//                       current.next = newNode;
//     }

//    }
//    printList(){
//     if(!this.head){
//         console.log("this list is empty");
//         return;
//     }
//     let current = this.head;
//     while (current) {
//         console.log(current.value);
//         current = current.next;
//     }


// }
// printReverse(current = this.head) {
//     if (!current) {
//         return;
//     }
//     this.printReverse(current.next);
//     console.log(current.value);
// }
// }
   



// let add=new linkedList;
// add.append(1);
// add.append(2);
// add.append(3);
// add.append(4);
// add.printList();
// add.printReverse();
// console.log(add)




//  Extra Question 

// class Stack{
//     constructor()
//     {
//         this.items = [];
//     }
//     push(arr)
//      {
//         for (let i = arr.length - 1; i >= 0; i--){
//         this.items.push(arr[i]);
//      }}
//      pop() {
//         if (this.items.length === 0) {
//             return 'Underflow';
//         }
//         return this.items.pop();
//     }

//     // Check if the stack is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }
       
//      checkBalancedParentheses(inputString) {
//         for (let i = 0; i < inputString.length; i++) {
//             let char = inputString[i];
//             if (char === '(' || char === '{' || char === '[') {
//                 this.push(char);
//             } else if (char === ')' || char === '}' || char === ']') {
//                 if (this.isEmpty()) {
//                     return "Not balanced";
//                 }
//                 let lastChar = this.pop();
//                 if ((char === ')' && lastChar !== '(') ||
//                     (char === '}' && lastChar !== '{') ||
//                     (char === ']' && lastChar !== '[')) {
//                     return "Not balanced";
//                 }
//             }
//         }
//         return this.isEmpty() ? "Balanced" : "Not balanced";
//     }

//      printStack() {
//          let str = "";
//          for (let i = 0; i < this.items.length; i++)
//              str += this.items[i] + " ";
//          return str.trim();
//      }
    
// }

// let stack = new Stack();
// console.log(stack.printStack());
// console.log(stack.checkBalancedParentheses("({[()]})"));



// Question 5
class linkedList{
       constructor(value){
        this.value=value;
        this.next=null;
       }
       append(value){
        const newNode=new linkedList(value);
        if(!this.head){
            this.head=newNode;
        }
        else{
            let current = this.head;
                          while (current.next) {
                              current = current.next;
                          }
                          current.next = newNode;
        }

    
       }
       deleteMiddleNode() {
        if (!this.head || !this.head.next) {
            return null; // If list is empty or has only one node, return null
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        // Use fast and slow pointers to find the middle node
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // Delete the middle node (slow)
        if (prev) {
            prev.next = slow.next;
        } else {
            this.head = slow.next;
        }

        // Return the deleted node (slow)
        return slow;
    }
       printList(){
        if(!this.head){
            console.log("this list is empty");
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    

    }
       
    
    
    
    let add=new linkedList;
    add.append(1);
    add.append(2);
    add.append(3);
    add.append(4);
    add.append(5);
    add.deleteMiddleNode();
    // add.deleteMiddleNode();
    add.printList();
    // console.log(add)