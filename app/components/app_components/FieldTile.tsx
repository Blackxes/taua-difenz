/**
 * @File contains the field tiles and their configurations
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import GrassTileBackground from '../../../Assets/Images/Field/grasstile.png';
import PathTileBackground from '../../../Assets/Images/Field/pathtile.png';
import RockTileBackground from '../../../Assets/Images/Field/rocktile.png';
import BrookTileBackground from '../../../Assets/Images/Field/brooktile.png';

const handleFieldTileBackground = (type: FieldTypes) => {
    // switch(type) {
    // 	case 'GRASS'
    // }
};

const StyledFieldTileBase = styled.div`
	margin: 0;
	padding: 5px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: papayawhip;
	font-family: 'Consolas';
	border: 2px dashed ${(props: any) => (props.isBuilding ? '#ea7745' : 'transparent')};

	:hover {
		border-color: antiquewhite};
	}
`;

const StyledFieldTileGrass = styled(StyledFieldTileBase)`
    background: url(${GrassTileBackground});
`;

const StyledFieldTilePath = styled(StyledFieldTileBase)`
    background: url(${PathTileBackground});
`;

const StyledFieldTileRock = styled(StyledFieldTileBase)`
    background: url(${RockTileBackground});
`;

const StyledFieldTileBrook = styled(StyledFieldTileBase)`
    background: url(${BrookTileBackground});
`;

const FieldTypesConfiguration = {
    grass: StyledFieldTileGrass,
    path: StyledFieldTilePath,
    rock: StyledFieldTileRock,
    brook: StyledFieldTileBrook
};

const FieldTile: React.FC<FieldTileProps> = (props) => {
    const FieldComponent =
        FieldTypesConfiguration[(props.type && props.type.toLowerCase()) || 'grass'] ||
        StyledFieldTileBase;

    return (
        <React.Fragment>
            <FieldComponent />
            {/* <FieldTypesConfiguration.path />
            <FieldTypesConfiguration.rock />
            <FieldTypesConfiguration.brook /> */}
        </React.Fragment>
    );
};

export default FieldTile;
