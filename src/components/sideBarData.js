import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const sideBarData =[
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/seller/profile"
    },
    
    {
        title: "Listings",
        icon: <LocalMallIcon />,
        link: "/seller/listings"
    },

    {
        title: "Sign Out",
        icon: <ExitToAppIcon />,
        link: "/seller/signout"
    }
]