import {
  ADD_TO_CART,
  DELETE_TO_CART,
  CHECK_ITEM,
  DEC_QUANTITY_ITEM,
  INC_QUANTITY_ITEM,
  checkItem,
} from '../action/cart';
import CartItem from '../../cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = parseInt(addedProduct.ProductPrice);
      const prodTitle = addedProduct.ProductName;
      const image = addedProduct.ProductImage;
      const checked = true;

      let updateOrNewCartItem;

      if (state.items[addedProduct.ProductId]) {
        // already have the item in the cart
        updateOrNewCartItem = new CartItem(
          image,
          state.items[addedProduct.ProductId].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.ProductId].sum + prodPrice,
          checked,
        );
        if (state.items[addedProduct.ProductId].checked) {
          return {
            ...state,
            items: {
              ...state.items,
              [addedProduct.ProductId]: updateOrNewCartItem,
            },
            totalAmount: state.totalAmount + prodPrice,
          };
        } else {
          return {
            ...state,
            items: {
              ...state.items,
              [addedProduct.ProductId]: updateOrNewCartItem,
            },
            totalAmount: state.totalAmount + updateOrNewCartItem.sum,
          };
        }
      } else {
        updateOrNewCartItem = new CartItem(
          image,
          1,
          prodPrice,
          prodTitle,
          prodPrice,
          checked,
        );
        return {
          ...state,
          items: {
            ...state.items,
            [addedProduct.ProductId]: updateOrNewCartItem,
          },
          totalAmount: state.totalAmount + prodPrice,
        };
      };
    case DELETE_TO_CART:
      const delItem = state.items[action.productId];
      const updateListCart = {...state.items};
      
      delete updateListCart[action.productId];
      if (delItem.checked) {
        return {
          ...state,
          items: updateListCart,
          totalAmount: state.totalAmount - delItem.sum,
        }
      } else {
        return {
          ...state,
          items: updateListCart,
          totalAmount: state.totalAmount,
        }
      };

    case CHECK_ITEM:
      const selectedItem = state.items[action.productId];
      const check = !selectedItem.checked;
      const price = selectedItem.productPrice;
      const quantity = selectedItem.quantity;
      const updateItem = new CartItem(
        selectedItem.imageUrl,
        quantity,
        price,
        selectedItem.productTitle,
        selectedItem.sum,
        check,
      );
      if (!check) {
        return {
          ...state,
          items: {...state.items, [action.productId]: updateItem},
          totalAmount: state.totalAmount - quantity * price,
        };
      } else {
        return {
          ...state,
          items: {...state.items, [action.productId]: updateItem},
          totalAmount: state.totalAmount + quantity * price,
        };
      }
    case DEC_QUANTITY_ITEM:
      const selectedItemDec = state.items[action.productId];

      let updateItemDec;

      if (selectedItemDec.quantity > 1) {
        updateItemDec = new CartItem(
          selectedItemDec.imageUrl,
          selectedItemDec.quantity - 1,
          selectedItemDec.productPrice,
          selectedItemDec.productTitle,
          selectedItemDec.sum - selectedItemDec.productPrice,
          selectedItemDec.checked,
        );
        if (selectedItemDec.checked) {
          return {
            ...state,
            items: {...state.items, [action.productId]: updateItemDec},
            totalAmount:
              state.totalAmount - parseInt(selectedItemDec.productPrice),
          };
        } else {
          return {
            ...state,
            items: {...state.items, [action.productId]: updateItemDec},
            totalAmount: state.totalAmount,
          };
        }
      } else {
        return {
          ...state,
          items: {...state.items, [action.productId]: selectedItemDec},
          totalAmount: state.totalAmount,
        };
      }

    case INC_QUANTITY_ITEM:
      const selectedItemInc = state.items[action.productId];

      const updateItemInc = new CartItem(
        selectedItemInc.imageUrl,
        selectedItemInc.quantity + 1,
        selectedItemInc.productPrice,
        selectedItemInc.productTitle,
        selectedItemInc.sum + selectedItemInc.productPrice,
        selectedItemInc.checked,
      );
      if (selectedItemInc.checked) {
        return {
          ...state,
          items: {...state.items, [action.productId]: updateItemInc},
          totalAmount:
            state.totalAmount + parseInt(selectedItemInc.productPrice),
        };
      } else {
        return {
          ...state,
          items: {...state.items, [action.productId]: updateItemInc},
          totalAmount: state.totalAmount,
        };
      }
  }
  return state;
};
