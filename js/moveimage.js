// Portrait Breathing Animation
//----------------------------------------------------
/*
This snippet targets the initial (intro) animation of 
the .heroImage class image and upon completion, adds
a class of 'idle', which falls into a CSS rule that
causes the image to scale up and down repeatedly.
A timeout delays the class for 3 seconds, giving the
transitioned image time to relax before the breathing 
effect is applied.
*/
const portrait = document.querySelector('.heroImage');
       
portrait.addEventListener('animationend', (event) => { 
    if (event.animationName === 'portraitIntro') {
        setTimeout(function() {
            portrait.classList.add('idle');
        }, 3000);
    }
});
    