import React, { useState, useLayoutEffect } from 'react'

import { StatusBar } from 'expo-status-bar'
import { TextInput, Alert, FlatList } from 'react-native'
import { Container, ViewCadastro, Titulo, ViewInput, Linha, Coluna, Botao, Texto } from './style'

import * as rankingService from "../../services/RankingService"
import RegistroRanking from '../../components/RegistroRanking'
import { useSelector } from 'react-redux'

export default function CadastroRanking(props) {

    const [form, setForm] = useState({})
    const { navigation } = props
    const [ranking, setRanking] = useState([])
    const user = useSelector(store => store.user)

    const buscarRanking = async () => {
        try {
            let dados = await rankingService.getRanking()
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
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos!")
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
        }
    }

    return (
        <Container>

            <ViewCadastro>
                <Titulo>Informe os dados:</Titulo>
                <Titulo>{user.email}</Titulo>

                <ViewInput>
                    <TextInput
                        placeholder='Nome do doador'
                        value={form.nome}
                        onChangeText={(value) => setForm(Object.assign({}, form, { nome: value }))}
                    />
                </ViewInput>

                <ViewInput>
                    <TextInput
                        placeholder='Número de doações'
                        value={form.numero_doacoes}
                        onChangeText={(value) => setForm(Object.assign({}, form, { numero_doacoes: value }))}

                    />
                </ViewInput>
            </ViewCadastro>

            <Linha>
                <Coluna>
                    <Botao onPress={efetuarCadastro}>
                        <Texto>Cadastrar</Texto>
                    </Botao>
                </Coluna>
            </Linha>

            <StatusBar style="auto" />

            <FlatList
                data={ranking}
                renderItem={({ item }) => <RegistroRanking dados={item} buscarRanking={buscarRanking} navigation={navigation} />}
                keyExtractor={item => item.key}
            />

        </Container>
    );
}