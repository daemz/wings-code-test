import {StyleSheet, ViewStyle} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  list: ViewStyle;
  productCardContainer: ViewStyle;
  productCardImagePlaceholder: ViewStyle;
  productCardRightComponent: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  list: {
    // flex: 1,
    width: '100%',
    // marginBottom: 50,
    // padding: 16,
  },
  productCardContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  productCardImagePlaceholder: {
    backgroundColor: appTheme['color-info-300'],
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 16,
  },
  productCardRightComponent: {
    flex: 1,
  },
});

export default styles;
