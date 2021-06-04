import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    StyleSheet,
    Button,
    Image,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({ image, name, priceEach, isChecked, handleQuantityIncrease, handleQuantityDecrease }) => {
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
                <Text style={styles.cartDetailName}>
                    {name}
                </Text>
                <Text style={{ fontSize: 20 }}>Giá: {priceEach}</Text>
                <View style={styles.wrapBtnIncrease} style={{ flexDirection: "row" }}>
                    <Button
                        style={styles.buttonPlus}
                        title="-"
                        color="#00c8c8"
                        onPress={() => {
                            if (quantity > 0) {
                                setQuantity(quantity - 1);
                                setPrice(priceEach * (quantity - 1));
                                if (checked)
                                    handleQuantityDecrease(priceEach);
                            }
                        }} />
                    <Text style={styles.quantityTotal}>{quantity}</Text>
                    <Button
                        style={styles.buttonPlus}
                        title="+"
                        color="#00c8c8"
                        onPress={() => {
                            setQuantity(quantity + 1);
                            setPrice(priceEach * (quantity + 1));
                            if (checked)
                                handleQuantityIncrease(priceEach);
                        }} />
                </View>
            </View>
        </View>
    );
};

function ShoppingCart({ navigation }) {
    const [total, setTotal] = useState(0);
    const [cartList, setCartList] = useState([]);
    const defaultUserId = '311f7484-abae-11eb-8a1f-00163e047e89';
    const [cartProductList, setCartProductList] = useState([]);

    const [products, setProducts] = useState([]);
    const [arrProduct, setArrProduct] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:44344/api/v1/Cart/' + defaultUserId)
            .then(resp => {
                setCartList(resp.data);
            });
    }, []);

    useEffect(() => {
        axios.get('http://10.0.2.2:44344/api/v1/Product').then(resp => {
            setProducts(resp.data);
        });
        for (let i = 0; i < cartList.length; i++) {
            for (let j = 0; j < products.length; j++) {
                if (cartList[i].ProductId == products[j].ProductId) {
                    arrProduct.push(products[j]);
                }
            }
        }
    }, [])

    function cartExist(productID) {
        return products.some(function (el) {
            return el.ProductID === productID;
        });
    }

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
    }



    // useEffect(() => {
    //     for (let i = 0; i < cartList.length; i++) {
    //         for (let j = 0; j < products.length; j++) {
    //             if (cartList[i].ProductId == products[j].ProductId) {
    //                 arrProduct.push(products[j]);
    //             }
    //         }
    //     }
    // }, [products])

    return (
        <View style={styles.pageContainer}>
            <ScrollView style={styles.productScroll}>
                {/* {renderCart} */}
                {cartList.map((cart, index) => {
                    {
                        return (
                            products.map((item, index) => {
                                return (
                                    <View>
                                        {item.ProductId == cart.ProductId &&
                                            <View style={styles.wrapCartItem} key={index}>
                                                <CheckBox
                                                    disabled={false}
                                                    onValueChange={(newValue) => setChecked(newValue)}
                                                />
                                                <Image
                                                    source={{
                                                        uri: item.ProductImage
                                                    }}
                                                    style={styles.cartItemImg}
                                                />
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
                                                        <Text style={styles.quantityTotal}>1</Text>
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
                                        }
                                    </View>
                                );
                            })
                        );
                    }
                })}
            </ScrollView>
            <View style={styles.pageFooter}>
                <Button
                    style={styles.btnBuy}
                    title="Mua hàng"
                    onPress={() => navigation.navigate('Payment')}
                    color="#00c8c8"
                />
                <Text style={styles.totalTxt}>Tổng tiền: {total}</Text>
            </View>
        </View>
    );
};
export default ShoppingCart;

const styles = StyleSheet.create({
    wrapCartItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 0,
        paddingLeft: 15,
        paddingVertical: 10
    },
    cartItemImg: {
        width: '25%',
        height: '100%',
        resizeMode: 'contain',
        marginRight: 10
    },
    cartItemDetail: {
        flex: 1
    },
    cartDetailName: {
        fontSize: 16
    },
    buttonPlus: {
        backgroundColor: '#E5E8EC',
        height: '100%'
    },
    pageContainer: {
        position: 'relative'
    },
    pageFooter: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
        borderTopWidth: 2,
        borderTopColor: "#E5E8EC",
        height: 40
    },
    totalTxt: {
        marginRight: 5,
        padding: 5
    },
    btnBuy: {
    },
    productScroll: {
        marginBottom: 40
    },
    wpBtnBuy: {
        backgroundColor: '#000'
    },
    quantityTotal: {
        marginHorizontal: 5
    },
    wrapBtnIncrease: {
        display: 'flex',
        alignItems: 'center',
        height: 20
    }
});
