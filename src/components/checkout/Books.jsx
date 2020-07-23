import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default function Books() {
  return (
    <div style={{
      border: '1px solid #e3e3e3', height: 'fit-content', width: '300px',
      borderRadius: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '20px'
    }}>
      <p className="lean mt-3">Libros</p>
      <div className="mt-3" style={{ display: 'flex', flexDirection: 'row' }}>
        <img style={{ width: 'fit-content' }} src="https://images-na.ssl-images-amazon.com/images/I/51%2BVHAnwBVL.__BG0,0,0,0_FMpng_AC_UL100_SR100,100_.jpg" alt="libro" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '0.7rem', margin: '1px', padding: '1px' }}>Title of the book</p>
          <p style={{ fontSize: '0.7rem', margin: '1px', padding: '1px' }}>Author of the book</p>
          <ReactStars
            value={4}
            size={15}
            isHalf
            edit={false}
            activeColor="#ffd700"
          />
          <p style={{ fontSize: '0.9rem', margin: '1px', padding: '1px' }}>$ 50</p>
        </div>
      </div>
      <div className="mt-3" style={{ display: 'flex', flexDirection: 'row' }}>
        <img style={{ width: 'fit-content' }} src="https://images-na.ssl-images-amazon.com/images/I/713rM6VXvXL.__BG0,0,0,0_FMpng_AC_UL100_SR100,100_.jpg" alt="libro" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '0.7rem', margin: '1px', padding: '1px' }}>Title of the book</p>
          <p style={{ fontSize: '0.7rem', margin: '1px', padding: '1px' }}>Author of the book</p>
          <ReactStars
            value={3}
            size={15}
            isHalf
            edit={false}
            activeColor="#ffd700"
          />
          <p style={{ fontSize: '0.9rem', margin: '1px', padding: '1px' }}>$ 50</p>
        </div>
      </div>
      <div className="mt-3" style={{ display: 'flex', flexDirection: 'row' }}>
        <img style={{ width: 'fit-content' }} src="https://images-na.ssl-images-amazon.com/images/I/81L7XF4hbFL.__BG0,0,0,0_FMpng_AC_UL100_SR100,100_.jpg" alt="libro" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '0.7rem', margin: '1px', padding: '1px' }}>Title of the book</p>
          <p style={{ fontSize: '0.7rem', margin: '1px', padding: '1px' }}>Author of the book</p>
          <ReactStars
            value={4.5}
            size={15}
            isHalf
            edit={false}
            activeColor="#ffd700"
          />
          <p style={{ fontSize: '0.9rem', margin: '1px', padding: '1px' }}>$ 50</p>
        </div>
      </div>
    </div>
  )
}
