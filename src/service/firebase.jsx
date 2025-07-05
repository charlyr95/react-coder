

import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getDoc, getFirestore } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOcIl5PhAFbcrl6R4_TcFblcR2u5BXAeE",
    authDomain: "react-coder-9ce68.firebaseapp.com",
    projectId: "react-coder-9ce68",
    storageBucket: "react-coder-9ce68.firebasestorage.app",
    messagingSenderId: "391802802583",
    appId: "1:391802802583:web:e28b3c0bc5e579c35574d2",
    measurementId: "G-QMFM5RLCZQ"
};

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getOneProduct = async (productId) => {
    try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
            return { id: productSnap.id, ...productSnap.data() };
        } else {
            throw new Error("Firebase error: document not found");
        }
    } catch (error) {
        throw error;
    }
};

const createOrder = async (orderData) => {
    try {
        const ordersCollection = collection(db, "orders");
        const orderDoc = await addDoc(ordersCollection, orderData);
        console.log("Order created with ID: ", orderDoc.id);
        return orderDoc.id;
    }
    catch (error) {
        throw error;
    }
};

const createProduct = async (productData) => {
    try {
        const productsCollection = collection(db, "products");
        const productDoc = await addDoc(productsCollection, productData);
        console.log("Product created with ID: ", productDoc.id);
        return productDoc.id;
    } catch (error) {
        throw error;
    }
};

const getProducts = async (filters) => {
    if (!filters || filters.length === 0) {
        return getCollection("products");
    }
    return queryCollection("products", filters);
};

const queryCollection = async (collectionName, filters) => {
    try {
        const collectionRef = collection(db, collectionName);
        const queries = filters.map(({ field, value }) => where(field, "==", value));
        const q = query(collectionRef, ...queries);
        const querySnapshot = await getDocs(q);
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
        if (items.length === 0) {
            throw new Error(`Firebase error: no items found in ${collectionName} for ${field} === ${value}`);
        }
        return items;
    } catch (error) {
        throw error;
    }
};

const getCollection = async (collectionName) => {
    try {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
        if (items.length === 0) {
            throw new Error(`Firebase error: no items found in ${collectionName}`);
        }
        return items;
    } catch (error) {
        throw error;
    }
};


export { createOrder, getProducts, getOneProduct };