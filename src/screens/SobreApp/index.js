import React from 'react'

import { Container, Titulo, Texto, Pergunta } from './style'

export default function SobreApp() {
    return (
        <Container>
            <Titulo>Expo ou CLI</Titulo>
            <Texto>O aplicativo foi construído utilizando o Expo, pois considero mais fácil e rápido para testar, além de ter tido mais experiência com ele.</Texto>

            <Titulo>Arquitetura de Software</Titulo>
            <Texto>No projeto original, adicionei a pasta 'src', a qual possui as pastas 'back-end', responsável pela conexão com o Firebase; 'components', a qual possui o Registro  que cadastra os pontos de doação; 'screens', onde as telas estão armazendas, e 'services', que se divide em 3 partes: actions, reducers e serviços do Firebase.</Texto>

            <Titulo>FAQ</Titulo>
            <Pergunta>Por que é necessária fazer registro e login?</Pergunta>
            <Texto>Para que seja possível cadastrar novos pontos de doação sem correr o risco de outro usuário apagar seus cadastros.</Texto>

            <Pergunta>Como obtenho mais informações sobre os pontos de doação?</Pergunta>
            <Texto>Basta clicar no pin do mapa que aparecerá o nome do responsável, que receberá e contabilizará as doações, e o endereço completo.</Texto>
        </Container>
    )
}