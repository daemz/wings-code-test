import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '@screens/Main';
import SecondScreen from '@screens/Second';
import ProductDetail from '@screens/ProductDetail';
import Products from '@screens/Products';
import Checkout from '@screens/Checkout';
import Transaction from '@screens/Transaction';

import {IProduct} from '@appTypes/product.type';

export type HomeParamList = {
  Main: undefined;
  Second: {shouldShowButton?: boolean};
  ProductDetail: {product: IProduct};
  Products: undefined;
  Checkout: undefined;
  Transaction: undefined;
};

const Stack = createStackNavigator<HomeParamList>();

const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        title: '',
        headerStyle: {elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
