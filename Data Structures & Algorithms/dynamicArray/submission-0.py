class DynamicArray:
    size: int
    capacity: int
    contents: list[int]

    def __init__(self, capacity: int):
        self.size = 0
        self.capacity = capacity
        self.contents = [0] * self.capacity

    def get(self, i: int) -> int:
        return self.contents[i]

    def set(self, i: int, n: int) -> None:
        self.contents[i] = n

    def pushback(self, n: int) -> None:
        if self.getSize() == self.capacity:
            self.resize()
        self.contents[self.size] = n
        self.size += 1

    def popback(self) -> int:
        if self.size:
            self.size -= 1
        return self.contents[self.size]

    def resize(self) -> None:
        self.capacity = 2 * self.capacity
        doubled_contents = [0] * self.capacity
        for i in range(self.size):
            doubled_contents[i] = self.contents[i]
        self.contents = doubled_contents

    def getSize(self) -> int:
        return self.size

    def getCapacity(self) -> int:
        return self.capacity
