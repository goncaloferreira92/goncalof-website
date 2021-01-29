import React from 'react';

import GoncaloPhoto from '../img/goncalo_photo.png';

const Home = () => {
    return (
        <div className='home-main-container' id='home'>

            <div style={{
                height: '100%',
                flexGrow: 1,
            }} />
            <div style={{
                height: '100%',
                flexGrow: 1,
            }} />

            <div style={{
                position: 'absolute',
                pointerEvents: 'none',
            }}>
                <img src={GoncaloPhoto} className='goncalo-photo' alt='goncalo-main' />
            </div>

        </div>
    )
}

export default Home;