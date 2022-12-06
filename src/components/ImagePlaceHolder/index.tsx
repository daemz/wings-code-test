import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

interface IImagePlaceHolder {
  style?: ViewStyle;
}

const ImagePlaceHolder = ({style}: IImagePlaceHolder) => {
  return <View style={[styles.productCardImagePlaceholder, style]} />;
};

export default React.memo(ImagePlaceHolder);
