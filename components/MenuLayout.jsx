import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Menu, User, Home, Play } from 'lucide-react-native'
import { Button, Icon, ButtonIcon } from '@gluestack-ui/themed'
import { useWindowDimensions } from 'react-native'

import HomePage from '../screens/Home'
import Account from '../screens/Account'
import Onboarding from '../screens/Onboarding'

const SideMenu = () => {  
  
  const Drawer = createDrawerNavigator()
  const Stack = createNativeStackNavigator()
  const { width } = useWindowDimensions()
  const isLargeScreen = width >= 768;

  const Toggle = ({navigation}) => {
    return (
      <Button 
        onPress={()=> navigation.navigation.toggleDrawer()}
        variant="link"
        mr={10}
      >
        <ButtonIcon as={Menu}/>
      </Button>
    )
  }

  const DebateStack = navigation => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen 
          name="Débats" 
          component={HomePage} 
          options={{headerRight: () => <Toggle navigation={navigation}/>}}
        />
      </Stack.Navigator>
    );
  }
  
  return (
    <Drawer.Navigator 
      initialRouteName="Accueil" 
      screenOptions={({ route, navigation }) => ({
        drawerType: isLargeScreen ? 'permanent' : 'front',
        drawerPosition: 'right',
        sceneContainerStyle: {borderLeftWidth: 0.2, borderLeftColor: '#A5A5A5'},
        headerRight: props => 
          <Button onPress={navigation.toggleDrawer} variant='link' mr={10}>
            <ButtonIcon as={Menu}/>
          </Button>,
        headerLeft: false,
      })}
    >
      <Drawer.Screen 
        name="Accueil" 
        component={DebateStack} 
        options={{drawerIcon: () => <Icon as={Home} size="lg" />, headerShown: false}}
      />
      <Drawer.Screen 
        name="Mon profil" 
        component={Account} 
        options={{drawerIcon: () => <Icon as={User} size="lg" />}} 
      />
      <Drawer.Screen 
        name="Onboarding" 
        component={Onboarding} 
        options={{drawerIcon: () => <Icon as={Play} size="lg" />}}
      />
    </Drawer.Navigator>
  );
}

export default SideMenu;