import styled from 'styled-components';
import CardBack from './CardBack';
import CardFront from './CardFront';

const Card = styled.div`
    perspective: 150rem;

    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;

    .side {
        width: 38rem;
        height: 24rem;
        border-radius: 11px;
        backface-visibility: hidden;
        transition: all 1.2s;

        position: absolute;

        &--front {
            background-image: linear-gradient(75deg,#ffc43f 14%,#f50698);
            transform: rotateY(0deg); 
            padding: 1rem 2rem;

            &::before{
                content: "";
                width: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
                height: 100%;
                filter: blur(10px);
                background-image: linear-gradient(75deg,#ffc43f 14%,#f50698);
                z-index: -1;
            }
        }   
        
        &--back {
            background-image: linear-gradient(255deg,#ffc43f 14%,#f50698);
            transform: rotateY(-180deg);

            &::before{
                content: "";
                width: 100%;
                position: absolute;
                top: -1px;
                left: -1px;
                height: 100%;
                filter: blur(10px);
                background-image: linear-gradient(255deg,#ffc43f 14%,#f50698);
                z-index: -1;
            }
        }
    }

    &:hover .side--front{
        transform: rotateY(180deg);
    }

    &:hover .side--back{
        transform: rotateY(0deg);
    }
`

const Credit = (props) => {
    return (
        <Card>
            <CardFront {...props}/>
            <CardBack cvv={props.cvv}
                warning={props.warning}
            />
        </Card>
    )
}

export default Credit;