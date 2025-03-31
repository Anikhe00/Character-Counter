// Get DOM elements
const body = document.getElementById('body');
const themeSwitcher = document.getElementById('theme-switcher');
const lightSwitch = document.getElementById('light-switch');
const darkSwitch = document.getElementById('dark-switch');
const logo = document.getElementById('logo')

// Theme switching function
function toggleTheme() {
    const isDark = body.style.getPropertyValue('--neutral-900') === '#12131A';
    
    if (isDark) {
        // Switch to light theme
        body.style.setProperty('--neutral-900', '#FFFFFF');
        body.style.setProperty('--neutral-800', '#F2F2F7');
        body.style.setProperty('--neutral-700', '#E4E4EF');
        body.style.setProperty('--neutral-600', '#404254');
        body.style.setProperty('--neutral-200', '#404254');
        body.style.setProperty('--neutral-100', '#21222C');
        body.style.setProperty('--neutral-0', '#12131A');
        
        // Update logo for light theme
        logo.src = './Assets/Logo/Logo Dark.svg'

        // Update icons
        lightSwitch.classList.add('inactive');
        darkSwitch.classList.remove('inactive');

    } else {
        // Switch to dark theme
        body.style.setProperty('--neutral-900', '#12131A');
        body.style.setProperty('--neutral-800', '#21222C');
        body.style.setProperty('--neutral-700', '#2A2B37');
        body.style.setProperty('--neutral-200', '#E4E4EF');
        body.style.setProperty('--neutral-100', '#F2F2F7');
        body.style.setProperty('--neutral-0', '#FFFFFF');
        
        // Update logo for light theme
        logo.src = './Assets/Logo/Logo White.svg'

        // Update icons
        lightSwitch.classList.remove('inactive');
        darkSwitch.classList.add('inactive');
    }
}

export {toggleTheme}