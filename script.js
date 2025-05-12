document.getElementById('mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Smooth scrolling
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -70; // Adjust this value to account for fixed header height
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});