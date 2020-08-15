/**
 * @File contains function to create or manage menus
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import _ from 'lodash';

import { keyifyString } from '../miscellaneous/functions';

import { MenuItemModel, MenuGroupModel } from './Models';
import { menuConfigurations, menuItems, menuGroupItems } from './data';

/**
 * returns build up menu items
 * you can simply get the menu items from the './Data' export
 * but this function is here as placeholder in case some functionalities might be added
 * use this in case you want to possibly benefit from further features
 * if you only need the items then get the exported ones from './Data'
 *
 * // Todo: implement feature
 * @param {string} parent parent of the menu items
 */
export const getMenuItems = (parent) => {
    return menuItems;
};

/**
 * creates a menu item
 *
 * @param string title - the title of the item
 * @param string url - url of the item excluding the basename
 * @param object icon - the @fortawesome/ configuration of an icon
 *
 * @return object - the menu item configuration
 */
export const createMenuItem = (title, url, icon) => {
    if (!title) console.warn('Invalid title for MenuItem. Empty MenuItem created.');

    return {
        ...new MenuItemModel(),
        key: keyifyString(title),
        title,
        url,
        icon
    };
};

/**
 * build an tree object based on the configuration found by the menuKey
 * pattern:
 *	[
 * 		groups: [
 * 			items: [
 * 				{
 * 					title: string,
 * 					key: string,
 * 					path: string,
 * 					itemOrder: int,
 * 					groupOrder: int,
 *					group: string
 * 					children: array
 * 				}
 * 			]
 * 		]
 *	]
 *
 * @param string menuName - identifier from where the menu configurations should be taken
 * @param string parent - parent of the level which should be built
 * 	when null the roots are being built
 * @param bool recursive - defines whether to generate the current level or consider building children
 *
 * @return array - the menu level
 */
export const buildMenuTree = (menuKey, parent, recursive = true) => {
    if (!menuKey) throw new Error('No menukey given.');

    if (!_.has(menuConfigurations, menuKey)) throw new Error(`Menu ${menuKey} not found`);

    const menu = menuConfigurations[menuKey];

    if (menu.items.constructor !== Array) {
        throw new Error('MenuItems property has to be an array containing the menu items');
    }

    if (!menu.items.length) throw new Error('No menu item defined');

    // when no parent is given build the root
    // else the children
    const usedItems = !parent
        ? menu.items.filter((item) => !item.parent)
        : menu.items.filter((item) => item.parent == parent);

    const menuLevel = usedItems.reduce((level, current, index, array) => {
        if (!current.key) {
            console.warn(
                `No 'key' defined for menu item for menu '${menuKey}'. Can't refer to a menu item configuration in the menu items configuration without key`
            );
            return level;
        }

        const menuConfig = menuItems.find((item) => {
            return item.key == current.key;
        });

        if (!menuConfig) {
            console.warn(
                `Menu key '${current.key}' not found in the menu items configuration for menu '${menuKey}'.`
            );
            return level;
        }

        // const indexKey = current.group || "_";
        const group = menuGroupItems.find((group) => group.key == current.group);
        const children = menu.items.filter((item) => item.parent == current.key);

        level = _.merge(level, {
            [current.key]: {
                ...menuConfig,
                ...current,
                order: current.order || 9999,
                group: group ? group : new MenuGroupModel(),
                children: recursive && children.length ? buildMenuTree(menuKey, current.key) : []
            }
        });

        return level;
    }, {});

    // sort by group order followed by the menu item order
    const sorted = _.sortBy(menuLevel, ['group.order', 'order']);
    const grouped = _.groupBy(sorted, 'group.key');

    // move group items into an "items" property and wrap the group into an object
    // to have its own "existance" and not just be a wrapper
    const movedGroup = _.map(grouped, (items, key) => {
        return {
            ...menuGroupItems.find((group) => group.key == key),
            items
        };
    });

    return movedGroup;
};

/**
 * completes a menu items path by prepending the parents paths of this menu item
 */
export const generateMenuItemParentPath = (menuKey) => {
    console.log(menuKey);
};

/**
 * converts a menu configuration level of menuConfigurations to a route configuration
 */
export const generateMenuRouteConfiguration = (menuKey: string, parent: string = undefined) => {
    // correct parent // items may be adjusted later on
    let items = menuConfigurations[menuKey]?.items.filter((item) => item.parent == parent);

    // generate paths when not super items (super items are menu items without parents)
    if (parent) {
    }

    // console.log(menuKey);
    // console.log(parent);

    console.log(items);

    return true;
    // const items
};
