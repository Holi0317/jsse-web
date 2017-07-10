import * as React from 'react'

export function SelectOptions({options, label, onChange}) {
  return (
    <select onChange={onChange}>
      <option default disabled label={label} />
      {options.map((opt, index) => (
        <option key={index} {...opt} />
      ))}
    </select>
  )
}
