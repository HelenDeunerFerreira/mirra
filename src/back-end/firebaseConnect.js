import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBYJ-6p3_2bZ1pn0cbCcktUCppMnisOUaM",
    authDomain: "mirra-60063.firebaseapp.com",
    projectId: "mirra-60063",
    storageBucket: "mirra-60063.appspot.com",
    messagingSenderId: "661403541623",
    appId: "1:661403541623:web:7c42b64ad7bd8c179b6672"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db