import styled from 'styled-components';

const GoUp = styled.div`
    position: relative;    
    width: 1rem;

    &::before {
        content: ${(props) => props.sign ? `'${props.sign}'` : `'#'`};
        position: absolute;
        top: 0;
        left: 0;
        
        transition: all .2s;
        ${ ({text}) => text.length === 0 && `
            opacity: 1;
            transform: translate(0px, 0px);    
        `}

        ${ ({text}) => text.length > 0 && `
            transform: translate(0px, -20px);
            opacity: 0;
        `}
    }

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

    &:nth-child(4n){
        margin-right: 2.5rem;
    }
`

const Up = (props) => {
    return (
        <GoUp text={props.text} sign={props.sign}>
            <div className="item">
                {props.text}
            </div>
        </GoUp>
    )
}

export default Up;