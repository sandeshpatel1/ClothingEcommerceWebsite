const productCointainer = [...document.querySelectorAll('.product-cointainer')];
const nxtbtn = [...document.querySelectorAll('.nxt-btn')];
const prebtn = [...document.querySelectorAll('.pre-btn')];

productCointainer.forEach((item,i)=>{
    let cointainerDimensionts = item.getBoundingClientRect();
    let cointainerWidth = cointainerDimensionts.width;

    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft += cointainerWidth;
    });

    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft -= cointainerWidth;
    })
})