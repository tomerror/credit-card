import { useState } from 'react';
import CreditCard from './Card/CreditCard';
import Form from './Form/Form';

import styled from 'styled-components';

const CardForm = styled.div`
    position: relative;    
    width: 50rem;
    height: 50rem;
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem;
`

const CreditCardForm = (props) => {
    const [val, setVal] = useState('');
    const [holder, setHolder] = useState('');
    const [cvv, setCVV] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    return (
        <CardForm>
            <CreditCard cardNumber={val}
                cardHolder={holder}
                cvv={cvv}
                month={month}
                year={year}
            />

            <Form setVal={setVal} setHolder={setHolder} setCVV={setCVV} setMonth={setMonth} setYear={setYear}/>
        </CardForm>
    )
}

export default CreditCardForm;