import React from 'react'
import PropTypes from 'prop-types'

const BreadCumb = props => {
    const {title} = props
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">{title}</li>
            </ol>
        </nav>
    )
}

BreadCumb.propTypes = {
    title: PropTypes.string.isRequired
}

export default BreadCumb
