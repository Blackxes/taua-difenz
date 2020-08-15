/**
 * @File field reducer
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

const initialState: FieldState = {
    buildings: []
};

const FieldReducer: Function = (state: FieldState = initialState, { type, payload }: Action) => {
    switch (type) {
        case 'add-building':
            return { ...state, buildings: [...state.buildings, payload] };
    }
};

export default FieldReducer;
