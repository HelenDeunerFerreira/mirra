import React, { useState, useLayoutEffect } from 'react'

import ListaDoadores from '../../components/ListaDoadores'

import { Container, Titulo, Texto, Botao, FlatlistDoadores } from './style'

export default function RankingDoadores({ navigation }) {

    const [ranking, setRanking] = useState([])

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

    return (
        <Container>
            <FlatlistDoadores
                data={ranking}
                renderItem={({ item }) => <ListaDoadores dados={item} buscarRanking={buscarRanking} navigation={navigation} />}
                keyExtractor={item => item.key}
            />

            <Botao onPress={() => navigation.navigate('CadastroRanking')}>
                <Texto>
                    Adicionar no ranking
                </Texto>
            </Botao>
        </Container>
    )
}