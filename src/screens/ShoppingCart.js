import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    StyleSheet,
    Button,
    Image,
    View,
    Text,
    ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({ image, name, priceEach, isChecked, handleQuantityIncrease, handleQuantityDecrease }) => {

    const [checked, setChecked] = useState(isChecked);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    return (
        <View style={{ flexDirection: "row" }} >
            <CheckBox
                disabled={false}
                value={checked}
                onValueChange={(newValue) => setChecked(newValue)}
            />
            <Image source={image} style={{
                width: 50,
                height: 60,
            }} />
            <Text>
                {name}
            </Text>
            <Text style={{ fontSize: 20 }}>{priceEach}</Text>
            <View style={{ flexDirection: "row" }}>
                <Button title="-" onPress={() => {
                    if (quantity > 0) {
                        setQuantity(quantity - 1);
                        setPrice(priceEach * (quantity - 1));
                        if (checked)
                            handleQuantityDecrease(priceEach);
                    }
                }} />
                <Text>{quantity}</Text>
                <Button title="+" onPress={() => {
                    setQuantity(quantity + 1);
                    setPrice(priceEach * (quantity + 1));
                    if (checked)
                        handleQuantityIncrease(priceEach);
                }} />
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
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Image source={require('../assets/mascot2x.png')} style={{
        //         width: 100,
        //         height: 120
        //     }} />
        //     <Text>Không có sản phẩm nào trong giỏ hàng của bạn.</Text>
        //     <Button title="Tiếp tục mua sắm" onPress={() => navigation.navigate('Home')} />
        // </View>
        <View>
            <View>
                <CheckBox
                    disabled={false}
                    value={checkedAll}
                    onValueChange={handleCheckboxChange}

                />
                <Text>Tất cả</Text>

            </View>
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
            {/* {list.map((product) =>
                setTotal(total + product.price)
            )} */}
            <View>
                <Text>Tổng thanh toán</Text>
                <Text>
                    {total}
                </Text>
                <Button title="Đặt hàng" onPress={() => navigation.navigate('Payment')} />
            </View>
        </View>
    );
};
export default ShoppingCart;

const style = StyleSheet.create({

})
