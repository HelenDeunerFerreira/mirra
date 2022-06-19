import React from 'react'

import { Alert } from 'react-native'
import { Container, Campo, Linha, Coluna, Botao, TextoBotao, Texto } from './style'

import * as rankingService from '../../services/RankingService'

export default function Ranking(props) {

    const data = props.dados

    const excluirRanking = () => {

        Alert.alert("Deseja Excluir:", "Esses dados serão apagados para sempre!", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "OK", onPress: async () => {
                    try {
                        await rankingService.deleteRanking(data.key)
                        Alert.alert("Dados Excluídos com Sucesso")
                    } catch (error) {
                        Alert.alert("Você não possui permissão para excluir esse registro!")
                    }
                }
            }
        ])
    }

    return (
        <Container>
            <Campo>
                <Linha>
                    <Linha>
                        <Texto>Nome:</Texto>
                        <Texto>{data.nome}</Texto>
                    </Linha>

                    <Coluna>
                        <Botao onPress={excluirRanking}>
                            <TextoBotao>
                                Excluir
                            </TextoBotao>
                        </Botao>
                    </Coluna>
                </Linha>
            </Campo>
        </Container>
    )
}