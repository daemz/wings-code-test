import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  priceView: ViewStyle;
  bodyContainer: ViewStyle;
  imagePlaceholder: ViewStyle;
  variantDetail: ViewStyle;
  productCardContainer: ViewStyle;
  productCardRightComponent: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  priceView: {
    padding: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.8,
  },
  bodyContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'column',
  },
  imagePlaceholder: {marginTop: 50, marginBottom: 30},
  variantDetail: {
    marginVertical: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCardContainer: {
    // flex: 1,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  productCardRightComponent: {
    flex: 1,
  },
});

export default styles;
