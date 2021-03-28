import styled from 'styled-components';

const MyBookStyled = styled.div`
    height: ${props => props.size == 'big' ? '300px' : '200px'} ;
    min-width: ${props => props.size == 'big' ? '200px' : '140px'} ;
    background: url(${props => props.coverImage }) center/cover no-repeat;
    border-radius: 2px;
`;

export default MyBookStyled;
