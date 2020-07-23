/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';
import { db } from '../firebase';

export const addNewProduct = (name, description, price, rating, image) => {

  const idDocument = db.collection('products').doc();

  try {
    idDocument.set({
      id: idDocument.id,
      name: name,
      description: description,
      price: parseFloat(price),
      image: image,
      rating: parseFloat(rating),
      timestamp_start: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { document: idDocument, id: idDocument.id, status: 200 }
  } catch {
    console.log("Se produjo un error", idDocument);
    return { status: 403, message: "Error al guardar un producto, intente mas tarde" }
  }

};

export const getAllProducts = () => {
  return db.collection('products').orderBy('rating', 'desc').limit(25).get();
};

export const getProduct = (id) => db.collection('products').doc(id).get();

// FriendlyEats.prototype.getDocumentsInQuery = function (query, renderer) {
//   query.onSnapshot(function (snapshot) {
//     if (!snapshot.size) { return renderer.empty(); } // Display "There are no restaurants".

//     snapshot.docChanges().forEach(function (change) {
//       if (change.type === 'removed') {
//         renderer.remove(change.doc);
//       } else {
//         renderer.display(change.doc);
//       }
//     });
//   });
// };