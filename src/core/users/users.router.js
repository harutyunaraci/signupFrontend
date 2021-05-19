import { setActivePath } from '../../lib/common/navigation'
import { USERS_ROUTE_PATH } from './users.constants'

export function UsersRouter(ctx) {
  ctx.store.dispatch(setActivePath(USERS_ROUTE_PATH))
}