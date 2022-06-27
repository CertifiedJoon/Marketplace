import React, { CSSProperties, useState } from 'react'

import Select, { SingleValue } from 'react-select'
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
  onChangeFunction: (selected: string) => void
}

function SearchBar({
  defaultOpen = true,
  joined = true,
  onChangeFunction,
}: Props) {
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<UniOption>>(null)

  const handleChange = (value: UniOption | null) => {
    setSelectedOption(value)
    if (value) {
      onChangeFunction(value.value)
    }
  }
  return joined ? (
    <Select
      value={selectedOption}
      name="Your Communities"
      options={uniOptions}
      onChange={handleChange}
      defaultMenuIsOpen={defaultOpen}
      closeMenuOnSelect
    />
  ) : (
    <Select<UniOption | StateOption, false, GroupedOption>
      options={groupedOptions}
      onChange={(newValue) => handleChange(newValue)}
      formatGroupLabel={formatGroupLabel}
      defaultMenuIsOpen={defaultOpen}
      closeMenuOnSelect
    />
  )
}

export default SearchBar
