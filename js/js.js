const navigationSwitcher = document.querySelector('.page__navigation--switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.page__navigation-list--js');
    navigationList.classList.toggle('page__navigation-list--visible');
})