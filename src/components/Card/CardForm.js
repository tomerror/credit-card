import { useState } from 'react';
import styled from 'styled-components';
import CreditCard from './CreditCard';
const FormStyle = styled.div`
    background: powderblue;
    margin: 15rem auto;
    width: 60%;
    height: 50rem;
    display: grid;
`

const Form = () => {  
    const [val, setVal] = useState('');
    const [holder, setHolder] = useState('');

    return (
        <FormStyle>
            <CreditCard cardNumber={val} cardHolder={holder}/>

            <input onChange={(e) => setVal(e.target.value)}/>
            <input onChange={(e) => setHolder(e.target.value)}/>
        </FormStyle>
    )
}

export default Form;