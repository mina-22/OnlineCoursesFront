const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const inputField = document.getElementById("counter");

// Event listener for the plus button
plusBtn.addEventListener("click", function() {  
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
});

// Event listener for the minus button
minusBtn.addEventListener("click", function() {
    let currentValue = parseInt(inputField.value);
    if (currentValue > parseInt(inputField.min)) {
        inputField.value = currentValue - 1;
    }
});

// --------------------------------
let divinfobook =document.getElementById('divinfobook');
let divcommentbook = document.getElementById('divcommentbook')
let infobook = document.getElementById('infobook');
let commentbook = document.getElementById('commentbook');
infobook.addEventListener('click', function() {
    this.classList.add('active-under-button');
    commentbook.classList.remove('active-under-button');  
    divinfobook.classList.add('able')
    divinfobook.classList.remove('disable')
    divcommentbook.classList.add('disable')
    divcommentbook.classList.remove('able')
  });
  commentbook.addEventListener('click', function() {
    this.classList.add('active-under-button');
    infobook.classList.remove('active-under-button');  
    divinfobook.classList.add('disable')
    divinfobook.classList.remove('able')
    divcommentbook.classList.add('able')
    divcommentbook.classList.remove('disable')
  });