import React from 'react';

const Home = () => {
    return (
        <div style={{
            backgroundColor: 'orange',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} id='home'>

            <div style={{
                height: '100%',
                flexGrow: 1,
                border: '1px solid green',
            }} />
            <div style={{
                height: '100%',
                flexGrow: 1,
                border: '1px solid green',
            }} />

            <div style={{
                position: 'absolute',
                height: '100px',
                width: '100px',
                border: '1px solid blue',
                pointerEvents: 'none',
            }} />

        </div>
    )
}

export default Home;