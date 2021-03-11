import React from 'react';
import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollection} from '../../redux/shop/shop.selector';

const CollectionOverview=({collections})=>(
    <div className='collection-overview'>
    {
        collections.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
        }
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectShopCollection
})
export default connect(mapStateToProps)(CollectionOverview);