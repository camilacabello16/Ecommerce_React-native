export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_TO_CART = 'DELETE_TO_CART';
export const CHECK_ITEM = 'CHECK_ITEM';
export const DEC_QUANTITY_ITEM = 'DES_QUANTITY_ITEM';
export const INC_QUANTITY_ITEM = 'NC_QUANTITY_ITEM';


export const addToCart = product => {
    return { type: ADD_TO_CART, product: product};
}

export const delFromCart = productId => {
    return {type: DELETE_TO_CART, productId: productId};
}

export const checkItem = productId => {
    return {type: CHECK_ITEM, productId: productId};
}

export const decQuanityItem = productId => {
    return {type: DEC_QUANTITY_ITEM, productId: productId};
}

export const incQuanityItem = productId => {
    return {type: INC_QUANTITY_ITEM, productId: productId};
}