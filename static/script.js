// Реалізувати подобу інтернет-магазину.

// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, 
// що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


const mainCatalog = document.querySelectorAll('.catalogItem');
const products = document.querySelectorAll('.products');

const productsArray = document.querySelectorAll('.productCard');
const infoBlocks = document.querySelectorAll('.productInfo');

const buyBtn = document.getElementById('buyBtn');

mainCatalog.forEach((catalogItem) => {
    catalogItem.addEventListener('click', (event) => {
        let target = event.target;
        const productsListId = target.getAttribute('data-block');

        products
            .forEach((catalogCategory) => {
                catalogCategory.style.display = 'none';

                if (catalogCategory.id === productsListId) {
                    catalogCategory.style.display = 'flex';
                }
            })

        infoBlocks
            .forEach((infoBlock) => {
                infoBlock.style.display = 'none';
            })

        buyBtn.style.display = 'none';
    }
    )
})


productsArray.forEach((product) => {
    product.addEventListener('click', (event) => {
        let target = event.target;
        const productInfoId = target.getAttribute('data-block');

        infoBlocks
            .forEach((infoBlock) => {
                infoBlock.style.display = 'none';

                if (infoBlock.id === productInfoId) {
                    infoBlock.style.display = 'block';
                }
            })

        buyBtn.style.display = 'block';
    }
    )
})

buyBtn.addEventListener('click', () => {
    let message = document.createElement('p');
    message.classList.add('message');
    message.textContent = 'Товар куплений';
    document.getElementById('productsInfoCards').appendChild(message);

    buyBtn.setAttribute('disabled', 'disabled');

    setTimeout(() => {
        infoBlocks
            .forEach((infoBlock) => {
                infoBlock.style.display = 'none';
            })

        buyBtn.style.display = 'none';

        products
            .forEach((catalogCategory) => {
                catalogCategory.style.display = 'none';
            })

        message.style.display = 'none';
        buyBtn.removeAttribute('disabled');
    }, 2000)
})

