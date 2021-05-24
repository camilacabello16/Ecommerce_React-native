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

function OrderDetail({ navigation, route }) {
    const { product, paymentPrice, numberProduct } = route.params;

    return (
        <View style={{ flexDirection: "column", paddingTop: 10, height: '100%', flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 10 }}>Thông tin đơn hàng</Text>
            <View style={{ backgroundColor: '#fff', padding: 15 }}>
                <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 16 }}>Số lượng: {numberProduct}</Text>
                    <Text style={{ fontSize: 16, marginLeft: 50 }}>Giá: {product.ProductPrice * numberProduct + paymentPrice}đ</Text>
                </View>
                <View style={{ flexDirection: "row", width: '100%', paddingTop: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 16 }}>Tổng giá trị sản phẩm</Text>
                        <Text style={{ fontSize: 16 }}>Phí giao hàng</Text>
                        <Text style={{ fontSize: 16 }}>Tổng thanh toán</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>{product.ProductPrice * numberProduct}</Text>
                        <Text style={{ fontSize: 16 }}>{paymentPrice}</Text>
                        <Text style={{ fontSize: 16, float: 'right' }}>{product.ProductPrice * numberProduct + paymentPrice}</Text>
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
export default OrderDetail;
const style = StyleSheet.create({

})