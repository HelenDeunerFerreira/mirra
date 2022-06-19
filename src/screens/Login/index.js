import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { CheckBox } from '@rneui/themed'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from 'react-redux'

import * as loginService from "../../services/LoginService"
import * as UserAction from '../../services/actions/user.action'

import { TextInput, Alert } from 'react-native'
import { Container, Titulo, ViewInput, ViewCheckBox, Linha, Coluna, Botao, Texto } from './style'

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
        <Container>

            <Titulo>Informe as suas credenciais</Titulo>

            <ViewInput>
                <TextInput
                    placeholder='e-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(e) => setEmail(e)}

                />
            </ViewInput>

            <ViewInput>
                <TextInput
                    placeholder='senha'
                    autoCapitalize='none'
                    secureTextEntry
                    value={senha}
                    onChangeText={(e) => setSenha(e)}
                />
            </ViewInput>

            <ViewCheckBox>
                <CheckBox
                    center
                    title="Lembre-me"
                    checked={lembreme}
                    onPress={lembrar}
                />
            </ViewCheckBox>

            <Linha>

                <Coluna>
                    <Botao onPress={efetuarLogin}>
                        <Texto>
                            Entrar
                        </Texto>
                    </Botao>
                </Coluna>

                <Coluna>
                    <Botao onPress={() => navigation.navigate("CadastroUser")}>
                        <Texto>
                            Registre-se
                        </Texto>
                    </Botao>
                </Coluna>

            </Linha>

            <StatusBar style="auto" />

        </Container>
    );
}