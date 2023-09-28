import React from 'react'

type Props = {
  indeterminate?: boolean
} & React.HTMLProps<HTMLInputElement>

export default function IndeterminateCheckbox ({
  indeterminate,
  className = '',
  ...rest
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !(rest.checked ?? false) && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}
