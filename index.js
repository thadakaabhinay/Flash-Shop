import { products } from "./database/products.js";
import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";
let productContainer=document.getElementById("products");
let cart=JSON.parse(localStorage.getItem("cart")) || [];
const filterContainer=document.querySelector(".side-bar")


// for(let product of products){
// }
productContainer.addEventListener("click",(event)=>
{
    const isproductIncart=findProductInCart(cart,event.target.dataset.id);
    if(!isproductIncart){
        const productToAddCart=products.filter(({_id}) =>
        _id === event.target.dataset.id);
        cart=[...cart,...productToAddCart]
        localStorage.setItem("cart",JSON.stringify(cart));
        const cartButton=event.target;
        cartButton.innerHTML="Go To Cart <span class='material-icons-outlined'>shopping_cart</span>";

    }else{
        location.href="./cart.html";
    }
   
    
});

filterContainer.addEventListener("click",(event)=>{
   
    const updatedProducts=products.filter(({rating})=>
        rating >=Number(event.target.dataset.rating));
    productContainer.innerHTML=""
    createProductCard(updatedProducts.length>0?updatedProducts:products ,productContainer,findProductInCart,"products");
   
})

createProductCard(products,productContainer,findProductInCart,"products");
