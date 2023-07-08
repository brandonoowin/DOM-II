import './less/index.less'

// Your code goes here!
const changeDestButtonColor = document.querySelectorAll('.destination .btn');
changeDestButtonColor.forEach((button) => {
    button.addEventListener('click', event => {
        event.target.style.backgroundColor = 'seagreen'
    })
})

const header = document.querySelector('header'); 
header.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'seagreen';
    event.stopPropagation();
})

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('click', event => {
    event.target.style.fontSize = '50px';
})
funBus.addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
})


const navBar = document.querySelectorAll('.nav-link'); 
navBar.forEach((link) => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = 'blue'
    })
})

const footer = document.querySelector('.footer')
footer.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'seagreen';
})

const footerText = document.querySelector('.footer p')

function escKey(event) {
    if (event.key === 'Escape') {
        footerText.textContent = "JK NO MORE";
        footerText.style.color = 'blue'
    }
}

document.addEventListener('keydown', escKey);


function zoom(event) {
    event.preventDefault();
    const scaleFactor = 0.01;
    const minScale = 0.125;
    const maxScale = 4;
    scale = Math.min(Math.max(scale + event.deltaY * -scaleFactor, minScale), maxScale);
    event.target.style.transform = `scale(${scale})`;
  }
  
  
  let scale = 0;
  const theTargetImg = document.querySelectorAll("img");
  theTargetImg.forEach((image) => {
    image.addEventListener('wheel', zoom)
  })


const containerText = document.querySelectorAll('p');
containerText.forEach((textBlock) => {
    textBlock.classList.add('disappear')
    textBlock.addEventListener('click', event => {
        event.target.textContent = "SURPRISE, you made the text disappear";
    })
})


let contentSection = document.querySelector('.content-section');
contentSection.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'pink';
})

let introSection = document.querySelector('.intro');
introSection.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'silver';
})

let adventureSection = document.querySelector('.content-section.inverse-content');
adventureSection.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'red';
})

let destinationSection = document.querySelector('.content-destination');
destinationSection.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'green';
})

let wholePage = document.querySelector('body');
wholePage.addEventListener('click', event => {
    event.target.style.backgroundColor = 'orange';
})