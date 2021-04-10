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

const ProductItem = ({ image, name, priceEach }) => {

    const [checked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(priceEach);
    const Price = priceEach;
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
            <Text style={{ fontSize: 20 }}>{Price}</Text>
            <View style={{ flexDirection: "row" }}>
                <Button title="-" onPress={() => {
                    if (quantity > 0) {
                        setQuantity(quantity - 1);
                        setPrice(Price * (quantity - 1));
                    }
                }} />
                <Text>{quantity}</Text>
                <Button title="+" onPress={() => {
                    setQuantity(quantity + 1);
                    setPrice(Price * (quantity + 1));
                }} />
            </View>
        </View>
    );
};

function ShoppingCart({ navigation }) {
    const [total, setTotal] = useState(0);
    const [checked, setChecked] = useState(false);
    const [list, setList] = useState([
        {
            id: 0,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2152"
        },
        {
            id: 1,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2153"
        },
        {
            id: 2,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2154"
        },
        {
            id: 3,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2155"
        },
        {
            id: 4,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2156"
        },
        {
            id: 5,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2157"
        }
    ]);


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
                    value={checked}
                    onValueChange={(newValue) => setChecked(newValue)}

                />
                <Text>Tất cả</Text>

            </View>
            {list.map((product) =>
                <ProductItem
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    priceEach={product.priceEach}
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
