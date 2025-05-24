// script.js

const priceLists = [
  {
    source: 'brows',
    categories: {
      Брови: {
        'Исламская коррекция': 1200,
        'Архитектура бровей (эскиз, коррекция, окрашивание)': 1200,
        'Окрашивание хной/краской': 800,
      },
      'Дополнительные услуги': {
        'Осветление бровей на 1/2 тона': 500,
        'Прореживание бровей': 300,
        'Окрашивание ресниц': 500,
        'Снятие наращенных ресниц': 600,
        'Тридинг лица': 700,
        'Ваксинг 1 зона': 400,
        'Ваксинг (всё лицо)': 1300,
        'Ламинирование ресниц/бровей': 2000,
        'Вельвет ресниц/бровей': 2500,
      },
    },
  },
  {
    source: 'lashes',
    categories: {
      'Наращивание ресниц': {
        'Объём классика': 1900,
        'Объём 2D': 2300,
        'Объём 3D': 2700,
        'Объём 4D': 3000,
      },
      Ламинирование: {
        'Ламинирование ресниц': 1700,
        'Ламинирование верхних и нижних ресниц': 3000,
      },
      Брови: {
        'Коррекция и покраска бровей': 700,
        'Исламская коррекция бровей': 500,
      },
      Ресницы: {
        'Снятие ресниц': 200,
      },
    },
  },
  {
    source: 'hair',
    categories: {
      'Парикмахерские услуги': {
        Стрижка: 'от 700-1000',
        Чёлка: 200,
        Укладка: '700-1500',
        'Окрашивание в один тон': 'от 1500-2500',
        Тонирование: '2000-2500',
        'Сложное окрашивание': '5000-12000',
        'Выход с чёрного': '5000-15000',
      },
      Причёски: {
        'Свадебная причёска': '4000-6000',
        'Вечерняя причёска': '1500-3500',
      },
      Платок: {
        'Повязать платок': 1500,
        'Повязать платок невесте (в салоне)': 3500,
        'Повязать платок невесте (на дом)': 5000,
      },
    },
  },
  {
    source: 'hijama',
    categories: {
      Хиджама: {
        'Лечебная хиджама': 1000,
        'Косметическая хиджама': 1800,
        'Классический массаж': 1500,
        'Медовый массаж': 1500,
        'Лимфодренажный массаж': 1300,
        'Массаж лица': 1500,
        'Антицеллюлитный массаж': 2500,
        'Массаж спины': 800,
        'Шейно-воротниковая зона': 800,
        'Расслабляющий массаж': 1500,
        'Лечебный массаж': 1000,
        'Общий массаж всего тела + лицо': 2500,
      },
    },
  },
  {
    source: 'massage',
    categories: {
      Массаж: {
        'Классический массаж': 1500,
        'Медовый массаж': 1500,
        'Лимфодренажный массаж': 1300,
        'Массаж лица': 1500,
        'Антицеллюлитный массаж': 2500,
        'Массаж спины': 800,
        'Шейно-воротниковая зона': 800,
        'Расслабляющий массаж': 1500,
        'Лечебный массаж': 1000,
        'Общий массаж всего тела + лицо': 2500,
      },
    },
  },
  {
    source: 'cosmetologist',
    categories: {
      // сюда можно добавить категории косметолога
    },
  },
  {
    source: 'colorist',
    categories: {
      // сюда можно добавить категории колориста
    },
  },
  {
    source: 'nails',
    categories: {
      // сюда можно добавить категории педикюра/маникюра
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const services = document.querySelectorAll('.service-item');
  const container = document.querySelector('.service-description');

  // Соответствие source → имя файла фона
  const bgMap = {
    brows: 'flowers-1.png',
    lashes: 'flowers-2.png',
    hair: 'flowers-3.png',
    hijama: 'flowers-4.png',
    massage: 'flowers-5.png',
    cosmetologist: 'flowers-6.png',
    colorist: 'flowers-7.png',
    nails: 'flowers-8.png',
  };

  services.forEach(service => {
    service.addEventListener('click', () => {
      services.forEach(s => s.classList.remove('service-item_active'));
      service.classList.add('service-item_active');

      const srcKey = service.dataset.source;
      const imgFile = bgMap[srcKey] || bgMap.brows;
      container.style.background = `url('../assets/img/${imgFile}') center center / cover no-repeat`;

      renderPrice(srcKey, container);
    });
  });

  const first = document.querySelector('.service-item_active');
  if (first) first.click();

  // Бургер-меню
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

function renderPrice(source, container) {
  container.innerHTML = '';
  const matched = priceLists.find(p => p.source === source);
  if (!matched || !matched.categories) {
    container.textContent = 'Прайс-лист не найден.';
    return;
  }

  for (const category in matched.categories) {
    const block = document.createElement('div');
    block.className = 'price-block';

    // Заголовок категории
    const title = document.createElement('h3');
    title.textContent = category;
    block.appendChild(title);

    // Список услуг (только названия)
    const ul = document.createElement('ul');
    for (const serviceName in matched.categories[category]) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${serviceName}</strong>`;
      ul.appendChild(li);
    }
    block.appendChild(ul);

    container.appendChild(block);
  }
}
