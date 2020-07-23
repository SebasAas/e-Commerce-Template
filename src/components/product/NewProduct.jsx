/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { addNewProduct } from '../../server/actions/actionsProducts';

export default function NewProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productRating, setProductRating] = useState('');
  const [productImage, setProductImage] = useState('');

  const enviarForm = (e) => {
    e.preventDefault();

    const newProduct = addNewProduct(productName, productDescription, productPrice, productRating, productImage);

    if (newProduct.status === 200) return alert('Se ha añadido correctamente un documento');

    alert('Se ha producido un error');
  };

  // const leerDatos = (e) => {
  //   e.preventDefault();

  //   db.collection('products').get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.data());
  //       });
  //     });
  // };

  return (
    <div>
      <form onSubmit={enviarForm}>
        Nombre del producto
        {' '}
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        Descripcion
        {' '}
        <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
        Precio
        {' '}
        <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        Rating
        {' '}
        <input type="number" value={productRating} onChange={(e) => setProductRating(e.target.value)} required />
        Image
        {' '}
        <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} required />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
