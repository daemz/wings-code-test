/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native Main
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import {useRecoilValue} from 'recoil';
import {userDataAtom} from '@recoils/User/atoms';
import {FormInput, Text, WingsButton} from '@components';
import {IUser} from '@appTypes/user.type';

const Main = () => {
  const navigation = useNavigation<any>();

  const user = useRecoilValue(userDataAtom);

  const [loginData, setLoginData] = React.useState<IUser>({
    user: '',
    password: '',
  });

  console.info('user: ', user);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onLogin = () => {
    if (
      loginData?.user === user?.user &&
      loginData?.password === user?.password
    ) {
      navigation.replace('Products');
    } else {
      Alert.alert('Incorrect Username or Password');
    }
  };

  React.useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
        ]}>
        <Text marginVertical={100} variant="headline1">
          {'Login'}
        </Text>
        <FormInput
          placeholder="Username"
          value={loginData.user}
          onChangeText={text =>
            setLoginData({
              ...loginData,
              user: text,
            })
          }
        />
        <FormInput
          placeholder="Password"
          value={loginData.password}
          isPassword={true}
          onChangeText={text =>
            setLoginData({
              ...loginData,
              password: text,
            })
          }
        />
        <WingsButton title="Login" onPress={onLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Main;
