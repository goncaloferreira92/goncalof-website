import Card from '../cmp/Card';
const Projects = () => {
    let content = () => {
        return (
            <div>
                <text>This is the content of the Project</text>
                <div style={{ backgroundColor: 'orange', width: '10px', height: '10px' }} />
            </div>
        )
    }
    return (
        <div id='work'>
            <h1 style={{ position: 'absolute' }}>WORK</h1>
            <div style={{
                backgroundColor: 'orange',
                padding: '15px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '80vw',
                flexWrap: 'wrap',
            }}>
                <Card content={content} />
                <Card content={content} />
                <Card content={content} />
                <Card content={content} />
            </div>
        </div>
    )
}

export default Projects;