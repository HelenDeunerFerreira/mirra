import db from "../back-end/firebaseConnect";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export const createUser = (email, senha) => {

    return new Promise((resolve, reject) => {
        try {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    resolve("Usuário criado com sucesso!")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    if (errorCode === "auth/invalid-email")
                        reject("E-mail informado incorretamente!")
                    else {
                        reject("Verifique suas credenciais (senha, email) e tente novamente!")
                    }
                });
        } catch (error) {
            reject(error)
        }
    })
}

export const login = (email, senha) => {

    return new Promise((resolve, reject) => {
        try {
            const auth = getAuth()

            signInWithEmailAndPassword(auth, email, senha)
                .then((data) => {
                    const user = data.user
                    resolve(user)
                })
                .catch(error => {
                    const errorCode = error.code
                    if (errorCode === "auth/user-not-found")
                        reject("Usuário não encontrado!")
                    else
                        reject("Usuário ou senha inválidos!")

                })
        } catch (error) {
            reject(error)
        }
    })
}


export const logoff = () => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            resolve()
        }).catch((error) => {
            reject(error)
        });

    })
}