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

function OrderDetailCart({ navigation, route }) {
    const { cartItems, total, paymentPrice, productPayment } = route.params;

    const renderCartItem = cartItems.map((item, index) => {
        return (
            <View key={index} style={{ flexDirection: 'column', paddingBottom: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                <View>
                    <Text style={{ width: '100%' }}>{item.productName}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ fontSize: 16 }}>Số lượng: {item.quantity}</Text>
                    <Text style={{ fontSize: 16, marginLeft: 50 }}>Giá: {item.productPrice}đ</Text>
                </View>
            </View>
        );
    })

    return (
        <View style={{ flexDirection: "column", paddingTop: 10, height: '100%', flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 10 }}>Đặt hàng thành công</Text>
            <View style={{ backgroundColor: '#fff', padding: 15 }}>
                {/* <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 16 }}>Số lượng: {numberProduct}</Text>
                    <Text style={{ fontSize: 16, marginLeft: 50 }}>Giá: {product.ProductPrice * numberProduct + paymentPrice}đ</Text>
                </View> */}
                {renderCartItem}
                <View style={{ flexDirection: "row", width: '100%', paddingTop: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 16 }}>Tổng giá trị sản phẩm</Text>
                        <Text style={{ fontSize: 16 }}>Phí giao hàng</Text>
                        <Text style={{ fontSize: 16 }}>Tổng thanh toán</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>{productPayment}</Text>
                        <Text style={{ fontSize: 16 }}>{paymentPrice}</Text>
                        <Text style={{ fontSize: 16, float: 'right' }}>{total}</Text>
                    </View>
                </View>
            </View>
            <Button
                title="Đơn hàng mới"
                color="#00c8c8"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                onPress={() => navigation.navigate('Home')}
            />

        </View>
    );
}
export default OrderDetailCart;
const style = StyleSheet.create({

})