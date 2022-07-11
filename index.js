const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Poco a poco como nos hemos conocido he podido comprobar que a tu lado puedo ser feliz, el mas feliz, tu carácter alegre, tu sonrisa tierna y tu ojos hermosos son las cosas que más me gustan de ti, me encantas, prometo demostrarte mi amor cada día, TE AMO Karli bonita. ❤')
});
const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})
