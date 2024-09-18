
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.pop-up');
    const closeButton = document.querySelector('.popup-close');

    // Функция для закрытия поп-ап окна
    function closePopup() {
        popup.classList.add('visually-hidden');
    }

    // Обработчик события клика на кнопку закрытия
    closeButton.addEventListener('click', closePopup);
});