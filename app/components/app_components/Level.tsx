/**
 * @File level component in which the field/ shop and everything else related to play the game lies
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import Field from './Field';
import Shop from './Shop';

import { TestDataField, TestDataShop } from '../../TestData';
import LevelInventory from './LevelInventory';

const LevelContext = React.createContext<LevelContextState>({});

const StyledLevel: React.FC = styled.div`
    display: flex;
    width: 100%;
`;

/**
 * component to set the full width without interfering
 * with the width calculations of the field component
 */
const StyledFieldWrapper: React.FC = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

class Level extends React.Component<LevelProps, LevelState> {
    constructor(props) {
        super(props);

        this.state = {
            purchasedItems: [],
            focusedFieldTile: null,
            focusedShopItemId: ''
        };
    }

    onPurchaseItem = (evt: React.MouseEvent, itemId: string) => {
        this.setState({
            purchasedItems: [
                ...this.state.purchasedItems,
                {
                    type: 'Unkown',
                    fieldIndex: this.state.focusedFieldTile,
                    itemId: itemId
                }
            ]
        });
    };

    onHoldItem = (evt: React.DragEvent, itemId: string) => {
        this.setState({
            focusedShopItemId: itemId
        });
    };

    onDropItem = (evt: React.DragEvent, itemId: string) => {
        this.setState({
            focusedFieldTile: null,
            focusedShopItemId: ''
        });
    };

    onFocusFieldTile = (evt: React.DragEvent, fieldIndex: number) => {
        this.setState({
            focusedFieldTile: fieldIndex
        });
    };

    onResetFieldTileFocus = (evt: React.DragEvent) => {
        this.setState({
            focusedFieldTile: null
        });
    };

    render() {
        return (
            <StyledLevel>
                <LevelInventory items={this.state.purchasedItems} />
                <StyledFieldWrapper>
                    <Field {...TestDataField} onFieldTileFocus={this.onFocusFieldTile} />
                </StyledFieldWrapper>
                <Shop
                    {...TestDataShop}
                    onPurchaseItem={this.onPurchaseItem}
                    onHoldItem={this.onHoldItem}
                    onDropItem={this.onDropItem}
                />
                {/* <pre>{JSON.stringify(this.state, undefined, 2)}</pre> */}
            </StyledLevel>
        );
    }
    // const [holdingItem, setHoldingItem] = React.useState<string>(null);
    // const [pickingField, setPickingField] = React.useState<number>(null);
    // const [placedField, setPlacedField] = React.useState<number>(null);
    // const [placedBuildings, setPlacedBuildings] = React.useState<Array<object>>([]);
}

export default Level;
