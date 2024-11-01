// src/js/index.js

// Импортируем данные о автомобилях
import cars from './cars.json';

// Получаем контейнер для карточек автомобилей
const carContainer = document.getElementById('car-container').querySelector('.row');

// Функция для создания карточки автомобиля
function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4'; // Bootstrap класс для колонки

    card.innerHTML = `
        <div class="card">
            <img src="${car.image}" class="card-img-top" alt="${car.name}">
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">Цена: ${car.price}</p>
            </div>
        </div>
    `;

    return card;
}

// Добавляем карточки автомобилей в контейнер
cars.forEach(car => {
    const carCard = createCarCard(car);
    carContainer.appendChild(carCard);
});
