import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  textInputContainer: ViewStyle;
  clearIcon: ViewStyle;
  textInput: ViewStyle;
  formInputContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  formInputContainer: {
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  textInputContainer: {
    borderWidth: 0.5,
    width: '80%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 6,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
  },
  clearIcon: {
    justifyContent: 'center',
  },
});

export default styles;
