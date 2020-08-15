/**
 * @File level component in which the field/ shop and everything else related to play the game lies
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';

import Field from './Field';
import Shop from './Shop';

import { TestDataField, TestDataShop } from '../../TestData';

const LevelContext = React.createContext<LevelContextState>({});

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

    onHoldItem = (itemId: string) => {
        this.setState({
            focusedShopItemId: itemId
        });
    };

    onDropItem = (itemId: string) => {
        this.setState({
            focusedFieldTile: null,
            focusedShopItemId: ''
        });
    };

    onFocusFieldTile = (evt, fieldIndex: number) => {
        this.setState({
            focusedFieldTile: fieldIndex
        });
    };

    render() {
        return (
            <React.Fragment>
                <Field {...TestDataField} onFieldTileFocus={this.onFocusFieldTile} />
                <Shop
                    {...TestDataShop}
                    onPurchaseItem={this.onPurchaseItem}
                    onHoldItem={this.onHoldItem}
                    onDropItem={this.onDropItem}
                />
                <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
            </React.Fragment>
        );
    }
    // const [holdingItem, setHoldingItem] = React.useState<string>(null);
    // const [pickingField, setPickingField] = React.useState<number>(null);
    // const [placedField, setPlacedField] = React.useState<number>(null);
    // const [placedBuildings, setPlacedBuildings] = React.useState<Array<object>>([]);
}

export default Level;
