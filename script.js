
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const backToTopButton = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    const username = document.getElementById('username');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const errorMessage = document.getElementById('error-message');

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.src = 'images/lightm.png';
            modeToggle.innerHTML = '<img id="mode-icon" src="images/lightm.png" alt="Mode Icon" style="width: 20px; height: 20px;"> Light Mode';
        } else {
            modeIcon.src = 'images/darkm.png';
            modeToggle.innerHTML = '<img id="mode-icon" src="images/darkm.png" alt="Mode Icon" style="width: 20px; height: 20px;"> Dark Mode';
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    contactForm.addEventListener('submit', (event) => {
        if(username.value === "") {
            errorMessage.style.display = "block";
           }   else {
            errorMessage.style.display = 'none';  
        }
        if (password1.value !== password2.value) {
            event.preventDefault();
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });
});

