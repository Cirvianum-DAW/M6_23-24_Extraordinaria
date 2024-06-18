Per realitzar aquest exercici hauràs de fer servir la [Dog API](https://thedogapi.com/) que proporciona informació sobre gossos. Pots trobar la documentació d'aquesta al següent enllaç: [https://thedogapi.com/documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t).

Com veus la documentació de "thecatapi" és la mateixa que la de "thedogapi", per tant, pots seguir les instruccions de la documentació de "thecatapi" per fer les peticions a "thedogapi". En tot cas, ÉS MOLT IMPORTANT que també revisis la següent documentació on pots veure diferents crides d'exemple a l'API de gossos: [Postman - The Dog API](https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z).

Per fer servir aquesta API necessitaràs una clau d'accés. Pots intentar fer servir la següent clau:

    live_QiknN4JjzV3UyG0eXaMYO1QesnhDr5Pxjq0Wk2r0udYnGJFs6zFhVoi9pkWRcNTZ

Si no funciona, pots obtenir una clau d'accés gratuïta registrant-te a la pàgina de The Dog API: [https://thedogapi.com/signup](https://thedogapi.com/signup).

#### Exercici: Llista de Gossos amb API

Crea una aplicació que permeti buscar i mostrar informació sobre races de gossos utilitzant l'API pública de The Dog API. A més, permet als usuaris veure imatges aleatòries d'una raça seleccionada. L'HTML ja està proporcionat. Hauràs d'utilitzar JavaScript per implementar la funcionalitat necessària i per fer les peticions a l'API.

**Requisits:**

1. Recuperar la llista de races de gossos des de l'API i mostrar-les en un desplegable.
2. Capturar l'esdeveniment de canvi del desplegable per mostrar la informació de la raça seleccionada.
3. Permetre als usuaris veure imatges aleatòries d'una raça seleccionada.
4. Utilització de `fetch` per fer les peticions a l'API.
5. Manipulació del DOM per mostrar la informació de la raça seleccionada i les imatges.

Teniu un exemple a continuació:

![Dog API](./uf4_example.gif)

##### Punts: 10

### Estructura de Puntuació

1. **Recuperació de dades de l'API (2 punts)**

   - Fer una petició `fetch` per obtenir la llista de races de gossos.
   - Mostrar correctament les races en un desplegable.

2. **Captura i manipulació de l'esdeveniment de canvi (2 punts)**

   - Captura correcta de l'esdeveniment de canvi del desplegable.
   - Mostrar la informació de la raça seleccionada.

3. **Visualització d'imatges aleatòries (3 punts)**

   - Permetre als usuaris veure imatges aleatòries d'una raça seleccionada.
   - Fer una petició `fetch` a l'endpoint corresponent per obtenir imatges.

4. **Abstracció de la lògica de `fetch` (2 punts)**

   - Crear una funció reutilitzable per fer peticions `fetch` a diferents endpoints.
   - Utilitzar aquesta funció per fer les peticions necessàries.

5. **Organització i claredat del codi (1 punt)**
   - Codi organitzat, comentat i fàcil de seguir.
   - Ús coherent de funcions i variables.
