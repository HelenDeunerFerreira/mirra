import { StyleSheet, Text, View, Button, Alert, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import * as loginService from '../services/LoginService'
import * as doacaoService from '../services/DoacaoService'
import * as Location from "expo-location"
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'

export default function Mapa(props) {

  const user = useSelector(store => store.user)
  const { navigation } = props

  const [doacao, setDoacao] = useState([])

  const [location, setLocation] = useState({
    coords: {
      latitude: -28.26278,
      longitude: -52.40667,
    }
  })

  const myPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      //setar uma msg de erro...
      return
    } else {
      let myLocation = await Location.getCurrentPositionAsync({})
      setLocation(myLocation)
    }

  }

  const buscarDoacao = async () => {
    try {
      let dados = await doacaoService.getPontoDoacao()
      //console.log(dados)
      setDoacao(dados)
    } catch (error) {

    }
  }

  const logoff = async () => {

    try {
      await loginService.logoff()
      navigation.replace("Login")
    } catch (error) {
      Alert.alert(error)
    }
  }

  useEffect(() => {
    myPosition()
    buscarDoacao()
    //console.log(props)
  }, [props])


  useLayoutEffect(() => {

    navigation.setOptions({
      title: user.email,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15
      },

      headerRight: () => <Button title='Logoff' onPress={logoff} />
    })

  }, [])

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}

      >
        {location &&

          <Marker
            coordinate={
              {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }
            }
            title={user.email}
            icon={require("../../assets/my-location-icon.jpg")}
          />}

        {doacao.map((doacao, key) =>

          <Marker
            key={key}
            coordinate={{
              latitude: doacao.lat,
              longitude: doacao.lng
            }}
            title={doacao.endereco}
            icon={require("../../assets/doacao-position.png")}
            onPress={() => Alert.alert(doacao.nome_responsavel,
              `Responsável: ${doacao.nome_responsavel}\nEndereço: ${doacao.endereco}`)}

          />)}

      </MapView>
      <View style={{
        position: "absolute",
        top: "80%",
        alignSelf: "flex-end",
        paddingRight: 10

      }}>

        <Button title='+ Ponto de doação' onPress={() => navigation.navigate("CadastroDoacao")} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }

})