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
            {/* <CheckBox
                disabled={false}
                value={checked}
                onValueChange={(newValue) => setChecked(newValue)}
            /> */}
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

function Payment({ navigation }) {
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
        <ScrollView style={{ flexDirection: 'column', }}>
            <View>
                <Text style={{ fontSize: 20, }}>
                    Địa chỉ nhận hàng
                </Text>
            </View>
            {/* <View>
                <CheckBox
                    disabled={false}
                    value={checked}
                    onValueChange={(newValue) => setChecked(newValue)}

                />
                <Text>Tất cả</Text>
            </View> */}
            {list.map((product) =>
                <ProductItem
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    priceEach={product.priceEach}
                />
            )}
            {/* <View style={{ flexDirection: 'row', }}>
                <CheckBox
                    disabled={false}
                    value={checked}
                    onValueChange={(newValue) => setChecked(newValue)}
                />
                <Image source={require('../assets/item_image_1.png')} style={{
                    width: 50,
                    height: 60,
                }} />
                <View>
                    <Text style={{ fontSize: 20, }}>Điện Thoại Chính Hãng</Text>
                    <Text style={{ fontSize: 20, }}>{price}</Text>
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
            </View> */}
            <View>
                <View>
                    <Text style={{ fontSize: 30, }}>Voucher của Shop</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, }}>Đơn vị vận chuyển</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, }}>Tổng số tiền</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={{ fontSize: 15, }}>Phương thức thanh toán</Text>
                        <Text style={{ fontSize: 15, }}>Chọn phuong thức thanh toán</Text>
                    </View>
                    <Button title="Phương thức thanh toán" onPress={() => navigation.navigate('PaymentMethods')} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, }}>Tổng tiền hàng</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, }}>Tổng phí vận chuyển</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, }}>Tổng thanh toán</Text>
                </View>
            </View>
            <View>
                <Text>Tổng thanh toán</Text>
                <Button title="Đặt hàng" onPress={() => navigation.navigate('OrderDetail')} />
            </View>
        </ScrollView>
    );
}
export default Payment;
const style = StyleSheet.create({

})