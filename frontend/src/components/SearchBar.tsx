import React, { useState, useEffect } from 'react'
import Select, { SingleValue } from 'react-select'

import { useAppSelector, useAppDispatch } from '../app/hook'
import {
  getMemberships,
  selectMemberships,
  selectMembershipStatus,
} from '../features/community/membershipSlice'
import { Membership } from '../interface/communityInterface'

interface UniOption {
  readonly value: string
  readonly label: string
  readonly _id: string
}

type Props = {
  defaultOpen?: boolean
  joined?: boolean
  onChangeFunction: (community: { key: string; _id: string }) => void
}
let uniOptions: UniOption[] = [
  { value: 'ALL', label: 'All of your communities.', _id: '0' },
]

function SearchBar({ defaultOpen = true, onChangeFunction }: Props) {
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<UniOption>>(null)
  const memberships = useAppSelector(selectMemberships)

  useEffect(() => {
    uniOptions = [{ value: 'ALL', label: 'All of your communities.', _id: '0' }]
    memberships.forEach((membership) => {
      uniOptions.push({
        value: membership.community.key,
        label: membership.community.name,
        _id: membership.community._id,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberships])

  const handleChange = (value: UniOption | null) => {
    setSelectedOption(value)
    if (value) {
      onChangeFunction({ key: value.value, _id: value._id })
    }
  }
  return (
    <Select
      value={selectedOption}
      name="Your Communities"
      options={uniOptions}
      onChange={handleChange}
      defaultMenuIsOpen={defaultOpen}
      closeMenuOnSelect
    />
  )
}

export default SearchBar
