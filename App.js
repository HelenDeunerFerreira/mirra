import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import CadastroUser from './src/screens/CadastroUser';
import CadastroDoacao from './src/screens/CadastroDoacao';
import { Provider as StoreProvider } from 'react-redux';
import { LogBox } from 'react-native';
import store from './src/services/store'

LogBox.ignoreLogs([
  'AsyncStorage'
])

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>

          <Stack.Screen
            name="Login"
            component={Login}
            options={
              { title: "Login" }
            }
          />

          <Stack.Screen
            name="Menu"
            component={Menu}
            options={
              { title: "Menu" }
            }
          />

          <Stack.Screen
            name="CadastroUser"
            component={CadastroUser}
            options={
              { title: "Registro de Usuários" }
            }
          />

          <Stack.Screen
            name="CadastroDoacao"
            component={CadastroDoacao}
            options={
              {
                title: "Registro de Pontos de Doação",
                headerTitleStyle: {
                  fontSize: 15
                }
              }
            }
          />

        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}


