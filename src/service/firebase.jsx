

import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getDoc } from "firebase/firestore";
import { db } from "./service/firebase.jsx";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();

const getProduct = async (productId) => {
    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
        return { id: productSnap.id, ...productSnap.data() };
    } else {
        console.error("No such document!");
        return null;
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
        console.error("Error creating order: ", error);
        throw error;
    }
};

const getCategoryProducts = async (category) => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
};

const getGenderProducts = async (gender) => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("gender", "==", gender));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
};

const getProducts = async () => {
    const productsCollection = collection(db, "products");
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
};
    

export { db, app, getProduct, createOrder, getCategoryProducts, getGenderProducts, getProducts };