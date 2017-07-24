import {reducer as shoppingCartReducer} from '../shopping_cart'
import historyReducer from '../history/history_reducer'

export default historyReducer(shoppingCartReducer)