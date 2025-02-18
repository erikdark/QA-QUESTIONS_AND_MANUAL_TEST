const questions = [
    { question: "Что такое юнит-тестирование?", options: ["A. Тестирование отдельных модулей", "B. Тестирование интерфейсов", "C. Тестирование системы", "D. Тестирование нагрузки"], correct: 0 },
    { question: "Какой инструмент используется для функционального тестирования?", options: ["A. JUnit", "B. Selenium", "C. JMeter", "D. Postman"], correct: 1 },
    { question: "Что такое регрессионное тестирование?", options: ["A. Тестирование производительности", "B. Тестирование безопасности", "C. Тестирование нового функционала", "D. Тестирование после изменений"], correct: 3 },
    { question: "Какой метод используется для тестирования пользовательского интерфейса?", options: ["A. White Box Testing", "B. Black Box Testing", "C. Unit Testing", "D. System Testing"], correct: 1 },
    { question: "Что означает TDD?", options: ["A. Test Driven Development", "B. Test Design Development", "C. Testing During Development", "D. Test Data Development"], correct: 0 },
    { question: "Какой инструмент используется для нагрузочного тестирования?", options: ["A. Selenium", "B. JUnit", "C. JMeter", "D. Postman"], correct: 2 },
    { question: "Что такое Smoke Testing?", options: ["A. Глубокое тестирование функционала", "B. Поверхностное тестирование критического функционала", "C. Тестирование интерфейсов", "D. Тестирование безопасности"], correct: 1 },
    { question: "Что такое Sanity Testing?", options: ["A. Полное тестирование системы", "B. Частичное тестирование после исправления багов", "C. Тестирование производительности", "D. Тестирование безопасности"], correct: 1 },
    { question: "Какой из следующих видов тестирования выполняется без доступа к внутренней структуре системы?", options: ["A. White Box Testing", "B. Black Box Testing", "C. Unit Testing", "D. Integration Testing"], correct: 1 },
    { question: "Что такое тестирование с использованием граничных значений?", options: ["A. Тестирование внутри диапазона значений", "B. Тестирование на крайних значениях диапазона", "C. Тестирование в средних значениях диапазона", "D. Тестирование вне диапазона значений"], correct: 1 },
    { question: "Что такое интеграционное тестирование?", options: ["A. Тестирование отдельных модулей", "B. Тестирование взаимодействия между модулями", "C. Тестирование производительности", "D. Тестирование интерфейсов"], correct: 1 },
    { question: "Что такое Acceptance Testing?", options: ["A. Тестирование производительности", "B. Тестирование интерфейсов", "C. Тестирование системы перед релизом", "D. Тестирование безопасности"], correct: 2 },
    { question: "Какой из следующих методов тестирования помогает выявить ошибки безопасности?", options: ["A. White Box Testing", "B. Black Box Testing", "C. Penetration Testing", "D. Regression Testing"], correct: 2 },
    { question: "Какой метод используется для тестирования производительности системы?", options: ["A. Load Testing", "B. Smoke Testing", "C. Unit Testing", "D. Acceptance Testing"], correct: 0 },
    { question: "Что такое тестирование по сценариям?", options: ["A. Тестирование отдельных модулей", "B. Тестирование на основе заранее определенных сценариев", "C. Тестирование производительности", "D. Тестирование безопасности"], correct: 1 },
    { question: "Что такое тестирование на основе рисков?", options: ["A. Тестирование функционала системы", "B. Тестирование частей системы с наибольшим риском отказа", "C. Тестирование безопасности", "D. Тестирование производительности"], correct: 1 },
    { question: "Какой из следующих видов тестирования выполняется для проверки, что новое изменение не повредило существующий функционал?", options: ["A. Load Testing", "B. Smoke Testing", "C. Regression Testing", "D. Security Testing"], correct: 2 },
    { question: "Что такое White Box Testing?", options: ["A. Тестирование внутренней структуры системы", "B. Тестирование внешней функциональности системы", "C. Тестирование производительности", "D. Тестирование безопасности"], correct: 0 },
    { question: "Какой метод тестирования используется для обнаружения дефектов на ранних стадиях разработки?", options: ["A. Acceptance Testing", "B. Regression Testing", "C. Unit Testing", "D. Load Testing"], correct: 2 },
    { question: "Что такое Test Plan?", options: ["A. Документ, описывающий стратегию тестирования", "B. Документ, описывающий найденные баги", "C. Документ, описывающий сценарии тестирования", "D. Документ, описывающий требования"], correct: 0 },
    { question: "Что такое Test Case?", options: ["A. Набор действий для проверки конкретной функции", "B. Документ, описывающий стратегию тестирования", "C. Документ, описывающий найденные баги", "D. Документ, описывающий требования"], correct: 0 },
    { question: "Что такое Bug Report?", options: ["A. Документ, описывающий стратегию тестирования", "B. Документ, описывающий найденные баги", "C. Документ, описывающий сценарии тестирования", "D. Документ, описывающий требования"], correct: 1 },
    { question: "Какой из следующих методов тестирования направлен на оценку удобства использования системы?", options: ["A. Load Testing", "B. Smoke Testing", "C. Usability Testing", "D. Security Testing"], correct: 2 },
    { question: "Что такое Exploratory Testing?", options: ["A. Тестирование производительности", "B. Тестирование системы без заранее подготовленных сценариев", "C. Тестирование безопасности", "D. Тестирование интерфейсов"], correct: 1 },
    { question: "Какой инструмент используется для автоматизации тестирования?", options: ["A. JUnit", "B. Selenium", "C. JMeter", "D. Postman"], correct: 1 },
    { question: "Что такое Alpha Testing?", options: ["A. Тестирование системой перед релизом", "B. Тестирование системы после релиза", "C. Тестирование производительности", "D. Тестирование безопасности"], correct: 0 },
    { question: "Что такое Beta Testing?", options: ["A. Тестирование системой перед релизом", "B. Тестирование системы после релиза пользователями", "C. Тестирование производительности", "D. Тестирование безопасности"], correct: 1 },
    { question: "Что такое Static Testing?", options: ["A. Тестирование без выполнения кода", "B. Тестирование производительности", "C. Тестирование безопасности", "D. Тестирование интерфейсов"], correct: 0 }
];

let selectedQuestions = [];
let userAnswers = [];

function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
}

function displayQuestions() {
    selectedQuestions = getRandomQuestions();
    const questionContainer = document.getElementById('questions');
    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        
        const questionTitle = document.createElement('div');
        questionTitle.className = 'question';
        questionTitle.textContent = q.question;
        questionDiv.appendChild(questionTitle);
        
        const optionsList = document.createElement('ul');
        optionsList.className = 'options';
        q.options.forEach((option, optIndex) => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${index}`;
            optionInput.value = optIndex;
            optionItem.appendChild(optionInput);
            optionItem.appendChild(document.createTextNode(option));
            optionsList.appendChild(optionItem);
        });
        questionDiv.appendChild(optionsList);
        questionContainer.appendChild(questionDiv);
    });
}

function submitAnswers() {
    userAnswers = [];
    selectedQuestions.forEach((q, index) => {
        const options = document.getElementsByName(`question-${index}`);
        options.forEach(option => {
            if (option.checked) {
                userAnswers.push(parseInt(option.value, 10));
            }
        });
    });

    if (userAnswers.length < selectedQuestions.length) {
        alert("Вы ответили не на все вопросы.");
        return;
    }

    checkAnswers();
}

function checkAnswers() {
    let correctCount = 0;
    const errors = [];

    selectedQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correctCount++;
        } else {
            errors.push({ question: q.question, userAnswer: q.options[userAnswers[index]], correctAnswer: q.options[q.correct] });
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Правильных ответов: ${correctCount} из ${selectedQuestions.length}`;
    
    if (correctCount < 15) {
        const errorList = document.createElement('ul');
        errors.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerHTML = `Вопрос: ${error.question}<br>Ваш ответ: ${error.userAnswer}<br>Правильный ответ: ${error.correctAnswer}`;
            errorList.appendChild(errorItem);
        });
        resultContainer.appendChild(errorList);
    } else {
        const practicalTestButton = document.createElement('button');
        practicalTestButton.textContent = 'Начать практический тест';
        practicalTestButton.onclick = () => {
            const randomShopLink = getRandomShopLink();
            window.location.href = randomShopLink;
        };
        resultContainer.appendChild(practicalTestButton);
    }
}


function getRandomShopLink() {
    const links = ['shop_1.html', 'shop_2.html', 'shop_3.html'];
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    // Вставляем функцию для случайного выбора ссылки перед загрузкой вопросов
    const randomShopLink = getRandomShopLink();
    // Далее вызываем функцию для отображения вопросов
    displayQuestions();
});

document.getElementById('submit').addEventListener('click', submitAnswers);
