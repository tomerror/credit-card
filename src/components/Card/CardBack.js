import styled from 'styled-components';

const Back = styled.div`
    display: grid;
    grid-template-rows: 6% 20% 35%;
    color: white;
`

const BlackBar = styled.div`
    background: black;
`

const Signature = styled.div`
    background: white;
    color: black;
    width: 90%;
    height: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: 80% 20%;
    border-radius: 5px;
`
const Null = styled.div`
    background: #e0e0e0;
    
    border-radius: 5px 0 0 5px;
`
const CVV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: .2em;
    font-style: italic;
    position: relative;

    &::after{
        content: "CVV";
        position: absolute;
        top: -37%;
        right: 5%;
        font-size: 1.1rem;
        font-style: initial;
        letter-spacing: 0;
        color: white;
    }
`

const CardBack = (props) => {
    return (
        <Back className="side side--back">
            <div style={{ textTransform: 'uppercase' }}>{props.warning}</div>
            <BlackBar></BlackBar>
            <Signature>
                <Null></Null>
                <CVV>{props.cvv}</CVV>
            </Signature>
        </Back>
    )
}

export default CardBack;