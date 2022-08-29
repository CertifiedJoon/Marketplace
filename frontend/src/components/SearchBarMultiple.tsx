import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useAppSelector } from "../app/hook";
import { selectMemberships } from "../features/community/membershipSlice";

interface UniOption {
  readonly value: string;
  readonly label: string;
  readonly _id: string;
}

type Props = {
  defaultOpen?: boolean;
  onChangeFunction: (communities: Array<{ key: string; _id: string }>) => void;
};
let uniOptions: UniOption[] = [];

function SearchBarMultiple({ defaultOpen = false, onChangeFunction }: Props) {
  const [selectedOption, setSelectedOption] =
    useState<ReadonlyArray<UniOption>>();
  const memberships = useAppSelector(selectMemberships);

  useEffect(() => {
    uniOptions = [];
    memberships.forEach((membership) => {
      uniOptions.push({
        value: membership.community.key,
        label: membership.community.name,
        _id: membership.community._id,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberships]);

  const handleChange = (values: ReadonlyArray<UniOption> | null) => {
    if (values) {
      setSelectedOption(values);
      onChangeFunction(
        values.map((value) => ({ key: value.value, _id: value._id }))
      );
    }
  };

  return (
    <Select
      value={selectedOption}
      name="Your Communities"
      options={uniOptions}
      isMulti
      onChange={handleChange}
      defaultMenuIsOpen={defaultOpen}
      closeMenuOnSelect
    />
  );
}

export default SearchBarMultiple;
