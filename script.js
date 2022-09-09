const homeBtn = document.querySelector('.fa-house-chimney');
const workBtn = document.querySelector('.fa-folder');
const messageBtn = document.querySelector('.fa-envelope');
const twitterBtn = document.querySelector('.fa-twitter');
const homeContent = document.querySelector('.home-content');
const workContent = document.querySelector('.work-content');
const messageContent = document.querySelector('.contact-content');

homeBtn.addEventListener('click', ()=>{
    homeContent.classList.remove('hide');
    workContent.classList.add('hide');
    messageContent.classList.add('hide');
})

workBtn.addEventListener('click', ()=>{
    homeContent.classList.add('hide');
    workContent.classList.remove('hide');
    messageContent.classList.add('hide');
})

messageBtn.addEventListener('click', ()=>{
    homeContent.classList.add('hide');
    workContent.classList.add('hide');
    messageContent.classList.remove('hide');
})

function navigate(){
    homeContent.classList.add('hide');
    workContent.classList.remove('hide');
    messageContent.classList.add('hide');
}

tippy(homeBtn, {
    content: 'Home',
});
tippy(workBtn, {
    content: 'Work',
});
tippy(messageBtn, {
    content: 'Contact',
});
tippy(twitterBtn, {
    content: 'Twitter',
});

function submitForm(event){
    event.preventDefault();
}