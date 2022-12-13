const spinButton = document.getElementById('btn');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

const results = ['neon7.webp', 'neoncherry.png', 'neonorange.png', 'neonapple.png', 'neonbanana.jpeg', 'neongrape.png', 'neonwatermelon.png'];

let isSpinning = false;
let spinInterval;

function graj() {
    if (isSpinning) {
        return;
    }

    isSpinning = true;
    
    spinInterval = setInterval(() => {
        const result1 = results[Math.floor(Math.random() * results.length)];
        const result2 = results[Math.floor(Math.random() * results.length)];
        const result3 = results[Math.floor(Math.random() * results.length)];
        console.log(result1);
        console.log(result2);
        console.log(result3);

        slot1.innerHTML = "<img src='" + result1 + "'>";
        slot2.innerHTML = "<img src='" + result2 + "'>";
        slot3.innerHTML = "<img src='" + result3 + "'>";
    }, 50);
    
    setTimeout(() => {
        clearInterval(spinInterval);
        isSpinning = false;
      }, 1000);
}