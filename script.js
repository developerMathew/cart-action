let count = 0; //set intial value for count
function addcart(button) {
    count++; //increase the count value
    document.getElementById('cart-count').textContent = count;//print the count value in cart-count idname
    // button.disabled = true;
    // button.textContent = "Added";
}