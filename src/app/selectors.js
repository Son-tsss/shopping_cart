import {selector as shoppingCartSelector} from '../shopping_cart'
import historySelector from '../history/history_selector'

export default historySelector(shoppingCartSelector)