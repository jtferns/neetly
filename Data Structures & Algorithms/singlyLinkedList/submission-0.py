class LinkedList:
    
    def __init__(self):
        self.contents = []

    
    def get(self, index: int) -> int:
        return self.contents[index] if index < len(self.contents) else -1
        

    def insertHead(self, val: int) -> None:
        self.contents.insert(0, val)

    def insertTail(self, val: int) -> None:
        self.contents.append(val)
        

    def remove(self, index: int) -> bool:
        if index >= len(self.contents):
            return False
        self.contents.pop(index)
        return True
        

    def getValues(self) -> List[int]:
        return self.contents
