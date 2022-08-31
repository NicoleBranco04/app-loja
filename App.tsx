import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import Main from './screens/Home/components/Main';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


