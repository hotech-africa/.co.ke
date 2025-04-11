window.addEventListener('load', function() {
    console.log('DOM fully loaded');

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        console.log('Theme toggle found');
        themeToggle.addEventListener('click', function() {
            console.log('Theme toggle clicked');
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon');
                icon.classList.toggle('fa-sun');
                console.log('Icon toggled to:', icon.className);
            } else {
                console.error('Icon not found in theme toggle');
            }
        });
    } else {
        console.error('Theme toggle button not found');
    }

    // No need for menu toggle JavaScript since dropdown uses native behavior
});
