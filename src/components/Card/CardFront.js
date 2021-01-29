import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardNumber from './CartNumber';
import GoesUp from '../GoesUp';

const Front = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 5% 20% 52% 18% 1fr;
`
const GoldChip = styled.div`    
    grid-row: 2/3;
    grid-column: 1/2;
`
const Logo = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const CardNumberStyle = styled.div`
    font-size: 1.8rem;
    font-family: sans-serif;
    color: white;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: .4rem;
    width: 94%;
    height: 3.5rem;
`
const CardHolderStyle = styled.div`
    font-size: 1.4rem;
    font-family: sans-serif;
    text-transform: uppercase;
    color: white;
    text-align: left;
    width: 92%;
    
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`
const Details = styled.div`
    grid-row: 4/5;
    grid-column: 1/3;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .title{
        text-transform: capitalize;
        font-size: 1.2rem;
        color: #484848;
        font-weight: 600;
    }

    .value{
        text-transform: uppercase;
        font-size: 1.4rem;
        color: #fff;
        font-weight: 400;
        display: flex;
        justify-content: center;
    }
`
const CardFront = (props) => {
    const [cardNumber, setCardNumber] = useState([]);
    const [cardHolder, setCardHolder] = useState([]);

    useEffect(() => {
        let newNumber = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        console.log(props.cardNumber)
        let numberOfIteration = props.cardNumber.length < 16 ? props.cardNumber.length : 16;
        for (let i = 0; i < numberOfIteration; i++) {
            if(Number.isInteger(+props.cardNumber[i])){
                newNumber[i] = props.cardNumber[i];
            } else {
                i = numberOfIteration
            }
        }
        setCardNumber(newNumber);
    }, [props.cardNumber])

    useEffect(() => {
        let name = [];
        console.log(props.cardHolder)
        for (let i = 0; i < props.cardHolder.length; i++) {
            name[i] = props.cardHolder[i];
        }
        setCardHolder(name);
    }, [props.cardHolder])

    return (
        <Front className="side side--front">
            <GoldChip>
                <img src="img/chip.png" alt="chip" style={{ height: '100%', justifyContent: 'flex-start', display: 'flex', marginLeft: '6%' }} />
            </GoldChip>
            <Logo>
                <img src="img/logo.png" alt="logo" style={{ height: '60%', marginRight: '6%' }} />
            </Logo>
            <div style={{ gridRow: '3 / 4', gridColumn: '1 / 3', display: 'flex', alignItems: 'center' }}>
                <CardNumberStyle>
                    <CardNumber number={cardNumber} />
                </CardNumberStyle>
            </div>
            <Details>
                <div style={{ width: '80%', textAlign: 'left' }}>
                    <div className="title">card holder</div>
                    <CardHolderStyle>
                        {props.cardHolder ? cardHolder : 'full name'}
                    </CardHolderStyle>
                </div>
                <div style={{ width: '20%' }}>
                    <div className="title">expires</div>
                    <div className="value">
                        <div style={{ width: '2rem'}}>
                            <GoesUp sign={'MM'} text={props.month} />
                        </div>
                        <p style={{ margin: '0 .8rem'}}>/</p>
                        <div style={{ width: '2rem'}}>
                            <GoesUp sign={'YY'} text={props.year} />
                        </div>
                    </div>
                </div>
            </Details>
        </Front>
    )
}

export default CardFront;