import db from "../back-end/firebaseConnect"

import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore'
import { searchByAddress } from "./LocationService"


export const createPontoDoacao = (dados, uid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let coordenadas = await searchByAddress(dados.endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            dados.lat = lat
            dados.lng = lng
            dados.uid = uid
            const docId = await addDoc(collection(db, "pontosDoacao"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}


export const getDoacaoUid = (uid) => {

    return new Promise(async (resolve, reject) => {
        try {
            const colecao = collection(db, "pontosDoacao")
            const q = query(colecao, where("uid", "==", uid))
            const querySnapshot = await getDocs(q)
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.key = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}

export const getPontoDoacao = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "pontosDoacao"))
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.key = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}

export const deletePontoDoacao = (key) => {
    console.log("Delete", key)
    return new Promise(async (resolve, reject) => {

        try {
            await deleteDoc(doc(db, "pontosDoacao", key))
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}