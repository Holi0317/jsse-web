import * as React from 'react'

export function SelectOptions({options, onChange}) {
  return (
    <select onChange={onChange}>
      {options.map((opt, index) => (
        <option key={index} {...opt} />
      ))}
    </select>
  )
}
