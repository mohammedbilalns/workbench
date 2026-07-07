
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def prepend(self, val):
        new_node = ListNode(val)
        if self.head is None:
            self.head = new_node
            return
        new_node.next = self.head
        self.head = new_node

    def append(self, val):
        new_node = ListNode(val)
        if self.head is None:
            self.head = new_node
            return
        curr = self.head

        while curr.next is not None:
            curr = curr.next
        curr.next = new_node

