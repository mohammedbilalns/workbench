def reverseList(head):
    prev = None
    curr = head

    while curr is not None:
        nextNode = curr.next
        curr.next = prev

        prev = curr
        curr = nextNode

    return prev
