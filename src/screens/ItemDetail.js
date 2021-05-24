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
const item_image_4 = require('../assets/item_image_4.png');
const default_avatar = require('../assets/default-avatar.jpg');


function ItemDetail({ route, navigation }) {

    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'Bui Duc Hieu',
            content: 'afasfsafsafdsgdafgfscavsfsaf'
        },
        {
            id: 2,
            name: 'Bui Duc Hieu',
            content: 'afasfsafsafdsgdafgfscavsfsaf'
        },
        {
            id: 3,
            name: 'Bui Duc Hieu',
            content: 'afasfsafsafdsgdafgfscavsfsaf'
        },
    ]);

    const renderActorComment = comments.map((comment, index) => {
        return (
            <View key={index} style={styles.wrapCommentPerson}>
                <View style={styles.personInfo}>
                    <Image style={styles.infoImg} source={default_avatar} />
                    <Text>
                        {comment.name}
                    </Text>
                </View>
                <View style={styles.wrapComment}>
                    <Text style={styles.commentContent}>{comment.content}</Text>
                </View>
            </View>
        );
    });

    const { product } = route.params;
    // const {id} = route.params
    // fetch API

    // const [product, setProduct] = useState({
    //     quantity: 1,
    //     price: 2200000,
    //     checked: false
    // });

    return (
        <View style={{ height: '100%' }}>
            <ScrollView style={styles.container}>
                <View style={styles.wrapImage}>
                    <Image
                        source={{
                            uri: product.ProductImage
                        }}
                        style={styles.productImage}
                    />
                </View>
                <View style={styles.productInfo}>
                    <View>
                        <Text style={{ fontSize: 20 }}>{product.ProductName}</Text>
                        <Text style={{
                            fontSize: 25,
                            color: "#ff4343",
                            marginVertical: 5
                        }}
                        >{product.ProductPrice}đ</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, }} >
                            {product.ProductDescription}
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 10, marginBottom: 40 }}>
                    <Text style={{
                        fontSize: 18,
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#e5e8ec'
                    }}
                    >Đánh giá sản phẩm</Text>
                    {renderActorComment}
                </View>
            </ScrollView>
            <View style={styles.wrapButton}>
                <View style={styles.buttonAddCartChat}>
                    <View style={styles.buttonChat}>
                        <FontAwesome
                            name="comments"
                            size={25}
                            color="#00C8C8"
                        />
                    </View>
                    <View style={styles.buttonCart}>
                        <FontAwesome
                            name="shopping-cart"
                            size={25}
                            color="#00C8C8"
                            onPress={() => navigation.navigate('ShoppingCart')}
                        />
                    </View>
                </View>
                <View style={styles.buttonBuy}>
                    <Button
                        style={styles.button}
                        title="ĐẶT HÀNG"
                        color="#00C8C8"
                        onPress={() => navigation.navigate('Payment', {
                            product: product
                        })}
                    />
                </View>
            </View>
        </View >
    );




}
export default ItemDetail;
const styles = StyleSheet.create({
    wrapButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        shadowColor: "#000",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttonAddCartChat: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%'
    },
    buttonBuy: {
        flex: 1,
        height: '100%'
    },
    button: {
        height: '100%'
    },
    buttonChat: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#00c8c8',
        height: '100%'
    },
    buttonCart: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    wrapImage: {
        width: '100%',
        height: 350,
        backgroundColor: '#fff'
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    personInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoImg: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 10
    },
    wrapComment: {
        marginLeft: 50
    },
    wrapCommentPerson: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e8ec',
        padding: 10
    },
    productInfo: {
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e5e8ec'
    }
})