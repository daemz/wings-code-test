import {Text} from '@components';
import * as React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import styles from './styles';
import * as appTheme from '@assets/custom-theme.json';

export interface IWingsButton {
  onPress?: () => void;
  title?: string;
  style?: ViewStyle;
}

const WingsButton = ({title = 'Button', onPress, style = {}}: IWingsButton) => {
  return (
    <Pressable onPress={onPress} style={[styles.bottomButton, style]}>
      <Text color={appTheme['color-white']} variant="headline3">
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(WingsButton);
