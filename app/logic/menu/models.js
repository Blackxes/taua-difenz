/**
 * @File contains menu models
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

export const MenuConfigModel = class {
    constructor() {
        /**
         * identifier of this menu config
         *
         * @var string
         */
        this.key = '';

        /**
         * menu item configurations
         *
         * @var array
         */
        this.items = [];
    }
};

/**
 * model for a menu configuration item
 */
export const MenuItemConfigModel = class {
    constructor() {
        /**
         * identifier of this item
         *
         * @var string
         */
        this.key = '';

        /**
         * the group this item belongs to
         *
         * @var string
         */
        this.group = '';

        /**
         * defines the order of this item within the
         *
         * @var int
         */
        this.order = 9999;
    }
};

/**
 * menu item group to group menu items.. yeah
 */
export const MenuGroupModel = class {
    constructor() {
        /**
         * group title
         *
         * @var string
         */
        this.title = '';

        /**
         * group key
         */
        this.key = '';
    }
};

/**
 * model for a menu item
 */
export const MenuItemModel = class {
    constructor() {
        /**
         * menu item label
         *
         * @var string
         */
        this.title = '';

        /**
         * target url
         * would have been named "route" but i want to it synergize
         * better with ReactRouterDOM's Route Component
         *
         * @var string
         */
        this.path = '';

        /**
         * menu context key
         * eg. "main_menu" or "side_menu" or
         * "super_extremely_specified_menu_because_i_like_complicated_stuff"
         *
         * @var string
         */
        this.key = '';

        /**
         * icon object from @fortawesome icons
         * use @fortAwesome/[x]-[x]-svg-icons predefined
         * objects to define this value
         *
         * @var object
         */
        this.icon = null;

        /**
         * defines whether the icon should be rendered
         * nice to mix it with renderTitle
         *
         * @var bool
         */
        this.renderIcon = true;

        /**
         * defines whether the title should be rendered
         * nice to mix it with renderIcon
         *
         * @var bool
         */
        this.renderTitle = true;

        /**
         * defines whether the icon for the arrows before the label should be hidden
         *
         * @var bool
         */
        this.renderPrefixArrow = true;

        /**
         * defines whether this items icon should be used when the current route path
         * matches this menu items route
         *
         * @var bool
         */
        this.showInHeader = true;

        /**
         * defines whether this route should match exactly the route
         * and ignore that this route is in the path of the current route
         * important for "active" for example
         *
         * @var bool
         */
        this.exact = true;
    }
};
