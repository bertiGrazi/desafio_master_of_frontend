import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Groups } from '@screens/Groups';
import { Details } from '@screens/Details';
import { NewCar } from '@screens/NewCar'
import { SignIn } from '@screens/Login/SignIn'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='signIn' screenOptions={{ headerShown: false}}>
      <Screen 
        name="groups" 
        component={Groups}
      />
      <Screen 
        name="newCar" 
        component={NewCar} 
      />
      <Screen 
        name="details" 
        component={Details} 
      />
      <Screen 
        name="signIn" 
        component={SignIn} 
      />
    </Navigator>
  );
}