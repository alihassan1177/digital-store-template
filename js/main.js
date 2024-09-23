$(document).ready(function () {
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });

    let productCard = (image) => `
    <div class="col-md-2 mb-4">
        <a class="product-card-link" href="#">
            <div class="shadow-sm card product-card text-center">
                <button class="btn position-absolute"
                    style="top: 0px; right: -5px; font-size: 18px;color: #F16126;">
                    <img src="./images/heart-icon.svg" alt="">
                </button>
                <div class="product-image-wrapper">
                    <img src="images/${image}" alt="iPhone 11 Pro Max">
                </div>
                <div class="card-body pb-0 px-0">
                    <p class="product-category">mobile</p>
                    <h5 class="product-title">APPLE IPHONE 11 PRO MAX 256GB, 4G LTE, GOLD</h5>
                    <div class="d-flex align-items-center gap-3">
                        <p class="price">AED <span class="current-amount">3999</span> <span
                                class="old-price">AED 4600</span></p>
                        <button class="add-to-cart-btn">
                            <img src="./images/cart-icon.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `

    let addProductsToContainer = (container, hasImages) => {

        if (hasImages) {
            for (let index = 0; index < 12; index++) {
                const images = ['product-1.png', 'product-2.png', 'product-3.png'];
                const imageIndex = index % images.length;
                const image = images[imageIndex];
                container.innerHTML += productCard(image)
            }
        } else {
            for (let index = 0; index < 12; index++) {
                const image = `acc-${index + 1}.png`
                acceContainer.innerHTML += productCard(image)
            }
        }

    }

    const mobileCollectionContainer = document.querySelector("#mobile-collections")
    const acceContainer = document.querySelector("#accessories")
    const electronicsContainer = document.querySelector("#electronics")

    addProductsToContainer(mobileCollectionContainer, true)
    addProductsToContainer(electronicsContainer, true)
    addProductsToContainer(acceContainer, false)

});
