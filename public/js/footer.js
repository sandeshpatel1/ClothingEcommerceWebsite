const createFooter = ()=>{
    let footer = document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
    <img src="/public/img/light-logo.png" class="logo" alt="image here">
    <div class="footer-ul">
        <ul class="catalog">
            <li class="catalog-title">Men</li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">T-Shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Jacket</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Sports</a></li>
            <li><a href="#" class="footer-link">Casual</a></li>
            <li><a href="#" class="footer-link">Formal</a></li>
        </ul>
        <ul class="catalog">
            <li class="catalog-title">Women</li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">T-Shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Jacket</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Sports</a></li>
            <li><a href="#" class="footer-link">Casual</a></li>
            <li><a href="#" class="footer-link">Formal</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore culpa? Ut
    consectetur laborum ipsam sunt incidunt! Provident, iste, consequatur expedita sequi rerum dolore illo
    minima aspernatur cumque praesentium reiciendis sint et incidunt sit.</p>
<p class="info">support email - help@clothing.com, customersupport@clothing.com</p>
<p class="info">telephone - 1800 000 001, 8668 555 520</p>
<div class="footer-social">
    <div>
        <a href="#" class="social">Terms & Services</a>
        <a href="#" class="social">Privacy page</a>
    </div>
    <div>
        <a href="#" class="social"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="social"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="social"><i class="fa-brands fa-github"></i></a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparel Store</p>`;
}
 createFooter();