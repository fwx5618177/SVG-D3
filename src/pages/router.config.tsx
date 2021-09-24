import { lazy } from "react";

export interface RouterComponent {
    id: number,
    component: React.LazyExoticComponent<any>,
    pathname: string,
    exact?: boolean,
    childrens?: RouterComponent[],
}

export const RouterList: RouterComponent[] = [
    {
        id: 1001,
        component: lazy(() => import('./square/SiderDemo')),
        pathname: '/square',
    },
]