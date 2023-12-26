document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    let currentProductIndex = 0;

    const showProduct = (index) => {
        products.forEach((product, i) => {
            product.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    };

    document.querySelector('.left-arrow').addEventListener('click', () => {
        currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
        showProduct(currentProductIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        currentProductIndex = (currentProductIndex + 1) % products.length;
        showProduct(currentProductIndex);
    });
});
