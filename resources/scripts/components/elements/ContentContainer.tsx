import styled from 'styled-components/macro';
import { breakpoint } from '@/theme';
import tw from 'twin.macro';

const ContentContainer = styled.div`
    max-width: 1200px;
    ${tw`mx-4 py-6`};

    & > .page-header {
        ${tw`mb-4`};
    }

    & > .page-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        ${breakpoint('md')`
            grid-template-columns: 2fr 1fr;
        `};
    }

    ${breakpoint('xl')`
        ${tw`mx-auto`};
    `};
`;
ContentContainer.displayName = 'ContentContainer';

export default ContentContainer;
