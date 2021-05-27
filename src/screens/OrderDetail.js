import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    StyleSheet,
    Button,
    Image,
    View,
    Text,
    ScrollView,
} from 'react-native';

function OrderDetail({ navigation }) {
    return (
        <View style={{ flexDirection: "column" }}>
            <Text> Thông tin đơn hàng</Text>
            <View>
                <Text>SL: 1</Text>
                <Text>200000</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Text> Mã giảm giá</Text>
                    <Text> Tổng giá trị sản phẩm</Text>
                    <Text> Phí giao hàng</Text>
                    <Text>Tổng thanh toán</Text>
                </View>
                <View>
                    <Text>
                    </Text>
                    <Text>200000</Text>
                    <Text>25000</Text>
                    <Text>225000</Text>
                </View>
            </View>
            <Button title="Đơn hàng mới" onPress={() => navigation.navigate('Home')} />

        </View>
    );
}
export default OrderDetail;
const style = StyleSheet.create({

})