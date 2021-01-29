import styled from 'styled-components';

const GoRotate = styled.div`
    position: relative;  
    width: 1.4rem;  

    .item {
        position: absolute;
        top: 0;
        left: 0;
        transition: all .2s;

        ${ ({text}) => text.length === 0 && `
            opacity: 0;
            transform: translate(0px, 20px);    
        `}

        ${ ({text}) => text.length > 0 && `
            transform: translate(0px, 0px);
            opacity: 1;
        `}
    }
`

const Rotate = (props) => {
    return (
        <GoRotate text={props.text}>
            <div className="item">
                {props.text}
            </div>
        </GoRotate>
    )
}

export default Rotate;