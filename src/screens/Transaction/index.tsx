import {ITransactionDetail} from '@appTypes/product.type';
import {ImagePlaceHolder, Text, WingsButton} from '@components';
import {useHeader} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {useFetchTransactionData} from '@services/Product';
import {formatToRupiah} from '@utils/common';
import * as React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import styles from './styles';

const Products = () => {
  const navigation = useNavigation<any>();

  const [productData, setProductData] = React.useState<ITransactionDetail[]>(
    [],
  );

  const {data, isLoading} = useFetchTransactionData({
    enabled: true,
  });

  const onProductPressed = (item: ITransactionDetail) => {
    console.log('selectedProduct: ', item);
    // navigation.navigate('ProductDetail', {
    //   product: item,
    // });
  };

  const renderProductCard = (item: ITransactionDetail) => {
    return (
      <View style={styles.productCardContainer}>
        <ImagePlaceHolder />
        <View style={styles.productCardRightComponent}>
          <Text variant="body1">{item?.document_code}</Text>
          <Text variant="body1">{item?.document_number}</Text>
          <Text variant="body1">{item?.product_name}</Text>
          <Text variant="body1">{`Rp. ${formatToRupiah(item?.price)}`}</Text>
        </View>
      </View>
    );
  };

  useHeader({
    title: 'Transaction List',
    // variant: 'none',
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
      </SafeAreaView>
    </>
  );
};

export default Products;
