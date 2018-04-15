import React from 'react';
import {
    List,
    Item
} from 'react-atomic-molecule';
import {ReLink, Section} from 'reshow';
import get from 'get-object-value';

import Container from '../molecules/Container';
import Brand from '../organisms/Brand';

const keys = Object.keys;

const Menu = ({children}) =>
<Container atom="nav" className="navbar navbar-light">
    <Brand />
    <List atom="ul" className="nav navbar-nav pull-xs-right">
        {children}
    </List>
</Container>

const MenuItem = ({atom, ...props}) =>
<Item className="nav-item" atom={atom}>
    <ReLink className="nav-link" {...props} />
</Item>

const PageHeaderContainer = ({all, guest, login}) => 
{
    const menus = {
        ...all,
        ...guest
    };
    return (
    <Menu>
    {
        keys(menus).map( key =>
            <MenuItem key={key} href={get(menus, [key, 'href'])}>
            {get(menus, [key, 'text'])} 
            </MenuItem>
        )
    }
    </Menu>
    );
}

const PageHeader = props =>
<Section name="menu">
    <PageHeaderContainer />
</Section>

export default PageHeader;
