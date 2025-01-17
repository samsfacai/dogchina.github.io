const container = document.querySelector('.rain-container');
const words = ['DOG', 'GO', 'TO', 'THE', 'MOON'];
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6', '#33FFD5'];

// 创建下落文字的函数（禁用小屏幕动画）
function createWord() {
    if (window.innerWidth > 768) { // 仅在大屏幕上启用动画
        const word = document.createElement('span');
        word.classList.add('word');
        word.innerText = words[Math.floor(Math.random() * words.length)];
        word.style.left = `${Math.random() * 100}vw`;
        word.style.animationDuration = `${Math.random() * 2 + 3}s`;
        word.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(word);
        setTimeout(() => word.remove(), 5000);
    }
}

setInterval(createWord, 500);