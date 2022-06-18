import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Mapa from './src/screens/Mapa';
import CadastroUser from './src/screens/CadastroUser';
import CadastroDoacao from './src/screens/CadastroDoacao';
import CadastroRanking from './src/screens/CadastroRanking';
import Menu from './src/screens/Menu/index';
import SobreApp from './src/screens/SobreApp/index';
import SobreDev from './src/screens/SobreDev/index';
import RankingDoadores from './src/screens/RankingDoadores';

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
            name="Mapa"
            component={Mapa}
            options={
              { title: "Mapa" }
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
            name="Menu"
            component={Menu}
            options={
              { title: "Menu" }
            }
          />

          <Stack.Screen
            name="SobreApp"
            component={SobreApp}
            options={
              { title: "Sobre o aplicativo" }
            }
          />

          <Stack.Screen
            name="SobreDev"
            component={SobreDev}
            options={
              { title: "Sobre a desenvolvedora" }
            }
          />

          <Stack.Screen
            name="RankingDoadores"
            component={RankingDoadores}
            options={
              { title: "Ranking dos doadores" }
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

          <Stack.Screen
            name="CadastroRanking"
            component={CadastroRanking}
            options={
              {
                title: "Registro de Pessoas no Ranking",
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


