import history from '../history'
import {actions as shoppingCartActions} from '../shopping_cart'

const {actions: historyActions} = history
export const shoppingCartWithHistoryActions = historyActions(shoppingCartActions)