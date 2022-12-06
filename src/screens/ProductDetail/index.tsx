import {ImagePlaceHolder, Text, WingsButton} from '@components';
import {useHeader} from '@hooks';
import {HomeParamList} from '@navigators/Home';
import {useRoute} from '@react-navigation/native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {cartAtom} from '@recoils/Cart/atoms';
import {useFetchProductById} from '@services/Product';
import {formatToRupiah} from '@utils/common';
import * as React from 'react';
import {ActivityIndicator, Alert, SafeAreaView, View} from 'react-native';
import {useRecoilState} from 'recoil';
import styles from './styles';

export type SecondScreenRouteProp = RouteProp<HomeParamList, 'ProductDetail'>;

interface IRenderVariant {
  left?: string;
  right?: string;
}

const ProductDetail = () => {
  const route = useRoute<SecondScreenRouteProp>();
  const navigation = useNavigation<any>();
  const {product} = route?.params;
  const [cartItems, setCartItems] = useRecoilState(cartAtom);

  const addToCart = () => {
    const currentCart = [...cartItems];

    currentCart.push(product);

    setCartItems(currentCart);

    Alert.alert('Product has been successfully added to the Cart!');
  };

  const RenderVariant = ({left, right}: IRenderVariant) => {
    return (
      <View style={styles.variantDetail}>
        <Text variant="body2">{left}</Text>
        <Text variant="body2">{right}</Text>
      </View>
    );
  };

  useHeader({
    title: 'Product Detail',
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyContainer}>
          <ImagePlaceHolder style={styles.imagePlaceholder} />
          <Text marginBottom={20} variant="body1">
            {product?.product_name}
          </Text>
          <RenderVariant
            left="Price"
            right={`Rp. ${formatToRupiah(product?.price)}`}
          />
          <RenderVariant left="Dimension" right={product?.dimension} />
          <RenderVariant left="Price Unit" right={product?.unit} />
        </View>
        <WingsButton
          onPress={addToCart}
          style={{alignSelf: 'center', width: '50%'}}
          title="Add to Cart"
        />
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
