import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Provider } from 'react-redux'

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
import OrderDetail from './src/screens/OrderDetail';
import TransportMethod from './src/screens/TransportMethod';
import ItemPostCategory from './src/screens/ItemPostCategory';


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
        <Stack.Screen name="Register" component={Register} options={{ title: 'Đăng Ký' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Đăng Nhập' }} />
        <Stack.Screen name="Support" component={Support} options={{ title: 'Hỗ Trợ' }} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ title: 'Giỏ Hàng' }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ title: 'Thông Tin Sản Phẩm' }} />
        <Stack.Screen name="Payment" component={Payment} options={{ title: 'Thanh Toán' }} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ title: 'Phương thức thanh toán' }} />
        <Stack.Screen name="ShopItem" component={ShopItem} options={{ title: 'Cửa Hàng' }} />
        <Stack.Screen name="ItemPost" component={ItemPost} options={{ title: 'Đăng bài' }} />
        <Stack.Screen name="EditItem" component={EditItem} options={{ title: '' }} />
        <Stack.Screen name="Myitem" component={Myitem} options={{ title: 'Cửa hàng của tôi' }} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ title: 'Thông tin thanh toán' }} />
        <Stack.Screen name="TransportMethod" component={TransportMethod} options={{ title: 'Đơn vị vận chuyển' }} />
        <Stack.Screen name="ItemPostCategory" component={ItemPostCategory} options={{ title: 'Chọn danh mục' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
