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

const calculateFieldWidth = (baseFieldWidth: number, columnsCount: number, tileSpacing: number) =>
    baseFieldWidth + (columnsCount + 1) * tileSpacing || 1;
const calculateFieldHeight = (baseFieldHeight: number, rowsCount: number, tileSpacing: number) =>
    baseFieldHeight + (rowsCount + 1) * tileSpacing || 1;
const calculateFieldTileWidth = (baseFieldWidth: number, columnsCount: number) =>
    baseFieldWidth / columnsCount;
const calculateFieldTileHeight = (baseFieldWidth: number, rowsCount: number) =>
    baseFieldWidth / rowsCount;

const StyledFieldContainer: React.FC<FieldProps> = styled.div`
    padding: ${(props: FieldProps) => props.tileSpacing || 1}px;
    width: ${(props: FieldProps) =>
        calculateFieldWidth(props.fieldWidth, props.columnsCount, props.tileSpacing)}px;
    height: ${(props: FieldProps) =>
        calculateFieldHeight(props.fieldHeight, props.rowsCount, props.tileSpacing)}px;
    display: grid;
    grid-gap: ${(props: FieldProps) => props.tileSpacing || 1}px;
    grid-auto-flow: row;
	${({ fieldWidth, fieldHeight, columnsCount, rowsCount }: FieldProps) =>
        css`
            grid-template:
                repeat(${rowsCount}, ${calculateFieldTileWidth(fieldHeight, columnsCount)}px) /
                repeat(${columnsCount}, ${calculateFieldTileHeight(fieldWidth, rowsCount)}px);
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
