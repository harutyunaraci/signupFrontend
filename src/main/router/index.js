import { routesInit } from './router.core';
import { SignupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup/index'
import { UsersRouter, USERS_ROUTE_PATH } from '../../core/users/index'

export const routes = {
  [SIGNUP_ROUTE_PATH]: SignupRouter,
  [USERS_ROUTE_PATH]: UsersRouter,
};

export const Router = routesInit(routes);
