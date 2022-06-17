import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as loginService from "../services/LoginService"

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
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Informe suas credenciais</Text>
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
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Registrar Usuário'
                        onPress={efetuarCadastro}
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
        padding: 10
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