import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const section_banner = require('../assets/section_banner.png');
const item_image_1 = require('../assets/item_image_1.png');
const item_image_2 = require('../assets/item_image_2.png');
const item_image_3 = require('../assets/item_image_3.png');
const item_image_4 = require('../assets/item_image_4.png');

//const ProductItem = ({ image, name, price, navigation }) => (
// <View style={styles.itemContainer} >
//   <TouchableOpacity onPress={() => navigation.navigate('ItemDetail')}>
//     <Image source={image} style={styles.itemImage} />
//     <Text style={styles.itemName} numberOfLines={2} >
//       {name}
//     </Text>
//     <Text style={styles.itemPrice}>{price}</Text>
//   </TouchableOpacity>
// </View>
//);

const HomeSectionComponent = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState();
    const [categoryActive, setCategoryActive] = useState();
    const [isSelectAll, setIsSelectAll] = useState(1);

    const ProductItem = ({ image, name, price, navigation }) => (
        <View style={styles.itemContainer} >
            <TouchableOpacity >
                <Image source={image} style={styles.itemImage} onPress={() => navigation.navigate('ItemDetail')} />
                <Text style={styles.itemName} numberOfLines={2} >
                    {name}
                </Text>
                <Text style={styles.itemPrice}>{price}</Text>
            </TouchableOpacity>
        </View>
    );

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:44344/api/v1/Product')
            .then(function (response) {
                setProducts(response.data)
            })
            .catch(function (error) {
                // handle error
                //alert(error.message);
            })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem("USER").then((value) => {
            setUserInfo(JSON.parse(value));
        });
    }, []);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:44344/api/v1/Category')
            .then(function (response) {
                setCategories(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
    }, []);

    const renderProduct = products.map((product, index) => {
        return (
            <View style={styles.itemContainer} key={index} >
                <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', {
                    product: product
                })}>
                    <Image source={{
                        uri: product.ProductImage
                    }} style={styles.itemImage} />
                    <Text style={styles.itemName} numberOfLines={2} >
                        {product.ProductName}
                    </Text>
                    <Text style={styles.itemPrice}>{product.ProductPrice}</Text>
                </TouchableOpacity>
            </View>
        );
    });

    const handleChooseCategory = (categoryId) => {
        setCategoryActive(categoryId - 1);
        setIsSelectAll(0);
        axios.get('http://10.0.2.2:44344/api/v1/Product/category/' + categoryId)
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
    }

    function handleSelectAll() {
        setIsSelectAll(1);
        setCategoryActive(-1);
        axios.get('http://10.0.2.2:44344/api/v1/Product')
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
    }

    return (
        <View style={styles.sectionContainer}>
            {/* <Text style={styles.sectnionTitle} >Điện thoại - Máy tính bảng</Text> */}
            <ScrollView horizontal={true}>
                <View style={styles.filterContainer}>
                    <TouchableOpacity
                        style={isSelectAll === 1 ? styles.filterActiveButtonContainer : styles.filterInactiveButtonContainer}
                        onPress={handleSelectAll}
                    >
                        <Text
                            style={isSelectAll === 1 ? styles.filterActiveText : styles.filterInactiveText}
                        >
                            Tất cả
                            </Text>
                    </TouchableOpacity>
                    {categories.map((e, index) => (
                        <TouchableOpacity
                            key={index.toString()}
                            style={index === categoryActive ? styles.filterActiveButtonContainer : styles.filterInactiveButtonContainer}
                            onPress={() => handleChooseCategory(e.CategoryId)}
                        >
                            <Text
                                style={index === categoryActive ? styles.filterActiveText : styles.filterInactiveText}
                            >
                                {e.CategoryName}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            {/*  */}
            <ScrollView>
                <View style={styles.listItemContainer}>
                    {renderProduct}
                </View>
            </ScrollView>
            {/*  */}
            <View style={styles.seeMoreContainer}>
                <Text style={styles.seeMoreText} onPress={() => navigation.navigate('ItemPost')}>XEM TẤT CẢ SẢN PHẨM </Text>
            </View>
        </View>
    );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
    },
    sectionTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: '#2f2f2f',
        marginVertical: 12,
    },
    sectionImage: {
        width: width - 24,
        height: 130,
        borderRadius: 4,
    },
    //
    filterContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    filterActiveButtonContainer: {
        backgroundColor: '#00C8C8',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        marginRight: 10,
        color: '#fff'
    },
    filterInactiveButtonContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        borderColor: '#00C8C8',
        borderWidth: 1,
        marginRight: 10,
    },
    filterActiveText: {
        color: '#fff',
    },
    filterInactiveText: {
        color: '#5a5a5a',
    },
    //
    listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
        justifyContent: 'space-between'
    },
    itemContainer: {
        width: '49%',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 6,
        padding: 16,
        paddingTop: 25
    },
    itemImage: {
        width: '100%',
        height: 120,
        resizeMode: 'contain'
    },
    itemName: {
        fontSize: 14,
        color: '#484848',
        marginVertical: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2a2a2a',
    },
    //
    seeMoreContainer: {
        marginTop: 10,
        padding: 12,
        borderTopWidth: 0.6,
        borderTopColor: '#ededed',
        alignItems: 'center',
    },
    seeMoreText: {
        color: '#0e45b4',
    },
});