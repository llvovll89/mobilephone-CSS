const popup = document.querySelector('.popup'),
innerBox = document.querySelector('.inner_box');

popup.addEventListener('click', () => {
    popup.classList.toggle('active');
})

innerBox.addEventListener('mouseover', ()=> {
    innerBox.classList.add('active');
})

innerBox.addEventListener('mouseout', ()=> {
    innerBox.classList.remove('active');
})