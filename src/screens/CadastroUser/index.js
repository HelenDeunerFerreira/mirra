import React, { useState } from 'react'

import * as loginService from "../../services/LoginService"

import { StatusBar } from 'expo-status-bar'
import { TextInput, Alert } from 'react-native'
import { Container, Titulo, ViewInput, Linha, Coluna, Botao, Texto } from './style'

export default function CadastroUser(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { navigation } = props

    const efetuarCadastro = async () => {

        try {
            let retorno = await loginService.createUser(email, senha)
            Alert.alert(retorno)
            navigation.navigate("Login")
        } catch (error) {
            Alert.alert("Erro ao registrar usuário", error)
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