const touches = [...document.querySelectorAll('.buttonCalculator')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    calculate(value)

})

document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculate(value)

})

const calculate = (value) => {
    if (listeKeycode.includes(value)) {
        switch (value) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(value);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})