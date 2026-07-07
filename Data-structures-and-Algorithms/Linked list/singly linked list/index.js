class ListNode{
  constructor(val){
    this.val = val;
    this.next = null 
  }
}

class LinkedList {
  constructor(){
    this.head = null 
  }


  prepend(val){
    const newNode = new ListNode(val)
    newNode.next = this.head
    this.head = newNode
    
  }
  append(val){
    const newNode = new ListNode(val)
    if(!this.head){
      this.head = newNode
      return 
    }

    let curr = this.head 

    while(curr?.next){
      curr = curr.next
    }
    curr.next = newNode
  }
}

// find the middle ( second middle if there is two ) 
function findMiddle(head){
  let slow = head 
  let fast = head 

  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
  }
  return slow.val
}

// find the middle ( first middle if thre is two )
function findMiddle2(head){
  let slow = head 
  let fast = head 

  while(fast.next && fast.next.next){
    fast = fast.next.next
    slow = slow.next
  }
  return slow.val 
}
// find the middle ( average of middles if thre is two)

function findMiddle3(head){
  if(!head) return null

  let slow = head
  let fast = head 
  let prev = null 

  while(fast && fast.next){
    prev = slow 
    slow = slow.next
    fast = fast.next.next
  }
  if(fast){
    return slow.val 
  }

  return (prev.val + slow.val)/2
}

// swap the first and middle element 
function swapHeadMiddle(head){

}

// swap the middle elements if there is two middles 
// swap the first and last element 
// remove the odd indexed nodes 
// delted the middle node 
// delete the last node 
// delted the first node 
//Return kth node from start
//Return kth node from end
//Print list in reverse (without modifying)
//Check if value exists in list
//Count occurrences of a value
//Get max value node
//Get min value node
//insert at given index
//Delete node at given index
//Replace value at index
//Swap nodes at two given indices
//Remove all nodes at odd indices
//Remove all nodes at even indices
//Reverse nodes between positions m and n
//Rotate list right by k
//Rotate list left by k
//Move last node to front
//Delete both middles (even length)
//Insert new node after middle
//Insert new node before middle
//Reverse first half of list
//Reverse second half of list
//Split list into two halves
//Reverse entire list
//Reverse in groups of k
//Pairwise swap nodes
//Alternate node reversal (skip one, reverse next)
//Rearrange: even nodes first, then odd
//Rearrange: odd nodes first, then even
//Merge two sorted lists
//Interleave two lists (a1,b1,a2,b2...)
//Sort a linked list (merge sort)
//Delete first node
//Delete last node
//Delete all nodes with given value
//Delete duplicates (sorted list)
//Delete duplicates (unsorted list)
//Remove nth node from end
//Remove nodes greater than right-side nodes
//Remove nodes with smaller value than left max
//Delete alternate nodes
//
//Delete nodes forming a pattern (e.g., keep m delete n)
//Detect cycle (Floyd’s algorithm)
//Find start of cycle
//Check if list is palindrome
//Find intersection of two lists
//Add two numbers (LL representation)
//Partition list around value x
//Reorder list (L0 → Ln → L1 → Ln-1…)
//Convert binary number list → integer
//Find maximum twin sum

// find the numbe of nodes 
function count(head){
 let curr = head  
  let count = 0 

  while(curr){
    count++
    curr = curr.next
  }
  return count 
}
