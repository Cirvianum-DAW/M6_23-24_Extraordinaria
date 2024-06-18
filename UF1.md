### UF 1: Sintaxi del llenguatge. Objectes predefinits del llenguatge

#### IMPORTANT

- Tens 45 minuts per completar aquesta part de l'examen.
- Cada resposta correcta val 1 punt.
- Cada resposta incorrecta resta 1/3 punts.

---

1. **Quina és la diferència principal entre el codi executat al servidor i el codi executat al client?**

   - A) El codi del servidor es pot veure des del navegador
   - B) El codi del client s'executa en un servidor remot
   - C) El codi del servidor s'executa en el servidor, mentre que el del client s'executa en el navegador de l'usuari
   - D) El codi del client es pot veure en el servidor

---

2. **Quin és el motor de JavaScript utilitzat pel navegador Chrome?**

   - A) SpiderMonkey
   - B) Chakra
   - C) V8
   - D) Nitro

---

3. **Quina funció té l'Event Loop en JavaScript?**

   - A) Executa codi síncronament
   - B) Gestió d'esdeveniments i processos asíncrons
   - C) Compila el codi JavaScript
   - D) Analitza el codi per errors

---

4. **Com es declara una variable que no es pot reassignar en JavaScript?**

   - A) var
   - B) let
   - C) const
   - D) static

---

5. **Quina és la sortida de la següent expressió: `2 + '2'`?**

   - A) 4
   - B) 22
   - C) '4'
   - D) '2+2'

---

6. **Quina és la sintaxi correcta per a un bucle `for` en JavaScript?**

   - A) `for i = 1 to 10`
   - B) `for (let i = 0; i < 10; i++)`
   - C) `for (i < 10; i++)`
   - D) `for (i++ until 10)`

---

7. **Quina funció utilitzaries per a veure informació de depuració a la consola del navegador?**

   - A) debug()
   - B) print()
   - C) log()
   - D) console.log()

---

8. **Quina eina de desenvolupament utilitzaries per a tests unitaris en JavaScript?**

   - A) Chrome DevTools
   - B) Visual Studio Code
   - C) Jest
   - D) Node.js

---

9. **Quina propietat del navegador utilitzaries per a obtenir el tipus de navegador que s'utilitza?**

   - A) window.navigator
   - B) window.history
   - C) window.location
   - D) window.navigator.userAgent

---

10. **Quina és la funció de `setTimeout` en JavaScript?**

    - A) Executa codi immediatament
    - B) Repeteix l'execució de codi cada interval de temps
    - C) Executa codi després d'un cert interval de temps
    - D) Atura l'execució de codi

---

11. **Quina propietat utilitzaries per a emmagatzemar dades a la sessió del navegador?**

    - A) localStorage
    - B) sessionStorage
    - C) cookies
    - D) cacheStorage

---

12. **Quina és la diferència entre `==` i `===` en JavaScript?**

    - A) `==` compara valors, `===` compara valors i tipus
    - B) `==` compara tipus, `===` compara valors
    - C) No hi ha diferència
    - D) `==` compara referències, `===` compara valors

---

13. **Quina serà la sortida del següent codi?**

```javascript
let a = 10;
let b = a;
b = 20;
console.log(a);
```

- A) 10
- B) 20
- C) undefined
- D) null

---

14. **Quin serà el resultat de la següent funció?**

```javascript
function add(x, y = 10) {
  return x + y;
}
console.log(add(5));
```

- A) 15
- B) 5
- C) NaN
- D) undefined

---

15. **Què imprimirà la següent funció a la consola?**

```javascript
let fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => console.log(fruit));
```

- A) apple banana mango
- B) apple, banana, mango
- C) ["apple", "banana", "mango"]
- D) undefined

---

16. **Quina serà la sortida del següent codi?**

```javascript
let person = {
  name: "John",
  age: 30,
};
console.log(Object.keys(person));
```

- A) ["John", 30]
- B) ["name", "age"]
- C) ["John", "age"]
- D) undefined

---

17. **Quin serà el valor de `result` després d'executar aquest codi?**

```javascript
let result = 0;
for (let i = 1; i <= 5; i++) {
  result += i;
}
console.log(result);
```

- A) 5
- B) 10
- C) 15
- D) 4

---

18. **Quina serà la sortida del següent codi?**

```javascript
let x = "5";
let y = 3;
console.log(x * y);
```

- A) 15
- B) 8
- C) 53
- D) 5

---

19. **Què retornarà la següent funció?**

```javascript
function myFunction(num) {
  return num % 2 === 0;
}
console.log(myFunction(4));
```

- A) true
- B) false
- C) undefined
- D) null

---

20. **Quina serà la sortida del següent codi?**

```javascript
console.log(typeof []);
```

- A) "array"
- B) "object"
- C) "undefined"
- D) "null"

---

21. **Què imprimirà la següent funció a la consola?**

```javascript
const myFunc = () => {
  let x = 10;
  si (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
};
myFunc();
```

- A) 10 20
- B) 20 20
- C) 20 10
- D) 10 10

---

22. **Quin serà el resultat del següent codi?**

```javascript
const arr = [1, 2, 3];
arr[10] = 5;
console.log(arr.length);
```

- A) 3
- B) 4
- C) 10
- D) 11

---

23. **Quin serà el valor de `result` després d'executar aquest codi?**

```javascript
let result = "";
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);
```

- A) 'abc'
- B) 'a, b, c'
- C) 'abc, '
- D) 'cba'

---

24. **Quina serà la sortida del següent codi?**

```javascript
let x = 5;
let y = x++;
console.log(y);
```

- A) 4
- B) 5
- C) 6
- D) undefined

---
