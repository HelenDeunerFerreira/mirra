import React from 'react'

import * as rankingService from '../../services/RankingService'

import { Alert } from 'react-native'
import { Container, Campo, Linha, Coluna, Botao, TextoBotao, Texto } from './style'

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
                        <Texto>Nome: </Texto>
                        <Texto>{data.nome}</Texto>
                    </Linha>

                    <Linha>
                        <Texto> - N° de doações: </Texto>
                        <Texto>{data.numero_doacoes}</Texto>
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