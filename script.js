
// Get the drawing canvas element and its 2D context
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

// Event listeners for drawing on the canvas
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
    ctx.closePath();
});
