import React, { useState } from 'react';
import FacetFilter from '../filter/FacetFilter';
import ProductCard from '../Product/ProductCard';
import './shopping.css'
import { products as allProducts } from '../../../assets/product';
import { images } from '../../../assets/images';

const Shopping = () => {
  const [filters, setFilters] = useState({
    productType: {
      'Sets': false,
      'Home decor': false,
    },
    Theme: {
      'Creator Expert': false,
      'Other': false,
      'Botanical Collection': false,
    },
    Interest: {
      'Art': false,
      'Botanicals': false,
      'Decorations': false,
      'Nature Toys': false,
      'Seasonal': false,
    },
    Age: {
      '6+': false,
      '9+': false,
      '18+': false,
    },
    PieceCount: {
      '100-249': false,
      '250-499': false,
      '500-999': false,
    },
    Featured: {
      'New': false,
    },
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const filteredProducts = allProducts.filter(product => {
    // Add filtering logic here based on the selected filters
    const { productType, Theme, Interest, Age, PieceCount, Featured } = filters;

    const isProductTypeMatch = !Object.values(productType).some(v => v) || productType[product.type];
    const isThemeMatch = !Object.values(Theme).some(v => v) || Theme[product.theme];
    const isInterestMatch = !Object.values(Interest).some(v => v) || Interest[product.interest];
    const isAgeMatch = !Object.values(Age).some(v => v) || Age[product.age];
    const isPieceCountMatch = !Object.values(PieceCount).some(v => v) || PieceCount[product.pieceCount];
    const isFeaturedMatch = !Object.values(Featured).some(v => v) || Featured[product.featured];

    return isProductTypeMatch && isThemeMatch && isInterestMatch && isAgeMatch && isPieceCountMatch && isFeaturedMatch;
  });

  return (
    <>
      <div className='shopping-container'>
        <FacetFilter filters={filters} onFilterChange={handleFilterChange} />
        <div className='product-container'>
          {filteredProducts.map(product => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              imageSrc={product.imageSrc}
              description={product.description}
              amount={product.amount}
              quantity={product.quantity}
              link={product.link}
              maxQuantity={product.maxQuantity}
              GST={product.GST}
              freeDelivery={product.freeDelivery}
              deliveryFee={product.deliveryFee}
            />
          ))}
        </div>
      </div>
      {/* <Slider title={'Unlock amazing products'} images={images}/> */}
    </>
  );
}

export default Shopping;
