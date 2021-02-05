import GoncaloPhoto from '../img/goncalo_photo.png';

const Home = () => {
    return (
        <div className='home-main-container' id='home'>

            <div className='left-text'>
                <div className='child' />
            </div>
            <div className='right-text'>
                <div className='child' />
                <p></p>
            </div>

            <div className='goncalo-photo-container'>                
                <img src={GoncaloPhoto} className='goncalo-photo' alt='goncalo-main' />
            </div>
            <div className='text-and-links'>
                <h1>
                    Hi,
                    I'm Gonçalo.
                </h1>

                <h4><a href="#work">work</a></h4>
                <h4><a href="#blog">blog</a></h4>
                <h4><a href="#about">about</a></h4>
                <h4><a href="#contact">contact</a></h4>
            </div>

        </div>
    )
}

export default Home;