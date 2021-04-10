import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Support from './src/screens/Support';
import ShoppingCart from './src/screens/ShoppingCart';
import ItemDetail from './src/screens/ItemDetail';
import Payment from './src/screens/Payment';
import PaymentMethods from './src/screens/PaymentMethods';
import ShopItem from './src/screens/ShopItem';
import ItemPost from './src/screens/ItemPost';
import EditItem from './src/screens/EditItem';
import Myitem from './src/screens/Myitem';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#157cdb',
        inactiveTintColor: '#262626',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="ShopItem" component={ShopItem} />
        <Stack.Screen name="ItemPost" component={ItemPost} />
        <Stack.Screen name="EditItem" component={EditItem} />
        <Stack.Screen name="Myitem" component={Myitem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
