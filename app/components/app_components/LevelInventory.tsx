/**
 * @File level invenctory component which contains the items the user has to use or built
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import FlexContainer from '../system_components/Container/FlexContainer';

import { LevelInventoryContainerWidth } from '../../logic/configurations';

const StyledLevelInventory: React.FC = styled.div`
    width: ${(props) => LevelInventoryContainerWidth}px;
    height: 100vh;
`;

const StyledLevelInventoryItem: React.FC = styled.div``;

const LevelInventory: React.FC<LevelInventoryProps> = (props) => {
    return (
        <StyledLevelInventory>
            <FlexContainer vertical>
                <p>Inventory</p>
                {props.items.map((item) => {
                    <StyledLevelInventoryItem>{item.item.label}</StyledLevelInventoryItem>;
                })}
            </FlexContainer>
        </StyledLevelInventory>
    );
};

export default LevelInventory;
