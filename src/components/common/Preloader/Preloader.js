import loadingGif from './../../../assets/img/load-procent.gif';
import React from 'react';

let Preloader = (props) => {
    return (
        <div style={{width: '100%', height: '100%', position: 'fixed'}}><img style={{width: '100%', height: '100%'}}
                                                                             src={loadingGif}/>
        </div>)
};

export default Preloader;