import React from 'react';
import styled from 'styled-components';
import GoesUp from '../GoesUp';

const CardNumber = (props) => {
    let number = props.number.map(num => {
        return (<GoesUp text={num} />)
    })
    return (
        <React.Fragment>
            {number}
        </React.Fragment>
    )
}

export default CardNumber;