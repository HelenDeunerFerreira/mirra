import db from "../back-end/firebaseConnect"

import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore'

export const createRanking = (dados, uid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const docId = await addDoc(collection(db, "contabilizacao"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}

export const getRankingUid = (uid) => {

    return new Promise(async (resolve, reject) => {
        try {
            const colecao = collection(db, "contabilizacao")
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

export const getRanking = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "contabilizacao"))
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

export const deleteRanking = (key) => {
    console.log("Delete", key)
    return new Promise(async (resolve, reject) => {

        try {
            await deleteDoc(doc(db, "contabilizacao", key))
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}