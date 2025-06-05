// Importação dos SDKs do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, deleteDoc, addDoc, updateDoc, arrayUnion, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBD6_Xbj3XDsfnnaTEIOtX9kMjj0vhk-wg",
    authDomain: "prolink-37670.firebaseapp.com",
    projectId: "prolink-37670",
    storageBucket: "prolink-37670.appspot.com",
    messagingSenderId: "456051701023",
    appId: "1:456051701023:web:5895fc29736bb03905ac2a"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

console.log("Firebase inicializado com sucesso!");

// Autenticação
export async function loginWithEmail(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Erro no login:", error);
        throw error;
    }
}

export async function sendVerificationEmail(user) {
    try {
        await sendEmailVerification(user);
        console.log("Email de verificação enviado!");
    } catch (error) {
        console.error("Erro ao enviar email de verificação:", error);
    }
}

// Funções de interação social
export async function followUser(followerId, followedId) {
    const followDoc = doc(db, 'following', `${followerId}_${followedId}`);
    const followerDoc = doc(db, 'followers', `${followerId}_${followedId}`);

    await Promise.all([
        setDoc(followDoc, { followerId, followedId, timestamp: serverTimestamp() }),
        setDoc(followerDoc, { followerId, followedId, timestamp: serverTimestamp() })
    ]);
}

export async function unfollowUser(followerId, followedId) {
    const followDoc = doc(db, 'following', `${followerId}_${followedId}`);
    const followerDoc = doc(db, 'followers', `${followerId}_${followedId}`);

    await Promise.all([
        deleteDoc(followDoc),
        deleteDoc(followerDoc)
    ]);
}

// Funções de postagens e interações
export async function likePost(userId, postId) {
    await setDoc(doc(db, 'likes', `${postId}_${userId}`), {
        userId,
        postId,
        timestamp: serverTimestamp()
    });
}

export async function unlikePost(userId, postId) {
    await deleteDoc(doc(db, 'likes', `${postId}_${userId}`));
}

export async function addComment(userId, postId, comment) {
    await addDoc(collection(db, 'comments'), {
        userId,
        postId,
        comment,
        timestamp: serverTimestamp()
    });
}

// Gerenciamento de histórias (Stories)
export async function createStory(userId, storyData) {
    await addDoc(collection(db, 'stories'), {
        userId,
        ...storyData,
        viewers: [],
        timestamp: serverTimestamp(),
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // Expira em 24h
    });
}

export async function viewStory(storyId, viewerId) {
    const storyRef = doc(db, 'stories', storyId);
    await updateDoc(storyRef, {
        viewers: arrayUnion(viewerId)
    });
}

// Função para buscar dados do usuário
export async function getUserData(userId) {
    try {
        const userDoc = await getDoc(doc(db, "usuarios", userId));
        return userDoc.exists() ? userDoc.data() : null;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        throw error;
    }
}

// Exportação dos serviços
export {
    auth,
    db,
    storage,
    signInWithEmailAndPassword,
    sendEmailVerification
};
