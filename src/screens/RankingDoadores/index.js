import React, { useState, useLayoutEffect } from 'react'

import ListaDoadores from '../../components/ListaDoadores'

import { Container, Texto, Botao } from './style'
import { FlatList } from 'react-native'

export default function RankingDoadores({ navigation }) {

    const [ranking, setRanking] = useState([])

    const buscarRanking = async () => {
        try {
            let dados = await rankingService.getRanking()
            console.log(dados)
            setRanking(dados)
        } catch (error) {

        }
    }

    useLayoutEffect(() => {
        buscarRanking()
    }, [])

    return (
        <Container>
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