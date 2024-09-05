const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentBgColor = getComputedStyle(root).getPropertyValue('--bg-color').trim();
    
    if (currentBgColor === '#121212') {
        root.style.setProperty('--bg-color', '#f5f5f5');
        root.style.setProperty('--text-color', '#121212');
        themeToggle.textContent = 'Dark Mode';
    } else {
        root.style.setProperty('--bg-color', '#121212');
        root.style.setProperty('--text-color', '#e0e0e0');
        themeToggle.textContent = 'Light Mode';
    }
});
