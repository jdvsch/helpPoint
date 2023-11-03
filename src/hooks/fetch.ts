import React from 'react'

interface Props {
  URL: string
}

export default function usePromiseAll ({ URL }: Props) {
  // error handle
  const [errorMessage, setErrorMessage] = React.useState(null)

  // loadingF message
  const [loading, setLoading] = React.useState(true)

  // dataF got
  const [response, setResponse] = React.useState(null)

  (() => {
    
  })()

  return { loading, errorMessage, response }
}
