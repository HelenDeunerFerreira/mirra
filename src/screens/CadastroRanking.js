import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import * as rankingService from "../services/RankingService"
import Registro from '../components/Registro';
import { useDispatch, useSelector } from 'react-redux';

export default function CadastroRanking(props) {

    const [form, setForm] = useState({})
    const { navigation } = props
    const [ranking, setRanking] = useState([])
    const user = useSelector(store => store.user)

    const buscarRanking = async () => {
        try {
            let dados = await rankingService.getRankingUid(user.uid)
            //console.log(dados)
            setRanking(dados)
        } catch (error) {

        }
    }

    useLayoutEffect(() => {
        buscarRanking()
    }, [])


    const efetuarCadastro = async () => {
        if (form.nome && form.numero_doacoes) {
            try {
                await rankingService.createRanking(form, user.uid)
                Alert.alert("Dados Registrados com Sucesso")
                setForm({})
                // navigation.navigate("Mapa", { atualizar: true })
                console.log(form)
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos!")
                console.log(form)
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
            console.log(form)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Informe os dados:</Text>
            <Text style={{ textAlign: "center" }}>{user.email}</Text>

            <View style={styles.input}>
                <TextInput
                    placeholder='Nome do doador'
                    value={form.nome}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nome: value }))}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Número de doações'
                    value={form.numero_doacoes}
                    onChangeText={(value) => setForm(Object.assign({}, form, { numero_doacoes: value }))}

                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Registrar'
                        onPress={efetuarCadastro}
                    />
                </View>
            </View>
            <StatusBar style="auto" />

            <FlatList
                data={ranking}
                renderItem={({ item }) => <Registro dados={item} buscarRanking={buscarRanking} navigation={navigation} />}
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