import React from 'react'

import { Container, Linha, Coluna, Texto } from './style'

export default function ListaDoadores(props) {

    const data = props.dados

    return (
        <Container>

            <Linha>
                <Coluna>
                    <Texto>Nome:</Texto>
                    <Texto>{data.nome}</Texto>
                </Coluna>

                <Coluna>
                    <Texto>Número de doações:</Texto>
                    <Texto>{data.numero_doacoes}</Texto>
                </Coluna>
            </Linha>

        </Container>
    )
}