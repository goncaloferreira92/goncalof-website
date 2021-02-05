
import GoncaloPhoto from '../img/goncalo_photo.png';

const Home = () => {
    const transitionOnMouseLeave = () => {
        let element: any = document.querySelector('.goncalo-photo');
        element != null && (element.style.transition = '200ms ease-in-out');
        // TODO: there should be a way of knowing when the animation stops and perform a callback e.g.: requestAnimationFrame();
        setTimeout(() => {
            element != null && (element.style.transition = 'none');
            // This is to set the transition only to the hover, otherwise the Auto Dimension will also be slaggy. :)
            // https://stackoverflow.com/questions/26095149/why-is-document-queryselector-not-working-on-pseudo-element
            var sheet = document.styleSheets[0];
            var rules = sheet.rules;
            sheet.insertRule('.goncalo-photo:hover { transition: 200ms ease-in-out; }', rules.length);
        }, 300);
    }
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
                <img src={GoncaloPhoto} className='goncalo-photo' alt='goncalo-main' onMouseLeave={() => transitionOnMouseLeave()} />
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