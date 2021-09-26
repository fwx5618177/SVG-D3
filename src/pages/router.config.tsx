import { lazy } from "react";

export interface RouterComponent {
    id: number,
    menuName?: string,
    component: React.LazyExoticComponent<any>,
    pathname: string,
    exact?: boolean,
    childrens?: RouterComponent[],
}

export const RouterList: RouterComponent[] = [
    {
        id: 1000,
        menuName: 'square',
        component: lazy(() => import('../Sider')),
        pathname: '/',
        exact: true,
    },
    {
        id: 1001,
        menuName: 'square',
        component: lazy(() => import('../Sider')),
        pathname: '/square',
    },
]