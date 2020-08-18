/**
 * @File shop components - this is where you can buy stuff
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem as farGem } from '@fortawesome/free-regular-svg-icons';
import { faCoins as fasCoins } from '@fortawesome/free-solid-svg-icons';

import FlexContainer from '../system_components/Container/FlexContainer';
import { Button } from '../system_components/Trigger/Button';
import { ShopContainerWidth } from '../../logic/configurations';

const Shop: React.FC<ShopProps> = (props) => {
    return (
        <StyledShop>
            <FlexContainer vertical margin={20}>
                {props.shopItems.map((item) => {
                    return (
                        <StyledShopItem>
                            <FlexContainer margin={20}>
                                <p>{item.label}</p>
                                <FlexContainer margin={10}>
                                    <FlexContainer margin={3}>
                                        <StyledCoinsIcon icon={fasCoins} />
                                        <p>{item.goldCost}</p>
                                    </FlexContainer>
                                    <FlexContainer margin={3}>
                                        <StyledCrystalsIcon icon={farGem} />
                                        <p>{item.crystalCost}</p>
                                    </FlexContainer>
                                </FlexContainer>
                            </FlexContainer>
                            <img src={item.iconPath} />
                            <FlexContainer>
                                <Button
                                    type="info"
                                    small
                                    onClick={(evt) => props.onPurchaseItem(evt, item.id)}
                                >
                                    Purchase
                                </Button>
                            </FlexContainer>
                        </StyledShopItem>
                    );
                })}
            </FlexContainer>

            {/* <pre>{JSON.stringify(props.pickingField, undefined, 2)}</pre>
            <pre>{JSON.stringify(props.placedField, undefined, 2)}</pre> */}
        </StyledShop>
    );
};

const StyledShop = styled.div`
    min-width: ${(props) => ShopContainerWidth}px;
    height: 100vh;
    border-left: 10px solid #4c413a;
    background: #14100f80;
`;

const StyledShopItem = styled.div`
    padding: 10px;
    background: #423a34;
`;

const StyledItemTitle = styled.p`
    margin: 0;
    font-size: 20px;
    algin-self: start;
`;

const StyledItemIcon = styled.img`
    margin-left: auto;
    width: 32px;
    height: min-content;
`;

const StyledCost = styled.p`
    font-size: 14px;
`;

const StyledCostIcon = styled(FontAwesomeIcon)`
    width: 100%;
    font-size: 12px;
`;

const StyledCoinsIcon = styled(StyledCostIcon)`
    color: gold;
`;

const StyledCrystalsIcon = styled(StyledCostIcon)`
    color: aquamarine;
`;

export default Shop;
