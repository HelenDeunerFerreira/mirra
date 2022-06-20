import React from 'react'

import { Container, Linha, Texto, Tabela } from './style'

export default function ListaDoadores(props) {

    const data = props.dados

    return (
        <Container>

            <Linha>


                <Tabela>
                    <Texto> {data.nome}</Texto>
                </Tabela>

                <Tabela>
                    <Texto> {data.numero_doacoes}</Texto>
                </Tabela>

            </Linha>

        </Container>
    )
}