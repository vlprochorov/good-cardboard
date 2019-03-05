ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
    center: [54.752656, 56.002053],
    zoom: 16,
    // scroll: false
}, {
    searchControlProvider: 'yandex#search'
}),

// Создаём макет содержимого.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Добрый Картон',
    balloonContent: 'Мы находимся по адресу: <br> г. Уфа, Проспект октября, 46. Ждём Вас!'
}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/contacts/map-yandex-marker.png',
    // Размеры метки.
    iconImageSize: [64, 64],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-34, -60]
});

myMap.geoObjects.add(myPlacemark);
myMap.behaviors.disable('scrollZoom'); 
});