/**
 * @File contains menu data like the main menu
 * 	or submenus of specific contexts
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import {
    faHome as fasHome,
    faMapSigns as fasMapSigns,
    faUser as fasUser,
    faBoxes as fasBoxes,
    faBook as fasBook,
    faPaw as fasPaw,
    faGem as fasGem,
    faCogs as fasCogs,
    faSeedling as fasSeedling,
    faBorderNone as fasBorderNone
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as farLightbulb } from '@fortawesome/free-regular-svg-icons';
import {
    MenuConfigModel,
    MenuGroupModel,
    MenuItemConfigModel,
    MenuItemModel
} from './Models';

import { DashboardKey, RandomizerKey } from '../GlobalKeys';

/**
 * menu configurations
 */
export const menuConfigurations = {
    main_menu: {
        ...new MenuConfigModel(),
        items: [
            {
                ...new MenuItemConfigModel(),
                key: DashboardKey
            },
            {
                ...new MenuItemConfigModel(),
                key: RandomizerKey
            },
            {
                ...new MenuItemConfigModel(),
                key: 'TestA',
                parent: DashboardKey
            },
            {
                ...new MenuItemConfigModel(),
                key: 'TestB',
                parent: DashboardKey
            },
            {
                ...new MenuItemConfigModel(),
                key: 'TestC',
                parent: DashboardKey
            },
            {
                ...new MenuItemConfigModel(),
                key: 'TestD',
                parent: RandomizerKey
            },
            {
                ...new MenuItemConfigModel(),
                key: 'TestE',
                parent: RandomizerKey
            },
            {
                ...new MenuItemConfigModel(),
                key: 'TestF',
                parent: RandomizerKey
            }
            // {
            //     ...new MenuItemConfigModel(),
            //     key: 'crafting',
            //     group: 'creation'
            // },
        ]
    }
};

/**
 * apps menu groups
 */
export const menuItems = [
    {
        ...new MenuItemModel(),
        title: 'Dashboard',
        key: DashboardKey,
        path: '/dashboard',
        icon: fasBorderNone
    },
    {
        ...new MenuItemModel(),
        title: 'Randomizer',
        key: RandomizerKey,
        path: '/randomizer'
    },
    {
        ...new MenuItemModel(),
        title: 'TestA',
        key: 'TestA',
        path: '/testa'
    },
    {
        ...new MenuItemModel(),
        title: 'TestB',
        key: 'TestB',
        path: '/testb'
    },
    {
        ...new MenuItemModel(),
        title: 'TestC',
        key: 'TestC',
        path: '/testc'
    },
    {
        ...new MenuItemModel(),
        title: 'TestD',
        key: 'TestD',
        path: '/testd'
    },
    {
        ...new MenuItemModel(),
        title: 'TestE',
        key: 'TestE',
        path: '/teste'
    },
    {
        ...new MenuItemModel(),
        title: 'TestF',
        key: 'TestF',
        path: '/testf'
    }
    // {
    //     ...new MenuItemModel(),
    //     title: 'Map',
    //     key: 'map',
    //     path: '/map',
    //     icon: fasMapSigns
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Character Sheets',
    //     key: 'character_sheets',
    //     path: '/character-sheets',
    //     icon: fasUser
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Looter',
    //     key: 'looter',
    //     path: '/looter',
    //     icon: fasBoxes
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Lexicon',
    //     key: 'lexicon',
    //     path: '/lexicon',
    //     icon: fasBook
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Flora und Fauna',
    //     key: 'flora_fauna',
    //     path: '/flora-fauna',
    //     icon: fasSeedling
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Mineralien',
    //     key: 'minerals',
    //     path: '/minerals',
    //     icon: fasGem
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Bestiarium',
    //     key: 'bestiary',
    //     path: '/bestiary',
    //     icon: fasPaw
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Crafting',
    //     key: 'crafting',
    //     path: '/crafting',
    //     icon: farLightbulb
    // },
    // {
    //     ...new MenuItemModel(),
    //     title: 'Einstellungen',
    //     key: 'settings',
    //     path: '/settings',
    //     icon: fasCogs
    // }
];

/**
 * menu group configurations
 */
export const menuGroupItems = [
    {
        ...new MenuGroupModel(),
        title: 'Allgemein',
        key: 'general'
    },
    {
        ...new MenuGroupModel(),
        title: 'Sammlung',
        key: 'collection'
    },
    {
        ...new MenuGroupModel(),
        title: 'Herstellung',
        key: 'creation'
    },
    {
        ...new MenuGroupModel(),
        title: 'Sonstiges',
        key: 'other'
    }
];
