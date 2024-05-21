# En este repositorio se encuentran 2 archivos HTML con sus respectivos JS

El de tateti, como el nombre indica, es un juego de "3 en raya" como se le llama en algunos lados, y funciona de la siguiente manera:

```
    document.addEventListener("DOMContentLoaded", ...): Espera a que el DOM se haya cargado completamente antes de ejecutar el código.

    const board = document.getElementById("board");: Obtiene el elemento del DOM que representa el tablero de juego.

    let gameState = Array(9).fill(null);: Inicializa el estado del juego con un arreglo de 9 elementos, todos nulos.

    let currentPlayer = 'X';: Establece el jugador actual como 'X'.

    const winPatterns = [...];: Define todas las combinaciones ganadoras posibles en el Tres en Raya.

    function checkWinner(state):
        Recorre los patrones de victoria para verificar si hay un ganador.
        Devuelve el símbolo del jugador ganador, 'Draw' en caso de empate, o null si el juego continúa.

    function aiMove(state):
        Encuentra las celdas vacías en el estado del juego.
        Selecciona una celda vacía al azar como el próximo movimiento de la IA.

    function makeMove(index):
        Realiza un movimiento en la celda especificada si está vacía y el juego no ha terminado.
        Cambia el estado del juego, actualiza el tablero y verifica si hay un ganador.
        Si el jugador actual es 'O' (la computadora), realiza un movimiento de IA.

    function renderBoard():
        Limpia el tablero y lo vuelve a dibujar basado en el estado actual del juego.
        Añade event listeners a las celdas para manejar los clics del usuario.
```

Luego esta el otro archivo de imagenes, que ese es un archivo HTML que te permite subir una imagen, y usando la libreria de mobilnet y JavaScript, reconoce por nombre y por porcentaje de seguridad que imagen se esta cargando, el funcionamiento del programa es de la siguiente manera:

```
HTML/CSS:

    input type="file": Permite al usuario cargar una imagen.
    img id="image-preview": Muestra una vista previa de la imagen cargada.
    p id="result": Muestra el resultado de la clasificación.

JavaScript (image-classification.js):

    document.addEventListener("DOMContentLoaded", ...): Asegura que el código se ejecute una vez que el DOM se haya cargado.
    async function loadModel(): Carga el modelo MobileNet usando TensorFlow.js.
    async function classifyImage(image): Clasifica la imagen cargada y muestra el resultado en la página.
    imageUpload.addEventListener('change', ...): Maneja el evento de cambio de archivo, carga la imagen y la clasifica.

Modelo MobileNet:

    model = await mobilenet.load();: Carga el modelo MobileNet pre-entrenado.
    const predictions = await model.classify(image);: Clasifica la imagen y obtiene las predicciones.
```

Con todo esto, ahora ya sabes en totalidad que hace este repositorio
