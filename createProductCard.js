export const createProductCard=(products,parentElement,findProductInCart,pageType) =>{
    for(let product of products){
        const cardContainer=document.createElement("div");
        cardContainer.classList.add("card","card-vertical","d-flex","direction-column","relative","shadow");
        
        //Image Container
        const imageContainer=document.createElement("div");
        imageContainer.classList.add("card-image-container");
    
        const image=document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src",product.img);
        image.setAttribute("alt",product.name);
        imageContainer.appendChild(image);
      
    
        //card details container
        const cardDetailsContainer=document.createElement("div");
        cardDetailsContainer.classList.add("card-details");
    
        const brandContainer=document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText=product.brand;
        cardDetailsContainer.appendChild(brandContainer);
    
        //card Description Container
    
        const descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");
    
        //product name
        const name=document.createElement("p");
        name.classList.add("card-des");
        name.innerText=product.name;
        descriptionContainer.appendChild(name);
    
        //product price
        const price=document.createElement("p");
        price.classList.add("card-price","d-flex","align-end","gap-sm");
        price.innerText=`Rs. ${product.newPrice}`
    
        const oldprice=document.createElement("span");
        oldprice.classList.add("price-strike-through");
        oldprice.innerText=`Rs. ${product.oldPrice}`
        price.appendChild(oldprice);
    
        const discount=document.createElement("span");
        discount.classList.add("discount");
        discount.innerText=`(${product.discount}% OFF)`;
        price.appendChild(discount)
        descriptionContainer.appendChild(price);
    
        //rating Container
        const ratings=document.createElement("p");
        ratings.classList.add("d-flex","align-center");
    
        const rating=document.createElement("span");
        rating.innerText=product.rating;
        ratings.appendChild(rating);
    
        const star=document.createElement("span");
        star.classList.add("material-icons","star");
        star.innerText="star";
        ratings.appendChild(star);
        descriptionContainer.appendChild(ratings);
        cardDetailsContainer.appendChild(descriptionContainer);
    
        //Call to action Button container
        const ctaButton=document.createElement("div");
        ctaButton.classList.add("cta-button");
        const cartButton=document.createElement("button");
        cartButton.classList.add("button","btn-primary","btn-icon","cart-btn","d-flex","align-center","justify-center","gap","cursor","btn-margin");
    
    
        cartButton.setAttribute("data-id",product._id);
        const cart=document.createElement("span");
        cart.classList.add("material-symbols-outlined");
        cart.innerText="shopping_cart";
        cartButton.appendChild(cart);
    
        const buttonText=document.createElement("span");
        const isproductInCart=findProductInCart(JSON.parse(localStorage.getItem("cart")),product._id);
        buttonText.innerText=pageType==="cart" ? "Remove":pageType === "products" && isproductInCart ? "Go To Cart":"Add To Cart";
        cartButton.appendChild(buttonText);
       
    
        ctaButton.appendChild(cartButton);
        cardDetailsContainer.appendChild(ctaButton);
    
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(cardDetailsContainer);
      
    
    
        parentElement.appendChild(cardContainer);
    
    
    }
}