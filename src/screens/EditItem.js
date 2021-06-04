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

import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ItemDetail({ navigation }) {

    const [checked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(2200000);
    const Price = 2200000;


    return (
        <ScrollView>
            <ScrollView>
                <Button title="XÓA" onPress={() => navigation.navigate('ShopItem')} />
                <View style={{}}>
                    {/* <CheckBox
                    disabled={false}
                    value={checked}
                    onValueChange={(newValue) => setChecked(newValue)}
                /> */}

                    <Image source={require('../assets/item_image_1.png')} style={{
                        width: 400,
                        height: 400,
                    }} />
                    <View style={{ direction: "rtl", fontSize: 20 }}>
                        <Text style={{ fontSize: 35 }}>Điện Thoại Chính Hãng</Text>
                        <Text style={{ fontSize: 35, color: "red" }}>{price}</Text>
                        {/* <Text>Số lượng</Text> */}
                        {/* <View style={{ flexDirection: "row" }}>
                        <Button
                            title="-"
                            onPress={() => {
                                if (quantity > 0) {
                                    setQuantity(quantity - 1);
                                    setPrice(Price * (quantity - 1));
                                }

                            }} />
                        <Text>{quantity}</Text>
                        <Button
                            title="+"
                            onPress={() => {
                                setQuantity(quantity + 1);
                                setPrice(Price * (quantity + 1));

                            }}

                        />
                    </View > */}
                    </View>
                </View>

                {/* <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="shopping-cart" size={50} color="#969696" onPress={() => navigation.navigate('ShoppingCart')} />
                    <Text> Tran Thanh Hai</Text>
                    <Button title="Xem Shop" onPress={() => navigation.navigate('ShopItem')} />
                </View> */}
                <View>
                    <Text style={{ fontSize: 15, }} >
                        Màn hình: IPS LCD, 6.5", HD+
                        Hệ điều hành: Android 10
                        Camera sau: Chính 13 MP & Phụ 2 MP
                        Camera trước: 5 MP
                        CPU: MediaTek Helio G35 8 nhân
                        RAM: 2 GB
                        Bộ nhớ trong: 32 GB
                        Thẻ nhớ: MicroSD, hỗ trợ tối đa 256 GB
                        Thẻ SIM:
                        2 Nano SIM, Hỗ trợ 4G
                        Dung lượng pin: 5000 mAh
                    </Text>
                </View>
            </ScrollView>
            <View >
                {/* <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="comments" size={50} color="#969696" />
                    <FontAwesome name="shopping-cart" size={50} color="#969696" onPress={() => navigation.navigate('ShoppingCart')} />
                </View> */}
                <Button title="LƯU" onPress={() => navigation.navigate('ShopItem')} />
            </View>
        </ScrollView >
    );




}
export default ItemDetail;
const style = StyleSheet.create({

})