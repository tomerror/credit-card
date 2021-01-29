import styled from 'styled-components';

const Style = styled.div`
    
`

const Form = (props) => {
    return (
        <Style>
            <input onChange={(e) => props.setVal(e.target.value)} maxLength="16"/>
            <input onChange={(e) => props.setHolder(e.target.value)} />
            <input onChange={(e) => props.setCVV(e.target.value)} maxLength="3"/>

            <select onChange={(e) => props.setMonth(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <select onChange={(e) => props.setYear(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </Style>
    )
}

export default Form;