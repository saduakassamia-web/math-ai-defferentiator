let currentLevel = 1;

const levelsData = {
    1: {
        title: "1-деңгей: Foundation (Жеңілдетілген)",
        desc: "Формуланы түсінуге арналған қарапайым мысал. Еске түсіру: $(a+b)^2 = a^2 + 2ab + b^2$.",
        math: "(x + 3)^2 өрнегін ашып жазыңыз.",
        answer: "x^2+6x+9",
        hint: "Қадамдық көмек: Бірінші мүшенің квадраты ($x^2$), үстем екі еселенген көбейтінді ($2 \\cdot x \\cdot 3 = 6x$) және екінші мүшенің квадраты ($3^2 = 9$)."
    },
    2: {
        title: "2-деңгей: Standard (Мектеп бағдарламасы)",
        desc: "Орташа күрделіліктегі стандартты есеп шығару деңгейі[cite: 1].",
        math: "(2x - 5)(2x + 5) - (x - 2)^2 өрнегін ықшамдаңыз.",
        answer: "3x^2+4x-21",
        hint: "Көмек: Алдымен квадраты айырмасы формуласын ($(a-b)(a+b)=a^2-b^2$) қолданыңыз, содан соң екінші жақшаны ашыңыз."
    },
    3: {
        title: "3-деңгей: Advanced (Күрделі / Логикалық)",
        desc: "Көп сатылы логикалық есеп және тереңдетілген тапсырма[cite: 1].",
        math: "Егер x + 1/x = 5 болса, x^2 + 1/x^2 неге тең?",
        answer: "23",
        hint: "Көмек: Берілген теңдіктің екі жағын да квадраттаңыз: $(x + 1/x)^2 = 5^2$."
    }
};

function setLevel(level) {
    currentLevel = level;
    document.querySelectorAll('.level-btn').forEach((btn, idx) => {
        if (idx + 1 === level) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.getElementById('task-title').innerText = levelsData[level].title;
    document.getElementById('task-description').innerText = levelsData[level].desc;
    document.getElementById('task-math').innerText = "Есеп: " + levelsData[level].math;
    document.getElementById('user-answer').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('feedback').style.background = 'transparent';
}

function checkAnswer() {
    const userAns = document.getElementById('user-answer').value.replace(/\s+/g, '').toLowerCase();
    const correctAns = levelsData[currentLevel].answer.replace(/\s+/g, '').toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAns === correctAns) {
        feedback.style.background = '#d4edda';
        feedback.style.color = '#155724';
        feedback.innerText = 'Дұрыс! Тамаша жұмыс!';
    } else {
        feedback.style.background = '#f8d7da';
        feedback.style.color = '#721c24';
        feedback.innerText = 'Қате. ЖІ көмегін (AI Көмегі) қолданып көріңіз.';
    }
}

function getAIHint() {
    const feedback = document.getElementById('feedback');
    feedback.style.background = '#cce5ff';
    feedback.style.color = '#004085';
    feedback.innerText = `🤖 Жасанды интеллект кеңесі: ${levelsData[currentLevel].hint}`;
}
