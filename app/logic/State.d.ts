/**
 * @File action interfaces
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

declare interface Action {
    type: string;
    payload: any;
}

declare interface ApplicationState {
    field: FieldState;
}
