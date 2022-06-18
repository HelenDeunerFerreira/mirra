import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as loginService from "../services/LoginService"
import { CheckBox } from '@rneui/themed';

import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector, useDispatch } from 'react-redux';
import * as UserAction from '../services/actions/user.action'


export default function Login(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [lembreme, setLembreme] = useState(false);
    const dispatch = useDispatch()

    const { navigation } = props

    const verificarLembreme = async () => {
        let emailMemory = await AsyncStorage.getItem("email")
        let senhaMemory = await AsyncStorage.getItem("senha")
        if (emailMemory) {
            setEmail(emailMemory)
            setSenha(senhaMemory)
            setLembreme(true)
        }
    }

    useLayoutEffect(() => {
        verificarLembreme()
    }, [])

    const efetuarLogin = async () => {

        try {
            let user = await loginService.login(email, senha)
            dispatch(UserAction.setUser(user))

            navigation.replace("Menu")
        } catch (error) {
            Alert.alert("Erro ao efetuar Loging", error)
        }
    }


    const lembrar = async () => {
        setLembreme(!lembreme)

        if (!lembreme) {
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem("senha", senha)

        } else {
            await AsyncStorage.removeItem("email")
            await AsyncStorage.removeItem("senha")
        }
    }

    return (
        <View style={styles.container}>
            <Text>Informe suas credenciais</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='e-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(e) => setEmail(e)}

                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='senha'
                    autoCapitalize='none'
                    secureTextEntry
                    value={senha}
                    onChangeText={(e) => setSenha(e)}
                />
            </View>
            <View>
                <CheckBox
                    center
                    title="Lembre-me"
                    checked={lembreme}
                    onPress={lembrar}
                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Entrar'
                        onPress={efetuarLogin}
                    />
                </View>
                <View style={styles.coluna}>
                    <Button
                        title='Registre-se'
                        onPress={() => navigation.navigate("CadastroUser")}
                    />

                </View>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, input: {
        borderWidth: 1,
        borderColor: "gray",
        margin: 5,
        width: "60%",
        padding: 3,
        borderRadius: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        flex: 1,
        marginLeft: 5
    }

});