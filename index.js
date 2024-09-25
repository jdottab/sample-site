//toggle cart
const toggle = document.getElementById('toggle');
const cart_container = document.getElementById('cart-container');
const cart_items = document.getElementById('cart-items');
const cart = document.getElementById('cart');

toggle.addEventListener('click', function(){
    if(cart_container.style.display != 'block'){
        cart_container.style.display = 'block';
        cart.style.height = '100%'
    }
    else{
        cart_container.style.display = 'none';
        cart.style.height = '0';
    }
})

let shoppinglist = []; //start with empty array

//create shopping list object
//function to populate shopping list

function AddToCart(){
    shoppinglist[shoppinglist.length - 1]
}
//function to display populated shopping list on page load

//hard-coded inventory
const inventory = [
    {product1: {name: 'Avocado Pain Relief', id: 0, price: 3.50, img: './assets/avo_shop.png', category: 'sprays_and_oils', learn_more: './learnmore/avoseed.html'}},
    {product7: {name: 'Avocado Tea', id: 2, price: 2.99, img: './assets/WhatsApp Image 2024-09-19 at 1.17.04 PM.jpeg', category: 'powder_teas', learn_more: './learnmore/avoseed.html'}},
    {product2: {name: 'Bitter Kola', id: 1, price: 5.99, img: './assets/kola_shop.png', category: 'sprays_and_oils', learn_more: './learnmore/avoseed.html'}},
    {product3: {name: 'Organic Karela Juice', id: 2, price: 2.19, img: './assets/okarela_juice.png', category: 'sprays_and_oils', learn_more: './learnmore/avoseed.html'}},
    {product4: {name: 'Dandelion Tea', id: 0, price: 5.25, img: './assets/dandelion_tea.png', category: 'juices', learn_more: './learnmore/avoseed.html'}},
    {product5: {name: 'Watermelon Juice', id: 1, price: 4.50, img: './assets/watermelon_juice.png', category: 'juices', learn_more: './learnmore/avoseed.html'}},
    {product6: {name: 'Beet Root Juice', id: 2, price: 5.55, img: './assets/beet_root_juice.png', category: 'juices', learn_more: './learnmore/avoseed.html'}}
]

const product_container = document.querySelector('.product-items')
//function to populate product area: parameter(string)
let item
let totalCart = 0.00
let cartTotal = document.querySelector('.total')
function ListProducts(cat){
    if(cat == null){
        //list all items
        inventory.forEach(e =>{
            item = JSON.stringify(Object.values(e))
            item = JSON.parse(item)

            //new product container class: product-gi flex-item flex-column
            ///product image class: item-img
            ////product img
            ///product info class: item-info
            ////product name class: name
            ////price class: price
            ////add to cart: class addtocart
            let new_product = Object.assign(document.createElement('div'), { className: 'product-gi flex-item flex-column'});
            let item_img = Object.assign(document.createElement('div'), { className: 'item-img' });
            let img = document.createElement('img');
            let product_info = Object.assign(document.createElement('div'), { className: 'item-info' });
            let product_name = Object.assign(document.createElement('h5'), { className: 'name' });
            let product_price = Object.assign(document.createElement('h5'), { className: 'price' });
            let addtocart = Object.assign(document.createElement('button'), { className: 'addtocart' });
            let moreinfo = Object.assign(document.createElement('a'), { className: 'moreinfo' });
            
            img.src = item[0].img;
            product_name.textContent = item[0].name;
            product_price.textContent = '$' + item[0].price;
            addtocart.textContent = 'Add to Cart';
            addtocart.addEventListener('click', function(){
                /* let temp_obj = {
                    name: e.parentNode.children[0].textContent,
                    price: e.parentNode.children[1].textContent,
                    img: e.parentNode.parentNode.firstChild.firstChild.getAttribute('src')
                }
                shoppinglist.push(temp_obj);  */
                //let push_item = document.createElement('div');
                let push_item = Object.assign(document.createElement('div'), { className: 'addtocart cart-item flex-item' })
                let this_name = this.parentNode.children[0].cloneNode(true);
                let this_price = this.parentNode.children[1].cloneNode(true);
                let rmv_from_cart = Object.assign(document.createElement('button'), { className: 'removefromcart', textContent: 'Remove' })
                rmv_from_cart.addEventListener('click', function(){
                    //delete price from total
                    totalCart -= parseFloat(this.parentNode.children[1].textContent.substring(1));
                    cartTotal.textContent = totalCart.toFixed(2);
                    //remove from array list
                    //remove event listener
                    //e.removeEventListener()
                    //delete from cart
                    this.parentNode.remove()
                })
                totalCart += parseFloat(this_price.textContent.substring(1));
                //console.log(this_price.textContent)
                cartTotal.textContent = totalCart.toFixed(2);
                push_item.appendChild(this_name)
                push_item.appendChild(this_price)
                push_item.appendChild(rmv_from_cart);
                shoppinglist.push(push_item);
                cart_items.appendChild(push_item);
            })
            moreinfo.textContent = 'More Info';
            moreinfo.setAttribute('href', item[0].learn_more)

            item_img.appendChild(img);
            product_info.appendChild(product_name);
            product_info.appendChild(product_price);
            product_info.appendChild(addtocart);
            product_info.appendChild(moreinfo);

            new_product.appendChild(item_img);
            new_product.appendChild(product_info);

            product_container.appendChild(new_product);

        })
    }
    else if(cat == 'item1'){
        //list item 1
    }
}
//if parameter is empty show all items
//else show item based on category