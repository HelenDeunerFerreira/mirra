import React, { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

import * as doacaoService from "../../services/DoacaoService"
import RegistroPontoDoacao from '../../components/RegistroPontoDoacao'

import { Container, ViewCadastro, Titulo, ViewInput, Linha, Coluna, Botao, Texto } from './style'
import { StatusBar } from 'expo-status-bar';
import { TextInput, Alert, FlatList } from 'react-native'

export default function CadastroDoacao(props) {

    const [form, setForm] = useState({})
    const { navigation } = props
    const [doacao, setDoacao] = useState([])
    const user = useSelector(store => store.user)

    const buscarDoacao = async () => {
        try {
            let dados = await doacaoService.getDoacaoUid(user.uid)
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
                navigation.navigate("Mapa", { atualizar: true })
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos, em especial o endereço!")
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
        }
    }


    return (
        <Container>
            <ViewCadastro>
                <Titulo>Informe os dados do local de doação:</Titulo>
                <Titulo>{user.email}</Titulo>

                <ViewInput>
                    <TextInput
                        placeholder='Nome do Responsável'
                        value={form.nome_responsavel}
                        onChangeText={(value) => setForm(Object.assign({}, form, { nome_responsavel: value }))}
                    />
                </ViewInput>

                <ViewInput>
                    <TextInput
                        placeholder='Endereço Completo'
                        value={form.endereco}
                        onChangeText={(value) => setForm(Object.assign({}, form, { endereco: value }))}

                    />
                </ViewInput>

                <Linha>
                    <Coluna>
                        <Botao onPress={efetuarCadastro}>
                            <Texto>Registrar ponto de doação</Texto>
                        </Botao>
                    </Coluna>
                </Linha>

            </ViewCadastro>

            <StatusBar style="auto" />

            <FlatList
                data={doacao}
                renderItem={({ item }) => <RegistroPontoDoacao dados={item} buscarDoacao={buscarDoacao} navigation={navigation} />}
                keyExtractor={item => item.key}
            />

        </Container>
    );
}