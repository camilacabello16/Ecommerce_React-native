import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (text) => {
        setUsername(text);
    }

    const handlePassword = (text) => {
        setPassword(text);
    }

    const login = (username, pass) => {
        alert('username: ' + username + ' password: ' + pass)
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
            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => login(username, password)
                    }
                //color="#00C8C8"
                >
                    <Text style={styles.submitButtonText}> Đăng Nhập </Text>
                </TouchableOpacity>
                <View style={styles.signUpAlert}>
                    <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản? </Text>
                    <Text
                        style={styles.signUpTxt}
                        onPress={() => navigation.navigate('Register')}
                    >Đăng ký</Text>
                </View>

                {/* <Button title="Đăng ký" onPress={() => navigation.navigate('Register')} /> */}
            </View>
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
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
        color: '#000',
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
        display: 'flex',
        justifyContent: 'center',
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