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

function PaymentMethods({ navigation }) {
    return (
        <ScrollView>
            <Text>
                Tiki ĐẢM BẢO
            </Text>
            <Text> Ví Airpay</Text>
            <Text> Thẻ tín dụng/Ghi nợ</Text>
            <Text> Thanh toán khi nhận hàng</Text>
        </ScrollView>
    );
}
export default PaymentMethods;
const style = StyleSheet.create({

})