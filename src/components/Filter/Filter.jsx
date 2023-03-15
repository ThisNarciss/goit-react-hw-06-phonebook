import { nanoid } from 'nanoid';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

import { IconSearch } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const filterInputId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value.trim()));
  };

  return (
    <FilterBox>
      <IconSearch size={20} />
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        placeholder="Search"
        onChange={handleFilterChange}
      />
    </FilterBox>
  );
};
