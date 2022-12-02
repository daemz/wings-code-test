import * as appTheme from '@assets/custom-theme.json';
import InitializeApp from '@hoc/InitializeApp';
import HomeNavigator from '@navigators/Home';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utils/navigators';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {RecoilRoot} from 'recoil';

const App = (): React.ReactElement => {
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = React.useState(true);

  const someInitialAction = async () => {
    // some initial actions should be here
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialSetup = async (): Promise<void> => {
    // do initial setup here
    // such as calling initial api to collect initial data or something
    await someInitialAction();
  };

  React.useEffect(() => {
    setIsLoading(false);
    initialSetup();
  }, [initialSetup]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appTheme['color-white']}
      />
      <IconRegistry icons={EvaIconsPack} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot override={false}>
          <InitializeApp>
            <ApplicationProvider {...eva} theme={eva.light}>
              <SafeAreaProvider>
                <NavigationContainer ref={navigationRef}>
                  <HomeNavigator />
                </NavigationContainer>
              </SafeAreaProvider>
            </ApplicationProvider>
          </InitializeApp>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
