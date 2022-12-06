import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  bottomButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  bottomButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    // alignSelf: 'center',
    alignItems: 'center',
    margin: 16,
    borderRadius: 50,
    backgroundColor: appTheme['tertiary'],
  },
});

export default styles;
