/**
 * @File contains test data for this app
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import GunnerImage from '../assets/images/tower/gunner.png';
import LaserImage from '../assets/images/tower/laser.png';

interface ShopItemBase {
    id: string;
    label: string;
    icon: string;
    gold?: number;
    crystals?: number;
    requirements?: Function;
}

interface TowerShopItem extends ShopItemBase {
    physicalDamage: number;
    magicDamage: number;
}

// type UpgradeModificationTypes = 'procentual' | 'absolute' | 'relative';

// interface UpgradeModifier {
//     targetedProperty: string;
//     modifier: number;
//     modifierType: UpgradeModificationTypes;
// }

interface UpgradeShopItem extends ShopItemBase {
    modifier: number;
    targetedProperties: Array<string>;
    // targetedProperties: Array<UpgradeModifier>;
}

export const TestDataField: FieldProps = {
    fieldHeight: 600,
    fieldWidth: 600,
    columnsCount: 7,
    rowsCount: 7,
    tileSpacing: 1,
    design: `
		GRASS GRASS GRASS GRASS GRASS BROOK BROOK
		PATH  PATH  PATH  PATH  GRASS BROOK BROOK
		GRASS GRASS GRASS PATH  GRASS BROOK BROOK
		GRASS GRASS GRASS PATH  GRASS GRASS GRASS
		ROCK  GRASS GRASS PATH  PATH  PATH  PATH
		BROOK ROCK  GRASS GRASS GRASS GRASS GRASS 
		BROOK BROOK ROCK  GRASS GRASS ROCK  ROCK`,
    onFieldTileFocus: () => {}
};

export const TestDataShop: ShopProps = {
    shopItems: [
        {
            id: 'pFj0zYGvSB5BaqUW',
            label: 'Gunner',
            iconPath: GunnerImage,
            goldCost: 30,
            crystalCost: 0,
            stats: [
                {
                    label: 'PhysicalDamage',
                    value: 30
                },
                {
                    label: 'Magic Damage',
                    value: 0
                }
            ]
        },
        {
            id: '0hvF7HTIH62p29Nd',
            label: 'Laser',
            iconPath: LaserImage,
            goldCost: 50,
            crystalCost: 5,
            stats: [
                {
                    label: 'PhysicalDamage',
                    value: 10
                },
                {
                    label: 'Magic Damage',
                    value: 25
                }
            ]
        }
    ],
    onDropItem: () => {},
    onHoldItem: () => {},
    onPickItem: () => {},
    onPurchaseItem: () => {}
    // onPickingItem: () =>
    //     console.log(
    //         'onPickingItem cant be passed by the test data. Needs to be passed by the parent component.'
    //     ),
    // onDroppingItem: () =>
    //     console.log(
    //         'onPickingItem cant be passed by the test data. Needs to be passed by the parent component.'
    //     )
};
