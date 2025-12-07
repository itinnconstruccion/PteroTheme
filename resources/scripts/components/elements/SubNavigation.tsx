import styled from 'styled-components/macro';
import tw, { theme } from 'twin.macro';

const SubNavigation = styled.div`
    ${tw`w-full bg-neutral-800 shadow-sm overflow-x-auto`};
    border-bottom: 1px solid rgba(255,255,255,0.03);

    & > div {
        ${tw`flex items-center text-sm mx-auto px-2`};
        max-width: 1200px;
        gap: 0.25rem;

        & > a,
        & > div {
            ${tw`inline-block py-2 px-3 text-neutral-300 no-underline whitespace-nowrap transition-all duration-150 rounded-md`};
            background: transparent;

            &:not(:first-of-type) {
                ${tw`ml-2`};
            }

            &:hover {
                ${tw`text-neutral-100`};
                transform: translateY(-2px);
            }

            &:active,
            &.active {
                ${tw`text-neutral-100`};
                background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
                box-shadow: inset 0 -3px ${theme`colors.cyan.600`.toString()};
            }
        }
    }
`;

export default SubNavigation;
