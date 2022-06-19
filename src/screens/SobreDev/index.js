import React, { useCallback } from 'react'

import { Container, Imagem, Texto, Botao, TextoBotao, Linha } from './style'
import { Alert, Linking } from "react-native"

export default function SobreDev() {

    const OpenURLButton = ({ url, children, name }) => {
        const handlePress = useCallback(async () => {
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);

        return (<Botao>
            <TextoBotao onPress={handlePress}>{name}</TextoBotao>
        </Botao>);
    };

    const openLink = useCallback(async () => {
        const supported = await Linking.canOpenURL('https://www.linkedin.com/in/helen-deuner-ferreira/');

        if (supported) {
            await Linking.openURL('https://www.linkedin.com/in/helen-deuner-ferreira/');
        } else {
            Alert.alert(`Don't know how to open this URL: ${'https://www.linkedin.com/in/helen-deuner-ferreira/'}`);
        }
    }, []);

    return (
        <Container>
            <Imagem source={require('../../../assets/foto.jpg')} />

            <Texto>Meu nome é Helen, tenho 19 anos e estudo Ciência da Computação na IMED, atualmente estou no terceiro período.</Texto>

            <Linha>
                <OpenURLButton name={'LinkedIn'} url={'https://www.linkedin.com/in/helen-deuner-ferreira/'} />
                <OpenURLButton name={'GitHub'} url={'https://github.com/HelenDeunerFerreira'} />
            </Linha>

        </Container>
    )
}