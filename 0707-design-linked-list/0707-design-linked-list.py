class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class MyLinkedList:

    def __init__(self):
        self.head = None
        self.length = 0
        

    def get(self, index: int) -> int:
        if index < 0 or index >= self.length:
            return -1

        curr = self.head
        for i in range(1, index+1):
            curr = curr.next
        
        return curr.val
        

    def addAtHead(self, val: int) -> None:
        newNode = Node(val)

        if not self.head:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.length += 1
        

    def addAtTail(self, val: int) -> None:
        newNode = Node(val)

        if not self.head:
            self.head = newNode
            self.length += 1
            return None

        curr = self.head
        while curr.next != None:
            curr = curr.next

        curr.next = newNode
        self.length+=1
        

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.length:
            return None
        
        newNode = Node(val)
        if index == 0:
            if self.length == 0:
                self.head = newNode
            else:
                newNode.next = self.head
                self.head = newNode
            self.length += 1
            return None
        
        curr = self.head
        for i in range(1, index):
            curr = curr.next

        temp = curr.next
        curr.next = newNode
        newNode.next = temp
        self.length += 1
        

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.length:
            return None

        if index == 0:
            if self.length == 1:
                self.head = None
            else:
                self.head = self.head.next
            self.length -= 1
            return None

        curr = self.head
        for i in range(1, index):
            curr = curr.next

        curr.next = curr.next.next
        self.length -= 1


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)