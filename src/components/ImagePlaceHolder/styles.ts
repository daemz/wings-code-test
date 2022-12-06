import {StyleSheet, ViewStyle} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  productCardImagePlaceholder: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  productCardImagePlaceholder: {
    backgroundColor: appTheme['color-info-300'],
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 16,
  },
});

export default styles;
