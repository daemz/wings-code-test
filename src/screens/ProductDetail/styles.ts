import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  bodyContainer: ViewStyle;
  imagePlaceholder: ViewStyle;
  variantDetail: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
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
});

export default styles;
