// Счётчик
let col = document.getElementById('amount-col');
let plus = document.getElementById('amount-plus');
let minus = document.getElementById('amount-minus');

plus.onclick = function() {
  col.value = parseInt(col.value) + 1;
}

minus.onclick = function() {
  col.value = parseInt(col.value) - 1;
}

// Модальное окно 
let modBack = document.querySelector('.modal-background'); 
let modal = document.querySelector('.modal'); 
let openModalButtons = document.querySelectorAll('.open-modal'); 
let closeModalButton = document.querySelector('.close-modal'); 

openModalButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        modBack.classList.add('active'); 
        modal.classList.add('active'); 
    })
});

closeModalButton.addEventListener('click',() => { 
    modBack.classList.remove('active'); 
    modal.classList.remove('active'); 
});

document.addEventListener('click', (e) => {
    if(e.target === modBack) {
        modBack.classList.remove('active'); 
        modal.classList.remove('active'); 
    }
});

// Слайдер

let button = document.getElementsByClassName('slider-btn');
let buttonArea = document.getElementsByClassName('slider-block-btn')[0];
let slider = document.getElementsByClassName('slider-item');
let sliderIndex = 1;

showSlider(sliderIndex);

function showSlider (n) {
    if (n < 1) {
        sliderIndex = slider.length;
    } else if (n > slider.length) {
        sliderIndex = 1
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active');
    }
    slider[sliderIndex - 1].style.display = 'block';
    button[sliderIndex - 1].classList.add('active');
}

function currentSlide (n) {
    showSlider(sliderIndex = n);
}

buttonArea.onclick = function (e) {
    for (let i = 0; i < button.length + 1; i++) {
        if (e.target.classList.contains('slider-btn') && e.target == button[i - 1]) {
            currentSlide(i);
        }
    }
}


// dropdown
let dropdown = document.querySelector('.dropdown'); 
let openDropdownButtons = document.querySelectorAll('.dropdown-open'); 
let closeDropdownButtons = document.querySelector('.dropdown-close');

openDropdownButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        dropdown.classList.add('active'); 
    })
});

closeDropdownButtons.addEventListener('click',() => { 
    dropdown.classList.remove('active'); 
});