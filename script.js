let currentLevel = 1;

const levelsData = {
    1: {
        title: "Level 1: Foundation (Simplified)",
        desc: "A simple example to understand the formula. Reminder: $(a+b)^2 = a^2 + 2ab + b^2$.",
        math: "Expand the expression $(x + 3)^2$.",
        answer: "x^2+6x+9",
        hint: "Step-by-step hint: First term squared ($x^2$), double product ($2 \\cdot x \\cdot 3 = 6x$), and second term squared ($3^2 = 9$)."
    },
    2: {
        title: "Level 2: Standard (Curriculum Level)",
        desc: "Standard grade-level problem solving for expression simplification[cite: 1].",
        math: "Simplify the expression $(2x - 5)(2x + 5) - (x - 2)^2$.",
        answer: "3x^2+4x-21",
        hint: "Hint: First apply the difference of squares formula ($(a-b)(a+b)=a^2-b^2$), then expand the second parenthesis."
    },
    3: {
        title: "Level 3: Advanced (Logic Challenge)",
        desc: "Multi-step logic challenge connecting algebraic identities[cite: 1].",
        math: "If $x + 1/x = 5$, what is the value of $x^2 + 1/x^2$?",
        answer: "23",
        hint: "Hint: Square both sides of the given equation: $(x + 1/x)^2 = 5^2$."
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
    document.getElementById('task-math').innerText = "Problem: " + levelsData[level].math;
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
        feedback.innerText = 'Correct! Great job!';
    } else {
        feedback.style.background = '#f8d7da';
        feedback.style.color = '#721c24';
        feedback.innerText = 'Incorrect. Try using the AI Hint.';
    }
}

function getAIHint() {
    const feedback = document.getElementById('feedback');
    feedback.style.background = '#cce5ff';
    feedback.style.color = '#004085';
    feedback.innerText = `🤖 AI Hint: ${levelsData[currentLevel].hint}`;
}
