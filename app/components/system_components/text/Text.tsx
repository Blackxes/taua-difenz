/**
 * @File contains the component which changes font-style/weight based on properties
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled, { css } from 'styled-components';

import { FontFamily } from '../../../logic/configurations';

const handleFontWeight = (weight: FontWeight) => {
    switch (weight) {
        case 'bold':
            return 'bold';
        case 'light':
            return '200';
        case 'thin':
            return '100';
        case 'normal':
        default:
            return 'normal';
    }
};

const handleFontStyle: Function = (style: FontStyle) => {
    switch (style) {
        case 'italic':
            return 'italic';
        case 'oblique':
            return 'oblique';
        case 'normal':
        default:
            return 'normal';
    }
};

const StyledParagraph = styled.p`
    font-family: ${(props: ParagraphProps) => props.fontFamily || FontFamily};
    ${(props: ParagraphProps) =>
        props.fontStyle &&
        css`
            font-style: ${handleFontStyle(props.fontStyle)};
        `};
    ${(props: ParagraphProps) =>
        props.fontWeight &&
        css`
            font-weight: ${handleFontWeight(props.fontWeight)};
        `};
`;

const StyledInlineParagraph = styled.span(StyledParagraph);

export const Paragraph: React.FC<ParagraphProps> = (props) => <StyledParagraph {...props} />;
export const InlineParagraph: React.FC<ParagraphProps> = (props) => (
    <StyledInlineParagraph {...props} />
);
