import { Platform } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useAuth, AuthProvider } from './components/AuthProvider';
import MenuLayout from './components/MenuLayout';
import Login from './screens/Login';
import moment from 'moment'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { ToastProvider } from "@gluestack-ui/toast"
import { config } from "@gluestack-ui/config"

moment.locale('fr');

const App = () => {  

  console.log(config)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour in ms
        cacheTime: 1000 * 60 * 60, // 1 hour in ms
        refetchOnWindowFocus: false, 
      },
    }
  })

  const NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: config.tokens.colors.primary500,
    },
  };

  const Layout = () => {
    const { session, initialized } = useAuth();
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer theme={NavigationTheme}>
        {session ? (
          <MenuLayout/> 
        ) : (
          <Stack.Navigator>
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options= {{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
    
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <ToastProvider>
             <Layout/>
          </ToastProvider>
        </GluestackUIProvider>
        {Platform.OS === 'web' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;