import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import * as rankingService from '../services/RankingService'

export default function ListaDoadores(props) {

    const data = props.dados

    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Nome:</Text>
                    <Text>{data.nome}</Text>
                </View>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Número de doações:</Text>
                    <Text>{data.nome}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
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