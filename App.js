import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './src/screens/Login'
import CadastroUser from './src/screens/CadastroUser'
import Menu from './src/screens/Menu/index'
import Mapa from './src/screens/Mapa'
import CadastroDoacao from './src/screens/CadastroDoacao'
import CadastroRanking from './src/screens/CadastroRanking'
import RankingDoadores from './src/screens/RankingDoadores'
import SobreApp from './src/screens/SobreApp/index'
import SobreDev from './src/screens/SobreDev/index'

import { Provider as StoreProvider } from 'react-redux'
import { LogBox } from 'react-native'
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
              { title: "🌎 Mapa" }
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
              { title: "🛠 Sobre o aplicativo" }
            }
          />

          <Stack.Screen
            name="SobreDev"
            component={SobreDev}
            options={
              { title: "🥀 Sobre a desenvolvedora" }
            }
          />

          <Stack.Screen
            name="RankingDoadores"
            component={RankingDoadores}
            options={
              { title: "📄 Ranking dos doadores" }
            }
          />

          <Stack.Screen
            name="CadastroDoacao"
            component={CadastroDoacao}
            options={
              {
                title: "📍 Registro de Pontos de Doação",
                headerTitleStyle: {
                  fontSize: 18
                }
              }
            }
          />

          <Stack.Screen
            name="CadastroRanking"
            component={CadastroRanking}
            options={
              {
                title: "📝 Cadastrar sua posição no Ranking",
                headerTitleStyle: {
                  fontSize: 18
                }
              }
            }
          />

        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}


