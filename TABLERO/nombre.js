const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Establecer el tamaño del lienzo
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

// Color de la línea
let strokeColor = '#000';

// Ancho de la línea
let lineWidth = 5;

// Modo de dibujo (línea o relleno)
let isDrawingLine = true;

// Función para dibujar una línea
function drawLine(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

// Función para rellenar una forma
function fillShape(x, y, width, height) {
    ctx.fillStyle = strokeColor;
    ctx.fillRect(x, y, width, height);
}

// Evento de mouse para iniciar el dibujo
canvas.addEventListener('mousedown', (event) => {
    let x = event.offsetX;
    let y = event.offsetY;

    // Iniciar el trazado
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Capturar el movimiento del mouse
    canvas.addEventListener('mousemove', (event) => {
        let newX = event.offsetX;
        let newY = event.offsetY;

        // Dibujar la línea
        if (isDrawingLine) {
            drawLine(x, y, newX, newY);
        } else {
            // Rellenar la forma
            ctx.fillRect(x, y, newX - x, newY - y);
        }

        x = newX;
        y = newY;
    });

    // Detener la captura del movimiento del mouse al soltar el botón
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove');
    });
});

// Función para cambiar el color de la línea
function changeColor(color) {
    strokeColor = color;
}

// Función para cambiar el modo de dibujo (línea o relleno)
function toggleDrawingMode() {
    isDrawingLine = !isDrawingLine;
}
