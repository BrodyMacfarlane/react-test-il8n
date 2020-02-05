import React from 'react'
import Weather from '../components/Weather'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export default () => {
  return (
    <React.Fragment>
      <Weather />

      <Link to="/">
        <FormattedMessage
          id="Day.backLink"
          defaultMessage="Go back home"
        />
      </Link>
    </React.Fragment>
  )
}