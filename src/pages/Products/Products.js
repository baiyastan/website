import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour} from './Data';
import { InfoSection } from '../../components';

const Products = () => {
    return (
        <>
          
           <InfoSection {...homeObjTwo}/>
           <InfoSection {...homeObjThree}/>
           <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Products;
