import React, {Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";


export const SuspenseLazyLoading = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/>}><Component title={'AS'} {...props} /></Suspense>
    }

};