import {Layout, Text} from '@components';
import * as React from 'react';
import {TextInput, ViewStyle} from 'react-native';
import styles from './styles';

interface IFormInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onClearButton?: () => void;
  style?: ViewStyle;
  marginTop?: number;
  keyboardType?: 'numeric' | 'default';
  isPassword?: boolean;
}

const SearchBar = ({
  label,
  value,
  placeholder = 'Please input something',
  onChangeText,
  style = {},
  marginTop,
  keyboardType = 'default',
  isPassword = false,
}: IFormInputProps) => {
  const [textValue, setTextValue] = React.useState(value);
  return (
    <Layout style={[styles.formInputContainer, style, {marginTop}]}>
      {label && (
        <Text variant="headline5" fontWeight="bold">
          {label}
        </Text>
      )}
      <Layout style={styles.textInputContainer}>
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
          style={styles.textInput}
          value={textValue}
          placeholder={placeholder}
          onChangeText={text => {
            setTextValue(text);
            onChangeText(text);
          }}
        />
      </Layout>
    </Layout>
  );
};

export default React.memo(SearchBar);
