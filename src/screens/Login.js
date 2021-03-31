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
                placeholder="Username"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleUsername} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handlePassword} />
            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => login(username, password)
                    }
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