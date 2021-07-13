import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import * as  ImagePicker from 'react-native-image-picker';
import { Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { block } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Formik } from 'formik';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

function ItemPost({ route, navigation }) {

    const { productEdit } = route.params;

    const [selectedMethod, setSelectedMethod] = useState();
    const [response, setResponse] = useState();
    const [categoryName, setCategoryName] = useState();
    const [productImage, setProductImage] = useState(productEdit.ProductImage);
    const [userInfo, setUserInfo] = useState();
    const [productCreated, setProductCreated] = useState({});
    const [defaultCategory, setDefaultCategory] = useState(productEdit.CategoryId);
    const [productName, setProductName] = useState(productEdit.ProductName);
    const [productTitle, setProductTitle] = useState(productEdit.ProductTitle);
    const [productDescription, setProductDescription] = useState(productEdit.ProductDescription);
    const [productPrice, setProductPrice] = useState(productEdit.ProductPrice);
    const [productWeight, setProductWeight] = useState(productEdit.ProductWeight);
    const [category, setCategory] = useState([
        {
            CategoryId: 1,
            CategoryName: 'Thời trang'
        },
        {
            CategoryId: 2,
            CategoryName: 'Túi ví'
        },
        {
            CategoryId: 3,
            CategoryName: 'Ô tô - xe máy - xe đạp'
        },
        {
            CategoryId: 4,
            CategoryName: 'Máy tính'
        },
        {
            CategoryId: 5,
            CategoryName: 'Điện thoại'
        },
        {
            CategoryId: 6,
            CategoryName: 'Đồng hồ'
        },
        {
            CategoryId: 7,
            CategoryName: 'Giày dép'
        },
        {
            CategoryId: 8,
            CategoryName: 'Nhà cửa'
        },
        {
            CategoryId: 9,
            CategoryName: 'Thiết bị điện tử'
        },
        {
            CategoryId: 10,
            CategoryName: 'Thể thao & Du lịch'
        },
    ]);

    useEffect(() => {
        AsyncStorage.getItem("USER").then((value) => {
            setUserInfo(JSON.parse(value));
        });
    }, []);

    useEffect(() => {
        if (!selectedMethod) {
            setCategoryName("Chọn danh mục");
        } else {
            setCategoryName(selectedMethod.CategoryName);
        }
    });

    function handlePostProduct() {
        productCreated.ProductId = productEdit.ProductId;
        productCreated.ProductName = productName;
        productCreated.ProductTitle = productTitle;
        productCreated.ProductDescription = productDescription;
        productCreated.ProductPrice = productPrice;
        productCreated.ProductWeight = productWeight.toString();
        productCreated.CategoryId = selectedMethod ? category.find((o) => o.CategoryName == selectedMethod.CategoryName).CategoryId : defaultCategory;
        productCreated.ProductImage = productImage;
        productCreated.UserId = '311f7484-abae-11eb-8a1f-00163e047e89';
        console.log(productCreated);
        axios.put('http://10.0.2.2:44344/api/v1/Product', productCreated)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 50 }}>
                <Button title="Upload image" onPress={() =>
                    ImagePicker.launchImageLibrary(
                        {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 200,
                            maxWidth: 200,
                        },
                        (res) => {
                            setResponse(res);
                        },
                    )
                } />

                {response &&
                    <Image source={{ uri: response.uri }}
                        style={{ width: 200, height: 200 }}
                    />
                }
                <View style={styles.wrapInput}>
                    <Text style={styles.inputTitle}>Tên sản phẩm</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Nhập tên sản phẩm"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={setProductName}
                        defaultValue={productEdit.ProductName}
                    />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.inputTitle}>Tiêu đề</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Nhập tiêu đề"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={setProductTitle}
                        defaultValue={productEdit.ProductTitle}
                    />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.inputTitle}>Mô tả sản phẩm</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Nhập mô tả sản phẩm"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={setProductDescription}
                        defaultValue={productEdit.ProductDescription}
                    />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.inputTitle}>Giá</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="#fff"
                        placeholder="Nhập giá sản phẩm"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={setProductPrice}
                        defaultValue={productEdit.ProductPrice}
                    />
                </View>
                <View style={styles.wrapInput}>
                    <Text style={styles.inputTitle}>Cân nặng</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="#fff"
                        placeholder="Nhập cân nặng sản phẩm"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={setProductWeight}
                        defaultValue={productEdit.ProductWeight}
                    />
                </View>
                <View style={styles.wrapInput}>
                    <TouchableOpacity onPress={() => navigation.navigate('ItemPostCategory', {
                        setSelectedMethod: setSelectedMethod
                    })}>
                        <View style={styles.selectCategoryTitle}>
                            <View style={styles.wrapSelect}>
                                <FontAwesome
                                    name="list"
                                    size={20}
                                    color="#000"
                                    style={{ marginRight: 10 }}
                                ></FontAwesome>
                                <Text style={styles.selectCategoryTxt}>Danh mục</Text>
                            </View>
                            {/* <Text
                                style={styles.selectCategoryTxt}
                            >{!selectedMethod ? "Chọn danh mục" : selectedMethod.CategoryName}</Text> */}
                            <Text
                                style={styles.selectCategoryTxt}
                            >{selectedMethod ? selectedMethod.CategoryName : category.find((o) => o.CategoryId == productEdit.CategoryId).CategoryName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handlePostProduct}
                    color="#00C8C8"
                //onPress={() => navigation.navigate('Myitem')}
                >
                    <Text style={styles.submitButtonText}> Cập nhật </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    input: {
        borderColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#00C8C8',
        // padding: 10,
        height: 40,
        width: '100%',
        textAlign: 'center',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButtonText: {
        color: 'white',
    },
    wrapperButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#d2d4db',
        backgroundColor: '#fff'
    },
    buttonRegister: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSignup: {
        backgroundColor: 'red'
    },
    signUpAlert: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signUpTxt: {
        color: '#d2d4db',
        fontSize: 16
    },
    wrapInput: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10
    },
    selectCategoryTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    wrapSelect: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorText: {
        fontSize: 15,
        color: 'red',
    },
});

export default ItemPost;