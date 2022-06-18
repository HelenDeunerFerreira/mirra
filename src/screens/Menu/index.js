import React from "react";

import { Container, Texto, Botao } from "./style.js";

export default function Menu({ navigation }) {
    return (
        <Container>

            <Botao onPress={() => navigation.navigate('Mapa')}>
                <Texto>
                    Mapa
                </Texto>
            </Botao>

            <Botao onPress={() => navigation.navigate('CadastroDoacao')}>
                <Texto>
                    Cadastrar ponto de doação
                </Texto>
            </Botao>

            <Botao onPress={() => navigation.navigate('RankingDoadores')}>
                <Texto>
                    Ranking dos doadores
                </Texto>
            </Botao>

            <Botao onPress={() => navigation.navigate('SobreApp')}>
                <Texto>
                    Sobre o aplicativo
                </Texto>
            </Botao>

            <Botao onPress={() => navigation.navigate('SobreDev')}>
                <Texto>
                    Sobre a dev
                </Texto>
            </Botao>

        </Container>
    );
}
