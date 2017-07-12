import * as React from 'react'

export function SelectOptions({options, label, selected, onChange, className}) {
  return (
    <select className={className} value={selected || 'label'} onChange={onChange}>
      <option disabled label={label} value="label" />
      {options.map((opt, i) => (
        <option key={i} {...opt} />
      ))}
    </select>
  )
}
