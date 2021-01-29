import React from 'react';

import GoncaloPhoto from '../img/goncalo_photo.png';

const Home = () => {
    return (
        <div className='home-main-container' id='home'>

            <div style={{
                height: '100%',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <div style={{ width: '100px', height: '100px', margin: '100px', backgroundColor: 'orange' }} />
            </div>
            <div style={{
                height: '100%',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                <div style={{ width: '100px', height: '100px', margin: '100px', backgroundColor: 'orange' }} />
            </div>

            <div className='goncalo-photo-container'>
                <img src={GoncaloPhoto} className='goncalo-photo' alt='goncalo-main' />
            </div>

        </div>
    )
}

export default Home;