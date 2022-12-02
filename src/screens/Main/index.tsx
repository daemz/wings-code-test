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
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useFetchProductList} from '@services/Product';
import {appBuildNumberAtom, appStateAtom, appVersionAtom} from '@recoils/AppInfo';
import {useRecoilValue} from 'recoil';

const Section = ({children, title}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Main = () => {
  const navigation = useNavigation<any>();

  const appVersion = useRecoilValue(appVersionAtom);
  const appBuildNumber = useRecoilValue(appBuildNumberAtom);
  const appState = useRecoilValue(appStateAtom);
  
  console.info('appVersion: ', appVersion);
  console.info('appBuildNumber: ', appBuildNumber);
  console.info('appState: ', appState);

  const isDarkMode = useColorScheme() === 'dark';

  const {refetch: refetchProductList} = useFetchProductList({
    enabled: false,
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fetchProductList = async (): Promise<any> => {
    try {
      const {data} = await refetchProductList();
      // console.info('data fetched nih coy: ', data);

      return data;
    } catch (err) {
      console.error('error fetchUserData: ', err);
      throw err;
    }
  };

  React.useEffect(() => {
    (async () => {
      await fetchProductList();
    })();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <LearnMoreLinks />
          <Pressable
            onPress={() => {
              navigation.navigate('Second', {shouldShowButton: false});
              // navigation.navigate('ProductDetail', {id: '10'});
            }}
            style={styles.bottomButton}>
            <Text>Go to second screen</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
