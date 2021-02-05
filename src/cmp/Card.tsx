interface CardProps {
    content: () => JSX.Element
}
const Card = ({ content }: CardProps) => {
    return (
        <div className='card-component-container'>
            { content }
        </div>
    )
}

export default Card;