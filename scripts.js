const container = document.getElementById("gridcontainer");
newGrid();

function newGrid() {
    while(container.firstChild) {
        div.removeChild(div.firstChild);
    }
    do {
        var x = prompt("What grid size?", 5);
    }   
    while (!(x > 0 && x < 65 && Number.isInteger(Number(x))));
    draw(x);
}

function draw(x) {
    container.style.gridcolumns = `repeat(${x}, 1fr)`;
    container.style.gridrows = `repeat(${x}, 1fr)`;
    for (i = 0; i < x*x; i++) {
        let gridsquare = document.createElement('div');
        let a = Math.floor(i/x) + 1;
        let b = i % x + 1;
        gridsquare.id = `${a}_${b}`;
        gridsquare.style.gridColumn = `${a}`;
        gridsquare.style.gridRow = `${b}`;
        gridsquare.classList.add("pixel");
        container.appendChild(gridsquare);
    }
    pixels = Array.from(document.querySelectorAll('.pixel'));
}

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
        let newOpacity = Number(pixel.style.opacity) + 0.2;
        pixel.style.opacity = newOpacity;
      });
})