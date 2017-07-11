import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bill from '../components/bill'
import shoppingCartWithHistorySelector from '../selectors'

const mapStateToProps = (state) => {
    const {bill} = shoppingCartWithHistorySelector(state)

    return {...bill}
}

export default connect(mapStateToProps)(Bill)