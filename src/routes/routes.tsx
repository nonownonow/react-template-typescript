import React, { FunctionComponent, lazy } from 'react'

export interface IRoute {
  path: string
  component: FunctionComponent<any>
  props?: any
  routes?: IRoute[]
}

export const routes: IRoute[] = []

export const devRoutes: IRoute[] = [...routes]
