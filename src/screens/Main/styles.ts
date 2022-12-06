import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  sectionContainer: ViewStyle;
  sectionTitle: ViewStyle;
  sectionDescription: ViewStyle;
  highlight: ViewStyle;
  bottomButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottomButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignSelf: 'center',
    margin: 16,
    borderRadius: 50,
    backgroundColor: appTheme['color-info-300'],
  },
});

export default styles;
