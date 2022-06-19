import React, { useState } from 'react'

import * as loginService from "../../services/LoginService"

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import { Container, Titulo, ViewInput, ViewCheckBox, Linha, Coluna, Botao, Texto } from './style'

export default function CadastroUser(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { navigation } = props

    const efetuarCadastro = async () => {

        try {
            let retorno = await loginService.createUser(email, senha)
            Alert.alert(retorno)
            navigation.navigate("Login")

            console.log(email)
            console.log(senha)
        } catch (error) {
            Alert.alert("Erro ao registrar usuário", error)

            console.log(email)
            console.log(senha)
        }
    }

    return (
        <Container>
            <Titulo>Informe suas credenciais</Titulo>

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

            <Linha>
                <Coluna>
                    <Botao onPress={efetuarCadastro}>
                        <Texto>Registrar usuário</Texto>
                    </Botao>
                </Coluna>
            </Linha>

            <StatusBar style="auto" />
        </Container>
    );
}