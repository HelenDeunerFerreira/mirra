import React from 'react'

import * as doacaoService from '../../services/DoacaoService'

import { Alert } from 'react-native'
import { Container, Campo, Linha, Coluna, Botao, TextoBotao, Texto } from './style'

export default function RegistroPontoDoacao(props) {

    const data = props.dados

    const excluirDoacao = () => {

        Alert.alert("Deseja Excluir:", "Esses dados serão apagados para sempre!", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "OK", onPress: async () => {
                    try {
                        await doacaoService.deleteDoacao(data.key)
                        Alert.alert("Dados Excluídos com Sucesso")
                        props.navigation.navigate("Mapa", { atualizar: true })
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
                        <Texto>Endereço: </Texto>
                        <Texto>{data.endereco}</Texto>
                    </Linha>

                    <Coluna>
                        <Botao onPress={excluirDoacao}>
                            <TextoBotao>
                                Excluir
                            </TextoBotao>
                        </Botao>
                    </Coluna>
                </Linha>
            </Campo>
        </Container >
    )
}