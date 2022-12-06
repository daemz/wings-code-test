import {IProduct} from '@appTypes/product.type';
import {ImagePlaceHolder, Text, WingsButton} from '@components';
import {useHeader} from '@hooks';
import {HomeParamList} from '@navigators/Home';
import {useRoute} from '@react-navigation/native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {cartAtom} from '@recoils/Cart/atoms';
import {useFetchProductById, useMutateOrder} from '@services/Product';
import {formatToRupiah} from '@utils/common';
import * as React from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import styles from './styles';

interface IRenderVariant {
  left?: string;
  right?: string;
}

const Checkout = () => {
  const navigation = useNavigation<any>();

  const [cart, setCart] = useRecoilState(cartAtom);

  console.log('cart: ', cart);

  const {mutateAsync: mutateTransaction} = useMutateOrder();

  const calculateTotalPrice = (): number => {
    let finalPrice = 0;

    cart.map(item => {
      finalPrice += item?.price;
    });

    return finalPrice;
  };

  const onOrder = async (): Promise<any> => {
    for (const product of cart) {
      await mutateTransaction(product);
    }

    setCart([]);

    Alert.alert('Your transaction has been recorded!', '', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Transaction');
        },
      },
    ]);
  };

  const TotalPrice = () => {
    return (
      <View style={styles.priceView}>
        <Text variant="body1">{'Total: '}</Text>
        <Text variant="body1">
          {`Rp. ${formatToRupiah(calculateTotalPrice())}`}
        </Text>
      </View>
    );
  };

  const renderProductCard = (item: IProduct, qty?: number = 1) => {
    return (
      <View style={styles.productCardContainer}>
        <ImagePlaceHolder />
        <View style={styles.productCardRightComponent}>
          <Text variant="body1">{item?.product_name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{borderWidth: 0.9, paddingHorizontal: 8, marginRight: 6}}>
              <Text variant="body1">{qty.toString()}</Text>
            </View>
            <Text variant="body1">{item?.product_name}</Text>
          </View>
          <Text variant="body1">{`Rp. ${formatToRupiah(item?.price)}`}</Text>
        </View>
      </View>
    );
  };

  const isSameItem = (id: string): boolean => {
    let isSame: boolean = false;

    cart?.map(item => {
      if (item?.id === id) {
        isSame = true;
      }
    });

    return isSame;
  };

  useHeader({
    title: 'Checkout',
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.bodyContainer}>
            <TotalPrice />
            {cart?.map(product => {
              if (isSameItem(product?.id)) {
                return renderProductCard(product);
              } else {
                return renderProductCard(product);
              }
            })}
          </View>
        </ScrollView>
        <WingsButton
          onPress={() => {
            Alert.alert('Warning?', 'Are you sure to proceed?', [
              {text: 'Yes', onPress: () => onOrder()},
              {text: 'No'},
            ]);
          }}
          style={{alignSelf: 'center', width: '50%'}}
          title="Confirm"
        />
      </SafeAreaView>
    </>
  );
};

export default Checkout;
