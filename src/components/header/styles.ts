import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    align-items: center;
    padding: 0 30px ;
`;