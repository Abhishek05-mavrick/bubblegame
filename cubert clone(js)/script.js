// const cursor1 = new MouseFollower({
//     container: '.mf-container',
//     speed: 0.3
// });
const cursor = new MouseFollower();
const el = document.querySelector('.headings');

el.addEventListener('mouseenter', () => {
    cursor.setImg('/img/css.png')
});

el.addEventListener('mouseleave', () => {
    cursor.removeImg()
});
