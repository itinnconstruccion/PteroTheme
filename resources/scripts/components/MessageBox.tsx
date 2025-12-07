import * as React from 'react';
import tw, { TwStyle } from 'twin.macro';
import styled from 'styled-components/macro';

export type FlashMessageType = 'success' | 'info' | 'warning' | 'error';

interface Props {
    title?: string;
    children: string;
    type?: FlashMessageType;
}

const styling = (type?: FlashMessageType): TwStyle | string => {
    switch (type) {
        case 'error':
            return tw`bg-red-600 border-red-800`;
        case 'info':
            return tw`bg-primary-600 border-primary-800`;
        case 'success':
            return tw`bg-green-600 border-green-800`;
        case 'warning':
            return tw`bg-yellow-600 border-yellow-800`;
        default:
            return '';
    }
};

const getBackground = (type?: FlashMessageType): TwStyle | string => {
    switch (type) {
        case 'error':
            return tw`bg-red-500`;
        case 'info':
            return tw`bg-primary-500`;
        case 'success':
            return tw`bg-green-500`;
        case 'warning':
            return tw`bg-yellow-500`;
        default:
            return '';
    }
};

const Container = styled.div<{ $type?: FlashMessageType }>`
    ${tw`w-full text-sm text-white`};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(255,255,255,0.03);
    background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
    box-shadow: 0 8px 24px rgba(0,0,0,0.45);
    animation: subtle-fade-up 300ms cubic-bezier(.2,.8,.2,1) both;
    ${(props) => styling(props.$type)};
`;
Container.displayName = 'MessageBox.Container';

const MessageBox = ({ title, children, type }: Props) => (
    <Container css={tw`lg:inline-flex`} $type={type} role={'alert'}>
        {title && (
                <span
                    className={'title'}
                    css={[
                        tw`flex items-center rounded-full uppercase px-3 py-1 text-xs font-bold mr-0 leading-none`,
                        getBackground(type),
                        tw`shadow-sm`
                    ]}
                >
                    {title}
                </span>
            )}
            <div css={tw`flex-auto mr-2`}>{children}</div>
            {/* small close / x area can be added here if needed */}
    </Container>
);
MessageBox.displayName = 'MessageBox';

export default MessageBox;
