import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import * as rankingService from '../services/RankingService'

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
                        props.navigation.navigate("Mapa", { atualizar: true })
                    } catch (error) {
                        Alert.alert("Você não possui permissão para excluir esse registro!")
                    }
                }
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Nome:</Text>
                    <Text>{data.nome}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                    <Button title='Excluir' color={'red'} onPress={excluirRanking} />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        flex: 1,
        flexDirection: "row"
    },
    campo: {
        width: 90
    }

})