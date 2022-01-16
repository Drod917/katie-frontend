import React from 'react'
import PropTypes from 'prop-types'
import Services from '../../views/Sections/Services'

const ServicesPreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    console.log("data")

    if (data) {
        return (
            <Services
              frontmatter={null}
            />
        )
    }

    return <div>Loading...</div>
}

ServicesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

ServicesPreview.defaultProps = {
  entry: null,
  getAsset: null
}

export default ServicesPreview
