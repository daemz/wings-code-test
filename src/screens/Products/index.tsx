import {IProduct} from '@appTypes/product.type';
import {TransactionIcon} from '@assets/Icons';
import {ImagePlaceHolder, Text, WingsButton} from '@components';
import {useHeader} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {useFetchProductList} from '@services/Product';
import {formatToRupiah} from '@utils/common';
import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native';
import styles from './styles';

const Products = () => {
  const navigation = useNavigation<any>();

  const [productData, setProductData] = React.useState<IProduct[]>([]);

  const {data, isLoading} = useFetchProductList({
    enabled: true,
  });

  const onProductPressed = (item: IProduct) => {
    navigation.navigate('ProductDetail', {
      product: item,
    });
  };

  const renderProductCard = (item: IProduct) => {
    return (
      <View style={styles.productCardContainer}>
        <ImagePlaceHolder />
        <View style={styles.productCardRightComponent}>
          <Text variant="body1">{item?.product_name}</Text>
          <Text variant="body1">{`Rp. ${formatToRupiah(item?.price)}`}</Text>
          <WingsButton
            style={{width: '50%'}}
            title="Buy"
            onPress={() => onProductPressed(item)}
          />
        </View>
      </View>
    );
  };

  const renderTransactionButton = () => (
    <Pressable
      onPress={() => navigation.navigate('Transaction')}
      style={{marginRight: 16}}>
      <TransactionIcon />
    </Pressable>
  );

  useHeader({
    title: 'Product List',
    variant: 'none',
    headerRight: renderTransactionButton(),
    // onPressLeft: () => navigation.goBack(),
  });

  React.useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data, isLoading]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            style={styles.list}
            data={productData}
            extraData={productData}
            renderItem={({item}) => renderProductCard(item)}
            keyExtractor={(item, index) => `${item?.product_name} - ${index}`}
            showsVerticalScrollIndicator={false}
          />
        )}
        <WingsButton
          style={{width: '50%'}}
          title="Checkout"
          onPress={() => {
            navigation.navigate('Checkout');
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Products;
