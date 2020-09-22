
var sliderButtons = document.querySelectorAll(".slider_button");
var sliderImages = document.querySelectorAll(".slider_image");

var current = -1;
var previous = -1;

for (let i= 0; i < sliderButtons.length; i++){
    sliderButtons[i].addEventListener('click', ()=> {

        if (current !== i){
            previous = current; 
        }
        
        current = i; 
        console.log(`${i+1} Button is clicked. Current: ${current+1}, Previous: ${previous+1}`);

        imageSlidingIn();
    });
}
 
function imageSlidingIn(){
    sliderImages[current].classList.add("image-animation");
    sliderImages[current].style.display = "block";
    
    if (previous > 0){
        sliderImages[previous].classList.remove("image-animation");
        sliderImages[previous].style.display = "none";
    }
    
}

function autoImageSlidingIn(){
    previous = current;
    current = (current >= sliderImages.length -1)? 0 : current+1;

    console.log(`Current: ${current+1}, Previous: ${previous+1}`);
    imageSlidingIn();
    sliderButtons[current].checked = true;
    if (previous >0) sliderButtons[previous].checked = false;
}

autoImageSlidingIn();
setInterval(autoImageSlidingIn, 5000);
    



//if a particular slide is clicked ---
// (a) Update current, previous variables
// (b) Move to that slide
// (c) Restart the automatic slider