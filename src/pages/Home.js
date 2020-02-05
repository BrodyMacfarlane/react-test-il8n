import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export default () => {
  return (
    <React.Fragment>
      <h1>
        <FormattedMessage
          id="Home.headMessage"
          defaultMessage="Hello, world!"
        />
      </h1>

      <p>
        <FormattedMessage
          id="Home.dayMessage"
          defaultMessage="It's a beautiful day outside."
        />
      </p>

      <Link to="/day">
        <FormattedMessage
          id="Home.findOutLink"
          defaultMessage="Click here to find out why!"
        />
      </Link>
    </React.Fragment>
  )
}