import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    StyleSheet,
    Button,
    TouchableOpacity,
    View,
    Text,
    ScrollView,
} from 'react-native';

function TransportMethod({ route, navigation }) {

    console.log(route.params);

    //const { setSelectedMethod } = route.params;

    const [transport, setTransport] = useState([
        {
            id: 1,
            name: "Giao hàng tiết kiệm",
            price: "30,976",
            detail: "dasdasdafaffsfadfsdfhhhhhhhhhhhhhhhdfhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        },
        {
            id: 2,
            name: "Giao hàng",
            price: "30076125",
            detail: "11111111"
        },
        {
            id: 3,
            name: "Giao hàng",
            price: "3007645645",
            detail: "11111111"
        },
    ]);

    const [chosenMethod, setChosenMethod] = useState();

    const renderTransportMethod = transport.map((transportMethod, index) => {
        return (
            <TouchableOpacity key={index} onPress={() => {
                setSelectedMethod(transportMethod);
                navigation.goBack();
            }}>
                <View style={styles.wrapTransportMethod}>
                    <View style={styles.transportMethodTitle}>
                        <Text style={styles.methodName}>{transportMethod.name}</Text>
                        <Text style={styles.methodPrice}>{transportMethod.price}</Text>
                    </View>
                    <View style={styles.transportDetail}>
                        <Text style={styles.transportDetailTxt}>{transportMethod.detail}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    })

    return (
        <View style={styles.container} style={{ height: '100%' }}>
            <ScrollView style={styles.transportPage}>
                {renderTransportMethod}
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    transportPage: {
        marginTop: 15
    },
    chosenMethod: {
        marginVertical: 7,
        borderLeftWidth: 5,
        borderLeftColor: 'pink',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    chosenMethodName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 20
    },
    chosenMethodPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    wrapTransportMethod: {
        backgroundColor: '#fff',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    transportMethodTitle: {
        display: 'flex',
        flexDirection: 'row',
    },
    methodName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    methodPrice: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 30
    },
    wrapButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 7
    }
})

export default TransportMethod;
