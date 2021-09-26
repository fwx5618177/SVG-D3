import React from 'react';
// import RouterConfig from './RouterConfig';
import SideMenu from './Sider';

class BaseLayout extends React.Component {
    render() {
        return (
            <>
            {/* <RouterConfig /> */}
            <SideMenu />
          </>

        )
    }
}

export default BaseLayout;