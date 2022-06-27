import React, { CSSProperties } from 'react'

import Select from 'react-select'
import {
  uniOptions,
  groupedOptions,
  UniOption,
  StateOption,
  GroupedOption,
} from '../static/docs/data'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#54bab9',
  borderRadius: '2em',
  color: '#fff',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}

const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span className="text-primary">
      <strong>{data.label}</strong>
    </span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

type Props = {
  defaultOpen?: boolean
  joined?: boolean
}

function SearchBar({ defaultOpen = true, joined = true }: Props) {
  return joined ? (
    <Select
      defaultValue={uniOptions[0]}
      name="Your Communities"
      options={uniOptions}
      defaultMenuIsOpen={defaultOpen}
      closeMenuOnSelect
    />
  ) : (
    <Select<UniOption | StateOption, false, GroupedOption>
      defaultValue={uniOptions[0]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
      defaultMenuIsOpen={defaultOpen}
      closeMenuOnSelect
    />
  )
}

export default SearchBar
