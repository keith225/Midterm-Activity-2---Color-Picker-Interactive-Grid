let selectedColor = ''; 

function selectColor(color) {
    selectedColor = color;
}

const grid = document.getElementById('grid');
for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('click', function() {
        cell.style.backgroundColor = selectedColor;
    });

    grid.appendChild(cell);
}

let btns = document.querySelectorAll(".buttons .btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

