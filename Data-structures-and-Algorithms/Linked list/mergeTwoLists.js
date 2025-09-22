function ListNode(val){
	this.val = val 
	this.next = null 
}


// solution with O(m+n)T and O(1)S 
var mergeTwoLists = function(list1, list2) {
  
  let dummy = new  ListNode()
  let curr = dummy 

  while(list1 && list2){
    if(list1.val < list2.val){
        curr.next = list1
        list1 = list1.next 
    }else {
        curr.next = list2
        list2 = list2.next 
    }
    curr = curr.next 
  }

  if(list1){
    curr.next = list1 
  }else if(list2){
    curr.next = list2
  }

  return dummy.next 
    
};


// recursive solution  with O(m+n)T and O(m+n)S 

var mergeTwoLists = function(list1, list2) {
  
  if(!list1) return list2 
  if(!list2) return list1 

  if(list1.val < list2.val){
    list1.next = mergeTwoLists(list1.next, list2)
    return list1 
  }else {

    list2.next = mergeTwoLists(list1,list2.next)
    return list2 

  }
    
};
