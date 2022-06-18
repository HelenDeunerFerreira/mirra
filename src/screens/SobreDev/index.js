import React from 'react'

import { Container, Titulo, Texto, Imagem } from './style'

export default function SobreDev() {
    return (
        <Container>
            <Imagem source={require('../../../assets/foto.jpg')} />

            <Texto>Meu nome é Helen, tenho 19 anos e estudo Ciência da Computação na IMED, atualmente estou no terceiro período.</Texto>

            {/* LinkedIn: https://www.linkedin.com/in/helen-deuner-ferreira/
            GitHub: https://github.com/HelenDeunerFerreira  */}
        </Container>
    )
}