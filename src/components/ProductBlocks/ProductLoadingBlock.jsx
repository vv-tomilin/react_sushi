import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductLoadingBlock = (props) => (
  <div className='product-list-block__load-svg'>
    <ContentLoader
      speed={2}
      viewBox="0 0 380 380"
      style={{width: '100%', height: 'auto'}}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" />
      <rect x="6" y="251" rx="0" ry="0" width="201" height="11" />
      <rect x="7" y="272" rx="0" ry="0" width="201" height="11" />
      <rect x="7" y="293" rx="0" ry="0" width="201" height="11" />
      <rect x="292" y="251" rx="0" ry="0" width="47" height="17" />
      <rect x="8" y="318" rx="8" ry="8" width="100" height="39" />
      <rect x="5" y="3" rx="10" ry="10" width="366" height="197" />
      <circle cx="189" cy="337" r="21" />
      <rect x="251" y="314" rx="20" ry="20" width="117" height="45" />
      <rect x="6" y="218" rx="0" ry="0" width="136" height="23" />
    </ContentLoader>
  </div>
);

export default ProductLoadingBlock;
