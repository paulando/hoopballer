import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const DashboardView = (props) => (

    <div className="page__dashboard">
        <AppBar
            titleStyle={{color: "#FFFFFF"}}
            title="Welcome to dashboard, you handsome fuck!"
            iconElementRight={
                <IconMenu
                    iconButtonElement={
                        <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" onClick={props.handleSignOut} />
                </IconMenu>
            }
        />
        {props.children}
    </div>

);

export default DashboardView;