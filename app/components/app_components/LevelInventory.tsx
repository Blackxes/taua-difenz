/**
 * @File level invenctory component which contains the items the user has to use or built
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components/';

import FlexContainer from '../system_components/Container/FlexContainer';

import { LevelInventoryContainerWidth } from '../../logic/configurations';
import { Paragraph } from '../system_components/text/Text';

const StyledLevelInventory: React.FC = styled.div`
    padding: 20px 0;
    min-width: ${(props) => LevelInventoryContainerWidth}px;
    height: 100vh;
    border-right: 10px solid #fff;
    background: #14100f80;
`;

const StyledLevelInventoryTitle = styled(Paragraph)`
    padding: 5px 0;
    font-size: 25px;
    text-align: center;
    background: #fff;
    color: #14100f;
`;

const StyledLevelInventoryItem: React.FC = styled.div``;

const LevelInventory: React.FC<LevelInventoryProps> = (props) => {
    return (
        <StyledLevelInventory>
            <FlexContainer vertical>
                <StyledLevelInventoryTitle fontWeight="thin" fontStyle="italic">
                    Inventory
                </StyledLevelInventoryTitle>
                {props.items.map((item) => {
                    <StyledLevelInventoryItem>{item.item}</StyledLevelInventoryItem>;
                })}
            </FlexContainer>
            <pre>{JSON.stringify(props.items, undefined, 2)}</pre>
        </StyledLevelInventory>
    );
};

export default LevelInventory;
