import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import * as doacaoService from "../services/DoacaoService"
import Registro from '../components/Registro';
import { useDispatch, useSelector } from 'react-redux';

export default function CadastroDoacao(props) {

    const [form, setForm] = useState({})
    const { navigation } = props
    const [doacao, setDoacao] = useState([])
    const user = useSelector(store => store.user)

    const buscarDoacao = async () => {
        try {
            let dados = await doacaoService.getDoacaoUid(user.uid)
            //console.log(dados)
            setDoacao(dados)
        } catch (error) {

        }
    }

    useLayoutEffect(() => {
        buscarDoacao()
    }, [])


    const efetuarCadastro = async () => {
        if (form.nome_responsavel && form.endereco) {
            try {
                await doacaoService.createPontoDoacao(form, user.uid)
                Alert.alert("Dados Registrados com Sucesso")
                setForm({})
                navigation.navigate("Menu", { atualizar: true })
                console.log(form)
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos, em especial o endereço!")
                console.log(form)
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
            console.log(form)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Informe os dados do local de doação:</Text>
            <Text style={{ textAlign: "center" }}>{user.email}</Text>

            <View style={styles.input}>
                <TextInput
                    placeholder='Nome do Responsável'
                    value={form.nome_responsavel}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nome_responsavel: value }))}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Endereço Completo'
                    value={form.endereco}
                    onChangeText={(value) => setForm(Object.assign({}, form, { endereco: value }))}

                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Registrar ponto de doação'
                        onPress={efetuarCadastro}
                    />
                </View>
            </View>
            <StatusBar style="auto" />

            <FlatList
                data={doacao}
                renderItem={({ item }) => <Registro dados={item} buscarDoacao={buscarDoacao} navigation={navigation} />}
                keyExtractor={item => item.key}
            />
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
        width: "99%",
        padding: 3,
        borderRadius: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 5
    }
});