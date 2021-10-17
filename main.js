let cart = document.querySelector(".card-img img")
let shoeCount = document.querySelector("#sho-cunt")
let countPrice = document.querySelector("#cunt-price")
let count = document.querySelector(".count")
let add = document.querySelector(".up")
let minus = document.querySelector(".down")
let addToCart = document.querySelector(".add-cart")
let cartUp = document.querySelector(".card-image")
let smallImg = document.querySelector(".small-img-wrapper")
let mainImg = document.querySelector(".main-img img")
let basePrice = document.querySelector("#base-price")
let fixedPrice = document.querySelector("#fixed-price")
let x = document.querySelector("#x")
let $ = document.querySelector("#dollar")
let delItem = document.querySelector("#del-item")
let detailWraper = document.querySelector(".detail-wrapper")
let popup = document.querySelector(".popup")
let cartCount = document.querySelector(".cart-count")
let empty = document.querySelector(".empty")
let rmvCart = document.querySelector(".rmv-cart")
let body = document.body
let num = 0;

function addShoe(){
    count.value = parseInt(count.value) + 1
}
function minusShoe() {
    if (parseInt(count.value)) {
        count.value = parseInt(count.value) - 1   
    }
}
add.addEventListener("click", addShoe)
minus.addEventListener("click", minusShoe)


smallImg.addEventListener("click", e =>{
    Array.from(smallImg.children).forEach(small => {
        let image = small.children
        Array.from(image).forEach(img => {
            let target = e.target.src
            let link = target.search("images")
            let url = target.slice(link)
            if (url == "images/image-product-1-thumbnail.jpg") {
                mainImg.src = null
                mainImg.src = "images/image-product-1.jpg"
            } else if (url == "images/image-product-2-thumbnail.jpg") {
                mainImg.src = null
                mainImg.src = "images/image-product-2.jpg"
            } else if (url == "images/image-product-3-thumbnail.jpg") {
                mainImg.src = null
                mainImg.src = "images/image-product-3.jpg"
            } else if (url == "images/image-product-4-thumbnail.jpg") {
                mainImg.src = null
                mainImg.src = "images/image-product-4.jpg"
            }
               
        })
    })
})

function changeImg(){
    if (num < 4) {
        num += 1;
        mainImg.src = `images/image-product-${num}.jpg`
    } else {
        num = 0;
    }
}

let runSlide = setInterval(changeImg, 2000)

mainImg.addEventListener("mouseover", e => clearInterval(runSlide))
mainImg.addEventListener("mouseleave", e => runSlide = setInterval(changeImg, 2000))

addToCart.addEventListener("click", e => {
    detailWraper.classList.add("show")
    shoeCount.textContent = count.value
    cartCount.textContent = count.value
    x.textContent = ""
    x.textContent = " x "
    countPrice.textContent = basePrice.textContent
    fixedPrice.textContent = parseInt(count.value) * parseFloat(basePrice.textContent.slice(1))
    $.textContent = ""
    $.textContent = "$"
    $.style.fontWeight = "700"
    fixedPrice.style.fontWeight = "700"
    cartCount.style.display = "inline-block"
    empty.classList.remove("show")
})

if (detailWraper.classList.contains("show")) {
    empty.classList.remove("show")
} else {
    empty.classList.add("show")
}

delItem.addEventListener("click", e => {
    detailWraper.classList.remove("show")
    cartCount.style.display = "none"
    empty.classList.add("show")
})
cartUp.addEventListener("click", e => {
    popup.classList.toggle("show")
})

rmvCart.addEventListener("click", e => {
    popup.classList.remove("show")
})
function rmvcartInterval() {
    popup.classList.remove("show")
}
let rmvcart = setInterval(rmvcartInterval, 6000);
popup.addEventListener("mouseover", e => clearInterval(rmvcart))
popup.addEventListener("mouseleave", e => rmvcart = setInterval(rmvcartInterval, 6000))