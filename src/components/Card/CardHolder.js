import React from 'react';
import styled from 'styled-components';
import GoesRotate from '../GoesRotate';

const CardNumber = (props) => {
    let holder = props.holder.map(char => {
        return (<GoesRotate text={char} />)
    })
    return (
        <React.Fragment>
            {holder}
        </React.Fragment>
    )
}

export default CardNumber;