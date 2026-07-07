
class ListNode<T>{
  public next : ListNode<T> | null
  public prev: ListNode<T> | null
  public val : T 
  constructor(val: T){
    this.val = val 
    this.next = null
    this.prev = null 
  }
}

class DoublyLinkedList{
  }
