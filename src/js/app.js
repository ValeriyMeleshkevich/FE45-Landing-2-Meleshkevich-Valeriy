//Slider

//Инициализация Swiper
const swiper = new Swiper('.swiper', {

  // Запускаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  //Запускаем навигацию    
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  mousewheel: true,
  keyboard: true,

  // simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
});




//Hamburger

//Инициализация бургера
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}