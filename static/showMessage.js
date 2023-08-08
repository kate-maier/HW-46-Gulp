// Додатковий js-файл для перевірки дії Gulp-Concat

function showMessage() {
    let forBundleTest = document.getElementById('forBundleTest');
    forBundleTest.textContent = 'Gulp-concat works!!!';
    forBundleTest.className = 'forCheck';
    console.log('Gulp-concat works!!!')
}

showMessage();