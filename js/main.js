const modal = document.getElementById('modal');
// Аккордеон
new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  actveClass: 'accordion--active'
});

// Табы
document.querySelectorAll('.accordion__btn-tabs').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.accordion__btn-tabs').forEach(function (btn) {
      btn.classList.remove('tabs__btn--active');
    });
    e.currentTarget.classList.add('tabs__btn--active');
    document.querySelectorAll('.tabs__content').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__content--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active');
  });
});


// якорный переход по навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Слайдер
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-prev',
    prevEl: '.swiper-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    461: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1301: {
      slidesPerView: 4,
    },
  }
});


// получаем элементы по id
const headerLeft = document.getElementById('header-left');
const headerContainer = document.getElementById('header-container');
const header = document.getElementById('header');
const playlistContainer = document.getElementById('playlists-container');
const playlistLeft = document.getElementById('playlists-left');
const playlistsBottom = document.getElementById('playlists-bottom');
const broadcastsBottomContent = document.getElementById('broadcasts-bottom-content');
const broadcastsBottomItem = document.getElementById('broadcasts-bottom-item');
const broadcasts = document.getElementById('broadcasts');
const footer = document.getElementById('footer');
const footerRight = document.getElementById('footer-right');
const footerTop = document.getElementById('footer-top');
const footerBottom = document.getElementById('footer-bottom');
const navBottom = document.getElementById('nav-bottom');
const navBottomList = document.getElementById('nav-bottom-list');
const headerNav = document.getElementById('header-nav');
const openModal = document.getElementById('modal-open');
const closeModal = document.getElementById('modal-close');


// создаем элементы
const broadcastsBottom = document.createElement('div');
const container = document.createElement('div');
container.classList.add('container');
broadcastsBottom.classList.add('broadcasts-bottom');


// перемещение эдементов на медиа 460
function media460() {
  if (window.matchMedia('(max-width: 460px)').matches) {
    footer.append(footerRight);
    footer.append(footerBottom);
    headerNav.append(navBottomList);
  } else {
    footerTop.append(footerRight);
    navBottom.append(navBottomList);
  };

};

// перемещение элементов на медиа 992
function media992() {
  if (window.matchMedia('(max-width: 992px)').matches) {
    container.append(broadcastsBottomContent);
    broadcastsBottom.prepend(container);
    broadcasts.append(broadcastsBottom);
  } else {
    broadcastsBottomItem.append(broadcastsBottomContent);
  };
};

// перемещение элементов на медиа 1300
function media1300() {
  if (window.matchMedia('(max-width: 1300px)').matches) {
    playlistContainer.append(playlistsBottom);
    header.prepend(headerLeft);
  } else {
    headerContainer.prepend(headerLeft);
    playlistLeft.append(playlistsBottom);
  };
};


// отрисовка на медиа запросах
media1300();
media992();
media460();
window.matchMedia('(max-width: 1300px)').addEventListener('change', media1300);
window.matchMedia('(max-width: 992px)').addEventListener('change', media992);
window.matchMedia('(max-width: 460px)').addEventListener('change', media460);


// кнопка что в эфире
const ethir = document.querySelector('.header__ethir');
const headerBottom = document.querySelector('.header__bottom');

ethir.addEventListener('click', () => {
  ethir.classList.toggle('header__ethir--active');
  headerBottom.classList.toggle('header__ethir--active');
});


// кнопка поиск по сайту (лупа)
const search = document.querySelector('.header__search');

search.addEventListener('click', () => {
  search.classList.toggle('header__search--active');
});


// бургер меню
const burger = document.getElementById('burger');
const body = document.querySelector('body');
const headerLink = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  body.classList.toggle('stop-scroll');
});

headerLink.forEach(element => {
  element.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    body.classList.remove('stop-scroll');
  });
});


// открытие и закрытие модального окна
openModal.addEventListener('click', () => {
  modal.classList.add('modal--active');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal--active');
});


// выпадающий список
const select = document.getElementById('select');
const nameList = document.querySelectorAll('.select__item');

select.addEventListener('click', () => {
  select.classList.toggle('select--active');
});

const choiceName = (name) => {
  name.addEventListener('click', () => {
    select.textContent = name.textContent;
    for (const item of nameList) {
      item.classList.remove('select__none');
      if (item.textContent == select.textContent) {
        item.classList.add('select__none');
      };
    };
    select.classList.remove('select--active')
  });
};

for (const name of nameList) {
  choiceName(name);
};

const selectList = document.querySelector('.select__list')
selectList.addEventListener('mouseleave', () => {
  select.classList.remove('select--active');
});



// кнопки play в хедере
const headerPlay = document.querySelectorAll('.header__play');

for (const btn of headerPlay) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('header__play--active');
  });
}



// кнопк play в подкастах
const podcastsButton = document.querySelectorAll('.podcasts__btn');

for (const btn of podcastsButton) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('podcasts__btn--active');
  });
};


// кнопка показать больше подкастов
const morePodcasts = document.querySelector('.podcasts__more');
const podcastsItem = document.querySelectorAll('.podcasts__item');

morePodcasts.addEventListener('click', () => {
  for (const item of podcastsItem) {
    item.classList.remove('podcasts__item--hidden');
    item.style.display = 'block';
  };
  morePodcasts.classList.add('podcasts__item--hidden');
});


// валидация формы отправки сообщения
new JustValidate('.about__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
    },
    message: {
      required: true,
      minLength: 2,
    },
    mail: {
      required: true,
      email: true
    },
    checkbox: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Минимум 2 символа',
    },
    message: {
      required: 'Вы не ввели сообщение',
      minLength: 'Минимум 2 символа',
    },
    mail: {
      required: 'Вы не ввели email',
      email: 'Введите корректный email'
    },
  },
  colorWrong: '#D52B1E',
});


// валидация входа в личный кабинет
new JustValidate('.modal__form', {
  rules: {
    login: {
      required: true,
    },
    password: {
      required: true,
    },

  },
  messages: {
    login: {
      required: 'Введите Ваш логин',
    },
    password: {
      required: 'Введите Ваш пароль',
    },
  },
  colorWrong: '#D52B1E',

});
