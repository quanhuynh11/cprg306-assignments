import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId, itemListStateSetter) {
    try {
        const allItemsReference = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItemsReference);
        const itemsSnapshot = await getDocs(allItemsQuery);
        let itemList = [];
        itemsSnapshot.forEach(
            (docSnap) => {
                let thisItem = {
                    ...docSnap.data()
                };
                itemList.push(thisItem);
            }
        );
        itemListStateSetter(itemList);
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    }
};

export async function addItem(userId, item) {
    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemReference, item);
        return newItemPromise.id;
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    }
};

export async function dbDeleteItem(userId, item) {
    try {
        const deleteItemReference = doc(db, "users", userId, "items", item.id);
        await deleteDoc(deleteItemReference);
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    }
};