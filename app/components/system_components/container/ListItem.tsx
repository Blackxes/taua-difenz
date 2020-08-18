/**
 * @File optional flex item to configure special behaviour for flex items
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled, { css } from 'styled-components';

const ListItem: React.FC<ListItemProps> = (props) => <StyledListItem {...props} />;

const StyledListItem = styled.div`
    ${(props: any) =>
        props.align &&
        css`
            align-self: ${props.align};
        `}
    ${(props: any) =>
        props.justify &&
        css`
            justify-self: ${props.justify};
        `}
`;

export default ListItem;
