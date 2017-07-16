import * as React from 'react'
import {ChangeEvent, EventHandler} from 'react'
import {IDropdownOptions} from '../types'

interface ISelectOptionsProps {
  options: IDropdownOptions[]
  label: string
  selected: string | null
  className: string

  onChange: EventHandler<ChangeEvent<HTMLSelectElement>>
}

export function SelectOptions({options, label, selected, onChange, className}: ISelectOptionsProps) {
  return (
    <select className={className} value={selected || 'label'} onChange={onChange}>
      <option disabled label={label} value="label" />
      {options.map((opt, i) => (
        <option key={i} {...opt} />
      ))}
    </select>
  )
}
