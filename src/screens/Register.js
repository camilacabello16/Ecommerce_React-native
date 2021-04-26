import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleUsername = (text) => {
        setUsername(text);
    }

    const handleName = (text) => {
        setName(text);
    }

    const handleEmail = (text) => {
        setEmail(text);
    }

    const handlePassword = (text) => {
        setPassword(text);
    }
    const handlePhone = (text) => {
        setPhone(text);
    }
    const login = (username, name, email, pass, phone) => {
        alert('username: ' + username + 'name: ' + name + 'email: ' + email + ' password: ' + pass + 'phone: ' + phone)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Tên đăng nhập"
                placeholderTextColor="#d2d4db"
                autoCapitalize="none"
                onChangeText={handleUsername} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Mật khẩu"
                placeholderTextColor="#d2d4db"
                autoCapitalize="none"
                onChangeText={handlePassword} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Họ và tên"
                placeholderTextColor="#d2d4db"
                autoCapitalize="none"
                onChangeText={handleName} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Số điện thoại"
                placeholderTextColor="#d2d4db"
                autoCapitalize="none"
                onChangeText={handlePhone} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Địa chỉ"
                placeholderTextColor="#d2d4db"
                autoCapitalize="none"
                onChangeText={handleEmail} />
            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => login(username, name, email, password, phone)
                    }
                >
                    <Text style={styles.submitButtonText}> Đăng Ký </Text>
                </TouchableOpacity>
                <View style={styles.signUpAlert}>
                    <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản? </Text>
                    <Text
                        style={styles.signUpTxt}
                        onPress={() => navigation.navigate('Login')}
                    >Đăng nhập</Text>
                </View>
                {/* <Text>Bạn đã có tài khoản?</Text>
                <Button title="Đăng nhập" style={styles.buttonRegister} onPress={() => navigation.navigate('Login')} /> */}
            </View>
        </View>
    )
}
export default Register;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        marginVertical: 10,
        height: 40,
        borderColor: '#00C8C8',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
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
        width: '100%',
        marginTop: 20,

    },
    buttonRegister: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpAlert: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signUpTxt: {
        color: '#00C8C8',
        fontSize: 16
    }
})