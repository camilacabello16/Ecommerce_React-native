class CartItem {
    constructor(imageUrl, quantity, productPrice, productTitle, sum, checked) {
        this.imageUrl = imageUrl;
        this.quantity = quantity;
        this.productPrice = productPrice;
        this.productTitle = productTitle;
        this.sum = sum;
        this.checked = checked;
    }
}

export default CartItem;