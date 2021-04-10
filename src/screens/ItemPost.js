import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

function ItemPost({ navigation }) {
    const [title, setTitle] = useState('');
    const [describe, setDescribe] = useState('');
    const [price, setPrice] = useState('');

    const handleTitle = (text) => {
        setTitle(text);
    }

    const handleDescribe = (text) => {
        setDescribe(text);
    }
    const handlePrice = (text) => {
        setPrice(text);
    }


    const check = (title, describe, price) => {
        alert('title: ' + title + 'describe: ' + describe + 'price: ' + price)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="title"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleTitle} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="describe"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleDescribe} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="price"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handlePrice} />

            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => check(title, describe, price)
                    }
                >
                    <Text style={styles.submitButtonText}> Đăng Bài </Text>
                </TouchableOpacity>
                {/* <Text>Bạn đã có tài khoản?</Text>
                <Button title="Đăng nhập" style={styles.buttonRegister} onPress={() => navigation.navigate('Login')} /> */}
            </View>
        </View>
    )
}
export default ItemPost;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        marginVertical: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },
    submitButton: {
        backgroundColor: '#7a42f4',
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
        width: '100%',
        marginTop: 10,

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
        color: '#7a42f4',
        fontSize: 16
    }
})