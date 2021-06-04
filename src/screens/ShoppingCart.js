import React, {useState, useEffect} from 'react';
import {createStackNavigator} from 'react-navigation';
import {
  StyleSheet,
  Button,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../redux/store/action/cart';

import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import cart from '../redux/store/reducer/cart';
import {set} from 'react-native-reanimated';

const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({
  image,
  name,
  priceEach,
  isChecked,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  const [checked, setChecked] = useState(isChecked);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <View style={styles.wrapCartItem}>
      <CheckBox
        disabled={false}
        value={checked}
        onValueChange={(newValue) => setChecked(newValue)}
      />
      <Image style={styles.cartItemImg} source={image} />
      <View style={styles.cartItemDetail}>
        <Text style={styles.cartDetailName}>{name}</Text>
        <Text style={{fontSize: 20}}>Giá: {priceEach}</Text>
        <View style={styles.wrapBtnIncrease} style={{flexDirection: 'row'}}>
          <Button
            style={styles.buttonPlus}
            title="-"
            color="#00c8c8"
            onPress={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
                setPrice(priceEach * (quantity - 1));
                if (checked) handleQuantityDecrease(priceEach);
              }
            }}
          />
          <Text style={styles.quantityTotal}>{quantity}</Text>
          <Button
            style={styles.buttonPlus}
            title="+"
            color="#00c8c8"
            onPress={() => {
              setQuantity(quantity + 1);
              setPrice(priceEach * (quantity + 1));
              if (checked) handleQuantityIncrease(priceEach);
            }}
          />
        </View>
      </View>
    </View>
  );
};

function ShoppingCart({navigation}) {
  /* const [total, setTotal] = useState(0);
    const [list, setList] = useState([
        {
            id: 0,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2152",
            isChecked: true
        },
        {
            id: 1,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2153",
            isChecked: true
        },
        {
            id: 2,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2154",
            isChecked: true
        },
        {
            id: 3,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2155",
            isChecked: true
        },
        {
            id: 4,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2156",
            isChecked: true
        },
        {
            id: 5,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2157",
            isChecked: true
        }
    ]);
    const [cartList, setCartList] = useState([]);
    const defaultUserId = '311f7484-abae-11eb-8a1f-00163e047e89';
    const [cartProductList, setCartProductList] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:44344/api/v1/Cart/' + defaultUserId)
            .then(resp => {
                setCartList(resp.data);
            });
        let cloneCart = [...cartProductList];
        for (let i = 0; i < cartList.length; i++) {
            axios.get('http://10.0.2.2:44344/api/v1/Product/' + cartList[i].ProductId)
                .then(resp => {
                    cloneCart.push(resp.data);
                });
        }
        setCartProductList(cloneCart);
    });

    const renderCart = cartProductList.map((item, index) => {
        return (
            <View style={styles.wrapCartItem} key={index}>
                <CheckBox
                    disabled={false}
                    value={checked}
                    onValueChange={(newValue) => setChecked(newValue)}
                />
                <Image style={styles.cartItemImg} source={{
                    uri: item.ProductImage
                }} />
                <View style={styles.cartItemDetail}>
                    <Text style={styles.cartDetailName}>
                        {item.ProductName}
                    </Text>
                    <Text style={{ fontSize: 20 }}>Giá: {item.ProductPrice}</Text>
                    <View style={styles.wrapBtnIncrease} style={{ flexDirection: "row" }}>
                        <Button
                            style={styles.buttonPlus}
                            title="-"
                            color="#00c8c8"
                        // onPress={() => {
                        //     if (quantity > 0) {
                        //         setQuantity(quantity - 1);
                        //         setPrice(priceEach * (quantity - 1));
                        //         if (checked)
                        //             handleQuantityDecrease(priceEach);
                        //     }
                        // }} 
                        />
                        <Text style={styles.quantityTotal}>{quantity}</Text>
                        <Button
                            style={styles.buttonPlus}
                            title="+"
                            color="#00c8c8"
                        // onPress={() => {
                        //     setQuantity(quantity + 1);
                        //     setPrice(priceEach * (quantity + 1));
                        //     if (checked)
                        //         handleQuantityIncrease(priceEach);
                        // }} 
                        />
                    </View>
                </View>
            </View>
        );
    })

    const handleQuantityIncrease = (amountChanged) => {
        setTotal(total + parseInt(amountChanged, 10));
    }

    const handleQuantityDecrease = (amountChanged) => {

        setTotal(total - parseInt(amountChanged, 10));

    } */

  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const listCart = [];
    for (const key in state.cart.items) {
      listCart.push({
        productId: key,
        productImage: state.cart.items[key].imageUrl,
        productName: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
        checked: state.cart.items[key].checked,
      });
    }
    return listCart.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });

  return (
    <View style={styles.pageContainer}>
      <View style={styles.listCart}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => {
            return (
              <View style={styles.wrapCartItem}>
                <CheckBox
                  value={itemData.item.checked}
                  onValueChange={() => {}}
                  style={styles.checkbox}
                  onChange={() => {
                    dispatch(cartActions.checkItem(itemData.item.productId));
                  }}
                />
                <Image
                  style={styles.cartItemImg}
                  source={{uri: itemData.item.productImage}}
                />
                <View style={styles.wrapText}>
                  <Text style={styles.cartDetailName} numberOfLines={2}>
                    {itemData.item.productName}
                  </Text>

                  <Text style={styles.cartItemPrice}>
                    {itemData.item.productPrice} VND
                  </Text>
                  <View style={styles.cartItemQuantity}>
                    <View style={styles.quantityContain}>
                      <Button
                        style={styles.buttonMinus}
                        title="-"
                        color="#FFFFFF"
                        onPress={() => {
                          dispatch(
                            cartActions.decQuanityItem(itemData.item.productId),
                          );
                        }}
                      />
                      <Text style={styles.quantityText}>
                        {itemData.item.quantity}
                      </Text>
                      <Button
                        style={styles.buttonPlus}
                        title="+"
                        color="#FFFFFF"
                        onPress={() => {
                          dispatch(
                            cartActions.incQuanityItem(itemData.item.productId),
                          );
                        }}
                      />
                    </View>
                    <View style={styles.delContain}>
                      <Button
                        style={styles.delButton}
                        title="XÓA"
                        color="#00c8c8"
                        onPress={() => {
                          dispatch(
                            cartActions.delFromCart(itemData.item.productId),
                          );
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.pageFooterElement}>
          <Button
            style={styles.btnBuy}
            title="Mua hàng"
            onPress={() => navigation.navigate('Payment')}
            color="#00c8c8"
          />
          <Text style={styles.totalTxt}>Tổng tiền: {total} VND</Text>
        </View>
      </View>
    </View>
  );
}
export default ShoppingCart;

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderTopColor: '#E5E8EC',
  },
  listCart: {
    height: '90%',
  },
  wrapCartItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 5,
    height: '25%',
    borderBottomWidth: 2,
    borderBottomColor: '#E5E8EC',
  },
  cartItemImg: {
    width: '25%',
    resizeMode: 'contain',
    marginRight: 10,
    backgroundColor: 'red',
  },
  wrapText: {
    position: 'relative',
    display: 'flex',
    margin: 5,
    fontSize: 20,
  },
  cartDetailName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#FF0000',
  },
  cartItemQuantity: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E8EC',
  },
  quantityContain: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    borderColor: '#E5E8EC',
  },
  quantityText: {
    fontSize: 16,
  },
  buttonPlus: {},
  buttonMinus: {},
  delContain: {
    flex: 1,
  },
  delButton: {
  },

  pageFooter: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 2,
    borderTopColor: '#E5E8EC',
    height: '10%',
    marginTop: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  pageFooterElement: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginVertical: 10,
  },
  totalTxt: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00c8c8',
    position: 'absolute',
    right: 0,
  },
  btnBuy: {
    position: 'absolute',
    left: 0,
    marginLeft: 10,
  },
  productScroll: {
    marginBottom: 40,
  },
  wpBtnBuy: {
    backgroundColor: '#000',
  },
});
