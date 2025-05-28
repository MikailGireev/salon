const priceLists = [
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
    source: 'colorist',
    categories: {
      Колорист: {
        'Сложное окрашивание': 0,
        'Простое окрашивание': 0,
        Мелирование: 0,
        Пряди: 0,
        Блики: 0,
        'И многое другое': 0,
      },
    },
  },
  {
    source: 'nails',
    categories: {
      'Педикюр/Маникюр': {
        Маникюр: 1500,
        Педикюр: 1500,
        'Покрытие хной': 1300,
        Полировка: 1500,
        'Рисунки хной': 2500,
        'Свадебный маникюр': 800,
      },
    },
  },
  {
    source: 'cosmetologist',
    categories: {
      Косметолог: {
        'Чистка лица(механическая,комбинированная,ультразвуковая)': 0,
        Пилинги: 0,
        'Ботулинотерапия(ботокс)': 0,
        'Коллагенотерапия ': 0,
        'Капиляротерапия(косметическая хиджама)': 0,
        'Биоревитализация ': 0,
        'Мезотерапия ': 0,
        'Полимолочная кислота': 0,
        'Контурная пластика ': 0,
        'Удаление филлера': 0,
        'Массаж лица': 0,
        'Full Face(гармонизация лица)': 0,
        'Коррекция колец Венеры ': 0,
        'Коррекция кисетных морщин': 0,
        Микронидлинг: 0,
        Экзосомы: 0,
        ПДНР: 0,
        'И многое другое.': 0,
      },
    },
  },
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
];

document.addEventListener('DOMContentLoaded', e => {
  const services = document.querySelectorAll('.service-item');
  const container = document.querySelector('.service-description');

  services.forEach(service => {
    service.addEventListener('click', () => {
      services.forEach(s => s.classList.remove('service-item_active'));
      service.classList.add('service-item_active');

      container.className = 'service-description';

      const key = service.dataset.source;
      container.classList.add(`bg-${key}`);

      renderPrice(key, container);
    });
  });

  const first = document.querySelector('.service-item_active');
  if (first) first.click();

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', e => {
    navLinks.classList.toggle('active');
  });

  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  const wrapper = document.querySelector('.slider-wrapper');
  const slideLeft = document.getElementById('slideLeft');
  const slideRight = document.getElementById('slideRight');
  const scrollAmount = 150;

  slideLeft.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  slideRight.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

    const title = document.createElement('h3');
    title.textContent = category;
    block.appendChild(title);

    const ul = document.createElement('ul');
    for (const name in matched.categories[category]) {
      const li = document.createElement('li');

      if (name.includes('(')) {
        const main = name.substring(0, name.indexOf('(')).trim();
        const desc = name.substring(name.indexOf('(')).trim();
        li.innerHTML = `<strong>${main}</strong> <span>${desc}</span>`;
      } else {
        li.innerHTML = `<strong>${name}</strong>`;
      }

      ul.appendChild(li);
    }

    block.appendChild(ul);
    container.appendChild(block);
  }
}
