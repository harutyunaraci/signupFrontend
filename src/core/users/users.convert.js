import { LIST_ITEM_DATATYPE } from '../../lib/elements/list-item'
import { USERS_DATA_NAME } from './users.type'
export const performUserDataList = (rawdata) => ({
  [LIST_ITEM_DATATYPE.ID] : rawdata[USERS_DATA_NAME.ID], 
  [LIST_ITEM_DATATYPE.LOGIN] : rawdata[USERS_DATA_NAME.LOGIN], 
})