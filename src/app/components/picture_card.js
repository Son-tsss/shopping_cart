import React from 'react'
import PropTypes from 'prop-types'

const PictureCard = ({img, children, footer, badges}) => {
    return <div className="picture-card">
        <div className="picture-card-header">
            <img src={img} className="picture-card-header-picture"/>
        </div>
        <div className="picture-card-badges">
            {badges && badges.map( (badge,index) => <span className="picture-card-badge">{badge}</span>)}
        </div>
        <div className="picture-card-body">
            {children}
        </div>
        <div className="picture-card-footer">
            {footer}
        </div>
    </div>
}

PictureCard.propTypes = {
    img: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    footer: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ])
}

export default PictureCard