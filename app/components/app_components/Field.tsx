/**
 * @File contains the field component
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import FieldTile from './FieldTile';
import { getParsedFieldDesign } from '../../logic/source/fieldFunctions';

const calculateFieldTileWidth = (
    baseFieldWidth: number,
    columnsCount: number,
    tileSpacing: number
) => (baseFieldWidth - (columnsCount + 1) * tileSpacing) / columnsCount;

const calculateFieldTileHeight = (
    baseFieldHeight: number,
    rowsCount: number,
    tileSpacing: number
) => (baseFieldHeight - (rowsCount + 1) * tileSpacing) / rowsCount;

const StyledFieldContainer: React.FC<FieldProps> = styled.div`
    padding: ${(props: FieldProps) => props.tileSpacing || 1}px;
    width: ${(props: FieldProps) => props.fieldWidth}px;
    height: ${(props: FieldProps) => props.fieldHeight}px;
    display: grid;
    grid-gap: ${(props: FieldProps) => props.tileSpacing || 1}px;
    grid-auto-flow: row;
	${({ fieldWidth, fieldHeight, columnsCount, rowsCount, tileSpacing }: FieldProps) =>
        css`
            grid-template:
                repeat(
                    ${rowsCount},
                    ${calculateFieldTileHeight(fieldHeight, rowsCount, tileSpacing)}px
                )
                /
                repeat(
                    ${columnsCount},
                    ${calculateFieldTileWidth(fieldWidth, columnsCount, tileSpacing)}px
                );
        `}
	}
    align-content: center;
    background: antiquewhite;
`;

const Field: React.FC<FieldProps> = (props) => {
    const fieldItems = [];
    const tileTypes: Array<FieldTypes | string> = getParsedFieldDesign(props.design);

    for (let index = 0; index < props.columnsCount * props.rowsCount; index++) {
        fieldItems.push(<FieldTile type={tileTypes[index]} />);
    }

    return <StyledFieldContainer {...props}>{fieldItems}</StyledFieldContainer>;
};

export default Field;
