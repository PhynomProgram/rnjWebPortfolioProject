// Portrait Breathing Animation
const portrait = document.querySelector('.heroImage');
       
portrait.addEventListener('animationend', (event) => { 
    if (event.animationName === 'portraitIntro') {
        setTimeout(function() {
            portrait.classList.add('idle');
        }, 3000);
    }
});
    