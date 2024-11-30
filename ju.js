// Переключение вкладок
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tab).classList.add('active');
    });
});

// Данные для курсов
const courses = {
    html: {
        title: 'Основы HTML',
        description: 'В этом курсе вы научитесь основам HTML, как создавать веб-страницы, использовать теги и атрибуты.',
        pdfs: [
            { name: 'Основы HTML (PDF)', url: 'docs/HTML_Basics.pdf' },
            { name: 'HTML Руководство (PDF)', url: 'docs/HTML_Guide.pdf' }
        ],
        video: 'https://www.youtube.com/embed/DLX62G4lc44'
    },
    css: {
        title: 'Основы CSS',
        description: 'Изучите основы CSS, стилизацию текста, цветов, позиционирование элементов и создание адаптивных страниц.',
        pdfs: [
            { name: 'Основы CSS (PDF)', url: 'docs/CSS_Basics.pdf' }
        ],
        video: 'https://www.youtube.com/embed/yfoY53QXEnI'
    },
    javascript: {
        title: 'Основы JavaScript',
        description: 'Научитесь основам JavaScript: переменные, циклы, функции и DOM-манипуляции.',
        pdfs: [
            { name: 'Основы JavaScript (PDF)', url: 'docs/JavaScript_Basics.pdf' }
        ],
        video: 'https://www.youtube.com/embed/W6NZfCO5SIk'
    },
    python: {
        title: 'Основы Python',
        description: 'Этот курс поможет вам освоить Python и основные концепции программирования.',
        pdfs: [
            { name: 'Основы Python (PDF)', url: 'docs/Python_Basics.pdf' }
        ],
        video: 'https://www.youtube.com/embed/sugvnHA7ElY'
    },
    react: {
        title: 'Основы React',
        description: 'Курс по React поможет вам освоить основы создания интерфейсов и приложений на React.',
        pdfs: [
            { name: 'Основы React (PDF)', url: 'docs/React_Basics.pdf' }
        ],
        video: 'https://www.youtube.com/embed/Ke90Tje7VS0'
    }
};

// Функция для загрузки курсов в каталог
function loadCourses() {
    const container = document.querySelector('.courses-container');
    Object.keys(courses).forEach(courseKey => {
        const course = courses[courseKey];
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        courseCard.addEventListener('click', () => loadMaterial(courseKey));
        container.appendChild(courseCard);
    });
}

// Функция для загрузки материалов курса
function loadMaterial(courseKey) {
    const course = courses[courseKey];
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    
    const pdfList = document.getElementById('pdfs');
    pdfList.innerHTML = '';
    course.pdfs.forEach(pdf => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = pdf.name;
        a.href = pdf.url;
        a.target = '_blank';
        li.appendChild(a);
        pdfList.appendChild(li);
    });

    document.getElementById('video-frame').src = course.video;
    document.getElementById('material-content').classList.remove('hidden');
}

// Инициализация курса при загрузке страницы
loadCourses();

// Логика сохранения настроек
function saveSettings() {
    const username = document.getElementById('username').value;
    if (username) {
        alert(`Привет, ${username}!`);
    } else {
        alert('Пожалуйста, введите имя пользователя.');
    }
}
