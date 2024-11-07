function animarSections() {
    const sections = document.querySelectorAll('section')

    sections.forEach(section => {
        if (section.classList.contains('review')) {
            section.classList.remove('fade-in')
            return
        }

        const position = section.getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.classList.add('fade-in')
        }
    });
}

window.addEventListener('scroll', animarSections)

animarSections()


const buttons = document.querySelectorAll('.btn, .btn_classes, .get_strt_btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('scale-up')

        setTimeout(() => {
            button.classList.remove('scale-up');
        }, 300)
    });
});
