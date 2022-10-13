const productImages = document.querySelectorAll(".product-imagess img")
const productImageSlider = document.querySelector(".image-slider")

let activeImageSlider = 0;

    productImages.forEach((item, i)=> {
        item.addEventListener('click',()=>{
            productImages[activeImageSlider].classList.remove('active');
            item.classList.add('active');
             productImageSlider.style.backgroundImage = `url('${item.src}')`;
             activeImageSlider = i;
    });
});
    

const fitBtn = document.querySelectorAll(".fit-ratio");
let Checkedbtn = 0;

fitBtn.forEach((item ,i)=>{
    item.addEventListener('click',()=>{
        fitBtn[Checkedbtn].classList.remove('check');
        item.classList.add('check');
        Checkedbtn = i;
    });
});