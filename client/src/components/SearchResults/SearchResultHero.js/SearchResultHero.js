import styled from 'styled-components';

const SearchResultHero = styled.div`
    width: 60px;
    height: 80px;
    grid-row: 1/2;
    grid-column: 1/1;
    background: url(${props => props.img}) center/cover no-repeat;
`;

export default SearchResultHero;