const themeSelector = document.querySelector('#theme-selector');
function changeTheme() {
    const theme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector('.logo');
    if (theme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);