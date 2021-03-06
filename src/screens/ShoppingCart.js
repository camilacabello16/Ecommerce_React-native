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
                    <Button style={styles.buttonPlus} title="-" onPress={() => {
                        if (quantity > 0) {
                            setQuantity(quantity - 1);
                            setPrice(priceEach * (quantity - 1));
                            if (checked)
                                handleQuantityDecrease(priceEach);
                        }
                    }} />
                    <Text style={styles.quantityTotal}>{quantity}</Text>
                    <Button style={styles.buttonPlus} title="+" onPress={() => {
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
    const [checkedAll, setCheckedAll] = useState(false);
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

    const handleQuantityIncrease = (amountChanged) => {
        setTotal(total + parseInt(amountChanged, 10));
    }

    const handleQuantityDecrease = (amountChanged) => {
        setTotal(total - parseInt(amountChanged, 10));
    }

    const handleCheckboxChange = (value) => {
        setCheckedAll(value);
    }

    return (
        <View style={styles.pageContainer}>
            <ScrollView style={styles.productScroll}>
                {list.map((product) =>
                    <ProductItem
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        priceEach={product.priceEach}
                        isChecked={product.isChecked}
                        handleQuantityDecrease={handleQuantityDecrease}
                        handleQuantityIncrease={handleQuantityIncrease}
                    />
                )}
            </ScrollView>
            <View style={styles.pageFooter}>
                <Button style={styles.btnBuy} title="Mua hàng" onPress={() => navigation.navigate('Payment')} />
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
        paddingLeft: 15
    },
    cartItemImg: {
        width: '25%',
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
        height: 20
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
    }
});
