const nav = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        nav.classList.add('active');
    } else{
        nav.classList.remove('active');
    }
})
