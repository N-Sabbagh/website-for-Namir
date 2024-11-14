document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('open');

        const arrow = button.querySelector('.arrow');
        arrow.classList.toggle('open');
    });
});

function toggleInfo(id) {
    const info = document.getElementById(id);
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}
