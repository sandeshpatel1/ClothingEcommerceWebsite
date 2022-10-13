const createNav = ()=>{
     let nav = document.querySelector('.navbar');

     nav.innerHTML=`
         <div class="nav">
           <img src="/public/img/dark-logo.png" class="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="search" class="search-box" placeholder="search brands, products">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><i class="fa-solid fa-heart"></i></a>
                <a href="#"><img src="/public/img/cart.png"></a>
                <a href="#"><img src="/public/img/user.png"></a>
            </div>
        </div>
        <ul class="links-cointainer">
            <li ><a href="/public/index.html" class="links">Home</a></li>
            <li ><a href="#" class="links">Men</a></li>
            <li ><a href="#" class="links">Kids</a></li>
            <li ><a href="#" class="links">Women</a></li>
            <li ><a href="#" class="links">Accessories</a></li>
        </ul>
     `;
}
createNav();

