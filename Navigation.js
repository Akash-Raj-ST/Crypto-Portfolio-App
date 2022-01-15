import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AssetDetail from './screens/AssetDetail';
import Assets from './screens/Assets';
import History from './screens/History';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

const Stack = createNativeStackNavigator()

export default function Navigation(){
    return(
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator 
                initialRouteName="Profile"  
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Assets" component={Assets}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="History" component={History}/>
                <Stack.Screen name="AssetDetail" component={AssetDetail}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}