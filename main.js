// const hapuscard = document.querySelectorAll('.container');
// const hapuscardx = document.querySelectorAll('.close');

// for (let i = 0; i < hapuscardx.length; i++) {
//     hapuscardx[i].addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault()
//         e.stopPropagation()
//     });
// }



// const cards = document.querySelectorAll('.close')
// cards.forEach(function(card){
//     card.addEventListener('click',function(){
//         alert('ok')
//     })

// })

//fix kalau get api pakenya ini

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault()
    }
});