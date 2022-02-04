const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.page__navigation--top-list--js');
    navigationList.classList.toggle('page__navigation--top-list--visible');
})