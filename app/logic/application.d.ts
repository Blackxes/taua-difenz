/**
 * @File field definitions
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

declare interface ApplicationHeaderProps {
    title?: string;
}

declare interface ApplicationBodyProps {}

declare interface LevelProps {
    level?: string;
}

declare interface LevelState {
    // i use the term "focused" here because this value is (will be) used in multiple ways
    // eg. either hovering over a field or right clicking on it to trigger some kind of building menu
    focusedFieldTile?: number;
    focusedShopItemId?: string;
    purchasedItems?: Array<FieldEntity>;
}

declare interface LevelContextState {
    holdingItem?: string;
    purchasedBuildings?: Array<FieldEntity>;
}

declare interface FieldEntity {
    type: string;
    fieldIndex?: number;
    itemId?: string;
}

declare interface FieldBuilding {
    fieldIndex: number;
    itemId: number;
}

declare type FieldTypes = 'NONE' | 'GRASS' | 'PATH' | 'ROCK' | 'BROOK';

declare interface FieldState {
    buildings: Array<FieldBuilding>;
}

declare interface FieldProps {
    design: string;
    fieldWidth: number;
    fieldHeight: number;
    rowsCount: number;
    columnsCount: number;
    tileSpacing?: number;
    onFieldTileFocus: (evt, fieldIndex: number) => void;
}

declare interface FieldTileProps {
    type: string | FieldTypes;
    item?: object;
}

declare interface ShopItem {
    id: string;
    label: string;
    iconPath: string;
    description?: string;
    goldCost?: number;
    crystalCost?: number;
    stats: Array<{ label: string; value: number | boolean | string }>;
}

declare interface ShopProps {
    shopItems: Array<ShopItem>;
    onPurchaseItem: Function;
    onPickItem: Function;
    onHoldItem: Function;
    onDropItem: Function;
}

declare interface ShopItemProps {
    item: ShopItem;
    onPurchase: Function;
}
