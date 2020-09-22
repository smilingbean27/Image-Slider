
var sliderButtons = document.querySelectorAll(".slider_button");
var sliderImages = document.querySelectorAll(".slider_image");

var current = 0;
var previous = -1;

for (let i= 0; i < sliderButtons.length; i++){
    sliderButtons[i].addEventListener('click', ()=> {

        if (current !== i){
            previous = current; 
        }
        
        current = i; 
        console.log(`${i+1} Button is clicked. Current: ${current+1}, Previous: ${previous+1}`);

        sliderImages[current].classList.add("image-animation");
        sliderImages[current].style.display = "block";

        sliderImages[current].classList.remove("image-animation");
        sliderImages[previous].style.display = "none";

    });
}
 
    



//if a particular slide is clicked ---
// (a) Update current, previous variables
// (b) Move to that slide
// (c) Restart the automatic slider