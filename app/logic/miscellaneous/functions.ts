/**
 * @File functions which have no specific place or context in which they fit the most
 * 	since they use has more variety than being for example a createBigMonster function
 * 	which is specificly built for creating a monster
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

/**
 * returns a response object containing the message, its type and value
 * as well as optionally a code
 */
export const response = (type, message, value, code = 0) => {
    return { type, message, value, code };
};

/**
 * creates a success response
 * @see response(...)
 */
export const okResponse = (message = '', value = true, code = 200) => {
    return response('ok', message, value, code);
};

/**
 * creates a error response
 * @see response(...)
 */
export const errorResponse = (message, value = false, code = 0) => {
    return response('error', message, value, code);
};

/**
 * creates a warning response
 * @see response(...)
 */
export const warningResponse = (message, value = null, code = 0) => {
    return response('warning', message, value, code);
};

/**
 * creates a info response
 * @see response(...)
 */
export const infoResponse = (message, value = true, code = 0) => {
    return response('info', message, value, code);
};

/**
 * generates a simple hash string - dont use this for as password hash!
 * this is by far one of the worst id generations for passwords
 *
 * @param int length - defines the length of the hash string
 * @param string chars - chars from which this function will pick characters
 * 	to generate the hash
 *
 * @return string - the generated hash
 */
const g_defaultHashChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

export const generateHashString = (length = 8, chars = g_defaultHashChars) => {
    let hash = '';

    while (length > hash.length) hash += chars.charAt(Math.floor(Math.random() * chars.length));

    return hash;
};

/**
 * generates a section id
 * eg. [1, 2, 3] would eventually generate f-42-l0l
 *
 * @param int sections - defines the number of sections for the id
 * @param int sectionLength - defines the length of each section
 *
 * @return string - returns a string based on the given params
 */
const g_defaultSections = [16];

export const generateId = (sections = g_defaultSections) => {
    return sections
        .map((length) => {
            return generateHashString(length);
        })
        .join('-');
};

/**
 * joins an array of values to a string separated by a given separator and ignores null/undefined
 * additionally when an index is an array based on the first index of that array
 * the value of the second index is used or when false the backup value in the third index is used
 *
 * a perfect use for this would be for a className string since null/undefined
 * are getting filtered out
 *
 * @param array strings - array of strings which will be joined
 * @param string (optional) separator - used separator
 *
 * @return string
 * 	- empty string when strings is not an array
 * 	- joined string
 */
export const joinStrings = (strings, separator = ' ') => {
    if (!strings || strings.constructor != Array) return '';

    return strings
        .map((item) => {
            return !item
                ? false
                : item.constructor == Array
                ? item[0]
                    ? item[1]
                    : item[2] || false
                : item;
        })
        .filter(Boolean)
        .join(separator);
};

/**
 * keyifies a string by lowercasing the string and replacing every
 * character into the one defined within the ASCII charset
 *
 * @param string string - the string which will be keyified
 * @param bool replaceDash - defines whether a dash shall be used
 * 	to replace white spaces / default is underscore
 *
 * @return keyified string
 */
export const keyifyString = (string, useDash = true) => {
    if (typeof string != 'string') return '';

    let keyified = string.toLowerCase();
    let whiteSpaceReplacement = useDash ? '-' : '_';

    return keyified.replace(/[-_]|\s+/g, whiteSpaceReplacement);
};

/**
 * calls every callback in the given array and passes a state object
 * as the first argument followed by the given user defined
 *
 * to cancel the process @throw the state or set the _cancel property true
 *
 * @param {object} initialState well initial state for the callbacks to accept
 * @param {array} processes array of objects containing the following properties
 * 	callback: Function - the callback which will be called
 * 		1. argument - result of previous process - undefined on first process
 * 		2. argument - state object to have data shared around callbacks when they rely on them
 * 		>2. argument - user defined arguments passed as applied array
 * 	args: Array - array of arguments passed to the callback
 *
 * @return {object} the shared state object which is processed through the callbacks
 */
export const processCallbacks = (initialState, processes) => {
    let state = {
        ...initialState,
        _cancel: false
    };

    for (const config of processes) {
        let { callback, args, thisArg } = config;

        // a bit more userfriendly when you only have a callback
        // instead of having an object with only the callback property
        if (typeof config == 'function') callback = config;

        try {
            state = {
                ...state,
                ...callback.apply(thisArg, [state, ...(args || [])])
            };

            if (state._continue) throw state;
        } catch (state) {
            return state;
        }
    }

    return state;
};

/**
 * returns intersection of array of objects
 * Todo: implement
 */
// export const arrayObjectIntersection = (key, ...arrays) => {
// 	const intersection = arrays.
// }

/**
 * @Important requirements for these functions are that every entry in the state
 * must be an array and every entry inside the array (first level)
 * must be an object providing an unique id key which is used to identify the entry
 *
 * pattern = state = {
 * 		key: [
 * 			{
 * 				id: string | number
 * 			}
 * 		]
 * 	}
 */

/**
 * returns a new state object containing the new entry
 */
export const addToState = (state, key, entry, multiple = false) => ({
    ...state,
    [key]: [...state[key], ...(multiple ? entry : [entry])]
});

/**
 * returns a new state object from which the entry
 * 	with given id (when found) is deleted
 */
export const deleteFromState = (state, key, id) => ({
    ...state,
    [key]: [...state[key].filter((item) => item.id != id)]
});

/**
 * returns a new state object in which the requested entry (when found)
 * 	has been update with the given one
 */
export const updateInState = (state, key, id, replacement) => ({
    ...state,
    [key]: [...state[key].map((item) => (item.id == id ? replacement : item))]
});

/**
 * returns the requested entry from the state when found else undefined
 */
export const findInState = (state, key, id) => state[key].find((item) => item.id == id);

/**
 * return an object within an array by key and value
 */
export const findInArray = (scope, value, key = 'id') => scope.find((Item) => Item[key] == value);

/**
 * returns a boolean whether an object is in an array
 */
export const someInArray = (scope, value, key = 'id') => scope.some((Item) => Item[key] == value);
