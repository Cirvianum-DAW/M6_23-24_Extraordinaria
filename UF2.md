### UF 2: Estructures definides pel programador. Objectes.

---

1. **Quina serà la sortida del següent codi?**

```javascript
let num = 1.5;
console.log(Math.ceil(num) + Math.floor(num));
```

- A) 1.5
- B) 3
- C) 4
- D) 2

---

2. **Quina serà la sortida del següent codi?**

```javascript
let date = new Date("2023-01-01T00:00:00Z");
console.log(date.getUTCFullYear() === 2023 && date.getUTCMonth() === 0);
```

- A) true
- B) false
- C) undefined
- D) Error

---

3. **Quina serà la sortida del següent codi?**

```javascript
let str = "hello world";
console.log(str.toUpperCase().charAt(6));
```

- A) W
- B) O
- C) R
- D) L

---

4. **Quina serà la sortida del següent codi?**

```javascript
const func = (x, y) => {
  return { x, y };
};
console.log(func(5, 10).x);
```

- A) { x: 5, y: 10 }
- B) 5
- C) undefined
- D) Error

---

5. **Quina serà la sortida del següent codi?**

```javascript
const add = (a, b) => a + b;
const square = (x) => x * x;
const operate = (fn, x, y) => fn(x, y);
console.log(operate(add, 3, 4));
console.log(operate(square, 3, 4));
```

- A) 7, 7
- B) 12, 9
- C) 7, 9
- D) 7, 16

---

6. **Quina serà la sortida del següent codi?**

```javascript
let arr = [1, 2, 3];
let modifiedArr = arr.slice(1);
modifiedArr[0] = 4;
console.log(arr);
console.log(modifiedArr);
```

- A) [1, 2, 3], [4, 3]
- B) [1, 2, 3], [1, 4, 3]
- C) [2, 3], [4, 3]
- D) [1, 4, 3], [4, 3]

---

7. **Quina serà la sortida del següent codi?**

```javascript
let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y");
console.log(arr);
```

- A) ['a', 'b', 'c', 'd', 'x', 'y']
- B) ['a', 'x', 'y', 'd']
- C) ['a', 'x', 'b', 'c', 'd']
- D) ['x', 'y', 'c', 'd']

---

8. **Quina serà la sortida del següent codi?**

```javascript
let arr = [1, 2, 3, 4];
let myFunction = arr.filter((x) => x % 2 === 0);
let sum = myFunction.reduce((acc, x) => acc + x, 0);
console.log(sum);
```

- A) 4
- B) 6
- C) 10
- D) 2

---

9. **Quina serà la sortida del següent codi?**

```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.every((x) => x > 0);
console.log(result);
```

- A) true
- B) false
- C) undefined
- D) Error

---

10. **Quina serà la sortida del següent codi?**

```javascript
let arr = [1, 2, 3, 4];
let newArr = arr.map((x, i) => x * i);
console.log(newArr);
```

- A) [1, 2, 3, 4]
- B) [1, 4, 9, 16]
- C) [0, 2, 6, 12]
- D) [1, 3, 6, 10]

---

11. **Quina serà la sortida del següent codi?**

```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x, i) => acc + i, 1);
console.log(sum);
```

- A) 6
- B) 10
- C) 4
- D) 7

---

12. **Quina serà la sortida del següent codi?**

```javascript
let arr = [1, 2, 3, 4, 5];
let reversed = [...arr].reverse();
console.log(reversed);
console.log(arr);
```

- A) [5, 4, 3, 2, 1], [5, 4, 3, 2, 1]
- B) [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]
- C) [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]
- D) [5, 4, 3, 2, 1], []

---

13. **Quina serà la sortida del següent codi?**

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }

  set dimensions(dim) {
    [this.height, this.width] = dim;
  }
}

const rect = new Rectangle(10, 5);
rect.dimensions = [20, 10];
console.log(rect.area);
```

- A) 50
- B) 200
- C) undefined
- D) Error

---

14. **Quina serà la sortida del següent codi?**

```javascript
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  get area() {
    return this.height * this.width;
  }
}

const sq = new Square(5);
console.log(sq.area);
```

- A) 10
- B) 20
- C) 25
- D) 5

---

15. **Quina serà la sortida del següent codi?**

```javascript
let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("a", 3);
console.log(map.get("a"));
```

- A) 1
- B) 2
- C) 3
- D) undefined

---

16. **Quina serà la sortida del següent codi?**

```javascript
let set = new Set([1, 2, 3, 4, 4]);
console.log(set.size);
```

- A) 5
- B) 4
- C) 3
- D) 2

---

17. **Quina serà la sortida del següent codi?**

```javascript
let map = new Map();
map.set("x", 10);
map.set("y", 20);
map.delete("x");
console.log(map.has("x"));
```

- A) false
- B) true
- C) undefined
- D) Error

---

18. **Quina serà la sortida del següent codi?**

```javascript
let set = new Set();
set.add(1);
set.add(2);
set.clear();
console.log(set.size);
```

- A) 2
- B) 0
- C) 1
- D) undefined

---

19. **Quina serà la sortida del següent codi?**

```javascript
let person = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};
const {
  address: { zip },
  ...rest
} = person;
console.log(zip, rest);
```

- A) 12345, { address: { city: "Wonderland", zip: "12345" } }
- B) 12345, { name: "Alice", age: 25, address: { city: "Wonderland" } }
- C) 12345, { name: "Alice", age: 25 }
- D) undefined, { name: "Alice", age: 25, address: { city: "Wonderland", zip: "12345" } }

---

20. **Quina serà la sortida del següent codi?**

```javascript
const arr = [1, [2, 3], [4, [5, 6]]];
const flattened = arr.flat(2);
console.log(flattened);
```

- A) [1, [2, 3], [4, [5, 6]]]
- B) [1, 2, 3, 4, [

5, 6]]

- C) [1, 2, 3, 4, 5, 6]
- D) [1, 2, 3, [4, 5, 6]]

---

21. **Quina serà la sortida del següent codi?**

```javascript
let person = {
  name: "Alice",
  age: 25,
};
let { name, age: years = 30, gender = "female" } = person;
console.log(name, years, gender);
```

- A) Alice, 25, female
- B) Alice, 25, female
- C) Alice, 30, undefined
- D) Alice, 30, female

---

22. **Quina serà la sortida del següent codi?**

```javascript
let numbers = [1, 2, 3, 4, 5];
let [first, ...rest] = numbers;
console.log(first, rest);
```

- A) 1, [2, 3, 4]
- B) 1, [2, 3, 4, 5]
- C) 2, [3, 4, 5]
- D) 1, 2, 3, 4, 5

---

23. **Quina serà la sortida del següent codi?**

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj).filter((key) => key !== "b");
console.log(keys);
```

- A) ['a', 'c']
- B) ['b', 'c']
- C) ['a', 'b', 'c']
- D) ['a']

---

24. **Quina serà la sortida del següent codi?**

```javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj).map((value) => value * 2);
console.log(values);
```

- A) [1, 2, 3]
- B) [2, 4, 6]
- C) [3, 4, 5]
- D) {2, 4, 6}

---

25. **Quina serà la sortida del següent codi?**

```javascript
const arr = [1, 2, 3];
arr.unshift(0);
arr.push(4);
console.log(arr.length);
```

- A) 3
- B) 4
- C) 5
- D) 6

---

26. **Quina serà la sortida del següent codi?**

```javascript
const arr = [1, 2, 3, 4, 5];
const foundIndex = arr.findIndex((x) => x > 3);
console.log(foundIndex);
```

- A) [4, 5]
- B) 2
- C) 3
- D) undefined

---
