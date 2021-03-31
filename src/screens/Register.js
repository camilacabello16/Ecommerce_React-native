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
                placeholder="Username"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleUsername} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleEmail} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handlePassword} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Name"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleName} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Phone"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handlePhone} />

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