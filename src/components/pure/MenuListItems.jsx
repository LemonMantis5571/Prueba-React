import React from 'react';
import { List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Home, Settings, Task} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home></Home>)

        case 'TASK':
            return (<Task></Task>)
        
        case 'SETTINGS':
            return (<Settings></Settings>)
        
        default:
            return (<Home></Home>)
    }

}

const MenuListItems = ({list}) => {

    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) => {
                return (
                    <ListItemButton key={index} onClick={() => navigateTo(path)}>
                    
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>

                    <ListItemText primary={text}></ListItemText>
                </ListItemButton>
                )
            })}
        </List>
    );
}

export default MenuListItems;



