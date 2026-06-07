const phrases = [
    "Ты меня любишь? 🥺",
    "Точно-точно? 🌸",
    "Я буду очень грустить...",
    "Подумай еще раз! 💖",
    "Ну пожааалуйста! 😭",
    "Я тебя очень люблю!",
    "Скажи 'Да'! ❤️"
];

let noCount = 0;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const emoji = document.getElementById('emoji');
const card = document.getElementById('card');

yesBtn.addEventListener('click', () => {
    card.innerHTML = `
        <div class="emoji-container">🎉</div>
        <h1 class="title">Ура! Я самый счастливый! 🥰</h1>
        <p>Люблю тебя бесконечно! 💖</p>
    `;
});

noBtn.addEventListener('click', () => {
    noCount++;
    if (noCount < phrases.length) {
        question.innerText = phrases[noCount];
        emoji.innerText = noCount >= 3 ? "💖" : "🥺";
    }
    // Увеличиваем кнопку "Да"
    const scale = 1 + (noCount * 0.2);
    yesBtn.style.transform = `scale(${scale})`;
});
