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

const item_image_4 = require('../assets/item_image_4.png');

function Payment({ navigation }) {
    const [checked, setChecked] = useState(false);
    const [list, setList] = useState([
        {
            id: 0,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2152",
            description: 'Điện thoại giá tốt'
        },
        {
            id: 1,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2153",
            description: 'Điện thoại giá tốt'
        },
        {
            id: 2,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2154",
            description: 'Điện thoại giá tốt'
        },
        {
            id: 3,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2155",
            description: 'Điện thoại giá tốt'
        },
        {
            id: 4,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2156",
            description: 'Điện thoại giá tốt'
        },
        {
            id: 5,
            image: item_image_4,
            name: "Điện Thoại Chính Hãng",
            priceEach: "2157",
            description: 'Điện thoại giá tốt'
        }
    ]);

    const listItem = list.map((item, index) => {
        return (
            <View key={index} style={styles.wrapListItem}>
                <View style={styles.wrapListImage}>
                    <Image style={styles.itemImage} source={item.image}></Image>
                </View>
                <View style={styles.wrapListItemText}>
                    <Text style={styles.wrapListItemName}>{item.name}</Text >
                    <Text style={styles.wrapListItemDescription}>{item.description}</Text>
                    <Text style={styles.wrapListItemPrice}>{item.priceEach}đ</Text>
                </View>
            </View>
        );
    });

    return (
        <ScrollView style={{ height: '100%', position: 'relative' }}>
            <View style={{ height: '100%', position: 'relative' }}>
                <View style={styles.address}>
                    <Text style={{ fontSize: 18, marginBottom: 5 }}>
                        Địa chỉ nhận hàng
                </Text>
                    <View style={styles.recipientInfo}>
                        <Text style={styles.recipientName}>Bùi Đức Hiếu | 0963042088</Text>
                        <Text style={styles.recipientAddress}>Hiệp Hòa - Trực Ninh - Nam Định - Bắc Giang - Hà Nội - Đan Phượng</Text>
                    </View>
                </View>
                <View>
                    {listItem}
                </View>
                <View style={styles.wrapSelectTransport} >
                    <View style={styles.selectTransportTitle}>
                        <Text onPress={() => navigation.navigate('TransportMethod')} onPress={() => navigation.navigate('TransportMethod')} style={{ fontSize: 18, color: '#31D074' }}>Đơn vị vận chuyển (Nhấn để chọn)</Text>
                    </View>
                    <View style={styles.selectChosen}>
                        <View style={styles.transportName}>
                            <Text style={styles.transportTxt}>Vận chuyển nhanh</Text>
                            <Text style={styles.transportTime}>Nhận hàng vào 18 Th04 - 21 Th04</Text>
                        </View>
                        <View style={styles.transportPrice}>
                            <Text style={styles.priceTxt}>30000đ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapSelectPayMethod}>
                    <View style={styles.payMethodButton}>
                        <Text
                            onPress={() => navigation.navigate('TransportMethod')}
                            onPress={() => navigation.navigate('TransportMethod')}
                            style={{
                                fontSize: 18,
                                color: '#31D074',
                                width: '70%'
                            }}
                            onPress={() => navigation.navigate('PaymentMethods')}
                        >Phương thức thanh toán</Text>
                        <Text style={{
                            flex: 1,
                            textAlign: 'right'
                        }}>Thanh toán khi nhận hàng</Text>
                    </View>
                    <View style={styles.totalPay}>
                        <Text>Tổng tiền hàng</Text>
                        <Text>20000đ</Text>
                    </View>
                    <View style={styles.totalPay}>
                        <Text>Tổng tiền phí vận chuyển</Text>
                        <Text>20000đ</Text>
                    </View>
                    <View style={styles.totalPay}>
                        <Text style={styles.totalPayTxt}>Tổng thanh toán</Text>
                        <Text style={styles.totalPayPrice}>40000đ</Text>
                    </View>
                </View>
                <View style={styles.wrapTotal}>
                    <View style={styles.wpBtnOrder}>
                        <Button
                            style={styles.btnOrder}
                            title="Đặt hàng"
                            onPress={() => navigation.navigate('OrderDetail')}
                            color="#00c8c8"
                        />
                    </View>
                    <View style={styles.totalPrice}>
                        <Text style={styles.totalPriceTitle}>Tổng thanh toán</Text>
                        <Text style={styles.totalPriceMoney}>222222đ</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default Payment;
const styles = StyleSheet.create({
    totalPrice: {
        display: 'flex',
        alignItems: 'stretch'
    },
    wpBtnOrder: {
        width: '40%',
        marginLeft: 10,
    },
    totalPriceMoney: {
        fontSize: 16,
        color: '#FF4343',
        textAlign: 'right'
    },
    totalPayPrice: {
        color: '#FF4343',
        fontSize: 16
    },
    totalPayTxt: {
        fontSize: 16,
        fontWeight: '800'
    },
    payMethodButton: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapSelectPayMethod: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        marginBottom: 40
    },
    totalPay: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    address: {
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 10
    },
    wrapListItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 16,
    },
    wrapListImage: {
        width: '20%',
    },
    itemImage: {
        width: '100%',
        height: 90,
        resizeMode: 'contain'
    },
    wrapListItemText: {
        marginLeft: 16
    },
    wrapListItemName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    wrapListItemDescription: {
        marginVertical: 5
    },
    wrapListItemPrice: {
        fontSize: 16
    },
    wrapTotal: {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 20,

        borderTopWidth: 1,
        borderTopColor: '#E5E8EC',
        paddingTop: 5
    },
    wrapSelectTransport: {
        backgroundColor: '#EEFBFB',
        borderTopWidth: 1,
        borderTopColor: '#00C8C8',
        borderBottomWidth: 1,
        borderBottomColor: '#00C8C8',
        padding: 10,
        marginTop: 10
    },
    selectTransportTitle: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f3f5',
        marginBottom: 5,
        paddingBottom: 5
    },
    transportTxt: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    selectChosen: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceTxt: {
        fontSize: 16
    }
})