import React, { useState, useLayoutEffect } from 'react'

import ListaDoadores from '../../components/ListaDoadores'
import * as rankingService from '../../services/RankingService'

import { Container, Dado, Texto, Botao, Linha } from './style'
import { FlatList } from 'react-native'

export default function RankingDoadores({ navigation }) {

    const [ranking, setRanking] = useState([])

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

    return (
        <Container>

            <Linha>
                <Dado>Nome</Dado>
                <Dado>N° de doações</Dado>
            </Linha>

            <FlatList
                data={ranking}
                renderItem={({ item }) => <ListaDoadores dados={item} buscarRanking={buscarRanking} navigation={navigation} />}
                keyExtractor={item => item.key}
            />

            <Botao onPress={() => navigation.navigate('CadastroRanking')}>
                <Texto>
                    Adicionar ao ranking
                </Texto>
            </Botao>

        </Container>
    )
}