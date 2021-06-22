import React, {useContext} from 'react';
//redux remove
//import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
//redux remove
//import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionsContext from '../../contexts/collections/collections.context.js'

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId]

  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

//not using redux
// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage;
