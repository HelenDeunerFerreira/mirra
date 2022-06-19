import React, { useLayoutEffect, useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'

import * as loginService from '../services/LoginService'
import * as doacaoService from '../services/DoacaoService'
import * as Location from "expo-location"

import { StyleSheet, View, Button, Alert, Dimensions } from 'react-native'
import { Botao, Texto } from './style'

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
      return
    } else {
      let myLocation = await Location.getCurrentPositionAsync({})
      setLocation(myLocation)
    }

  }

  const buscarDoacao = async () => {
    try {
      let dados = await doacaoService.getPontoDoacao()
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
  }, [props])


  useLayoutEffect(() => {

    navigation.setOptions({
      title: user.email,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15
      },

      headerRight: () => <Botao onPress={logoff}><Texto>Logoff</Texto></Botao>
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

        <Botao onPress={() => navigation.navigate("CadastroDoacao")}><Texto>+ Ponto de doação</Texto></Botao>

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