import styled from '@emotion/styled';

import { Calculator } from './Calculator';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px;
`;

export const App = () => {
    return (
        <Container>
            <Calculator />
        </Container>
    );
};
