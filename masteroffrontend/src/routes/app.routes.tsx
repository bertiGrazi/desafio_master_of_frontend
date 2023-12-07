import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { Groups } from '@screens/Groups';
import { Details } from '@screens/Details';
import { NewCar } from '@screens/NewCar'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen 
        name="Groups" 
        component={Groups}
      />
      <Screen 
        name="NewCar" 
        component={NewCar} 
      />
      <Screen 
        name="Details" 
        component={Details} 
      />
    </Navigator>
  );
}