import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {shoppingCartWithHistoryActions} from '../../actions'

const{undo, redo} = shoppingCartWithHistoryActions

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({undo,redo}, dispatch)
}

const History = ({undo,redo}) => {
    return <div className="history">
        <button className="history-undo" onClick={undo}>UNDO</button>
        <button className="history-redo" onClick={redo}>REDO</button>
    </div>
}

History.propTypes = {
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(History)