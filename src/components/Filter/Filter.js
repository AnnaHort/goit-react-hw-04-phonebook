import { StyledSearchInput } from "./Filter.styled"

export const Filter = ({filterValue,onChangeFilter}) => {
    return (
    <StyledSearchInput
    type="text"
    name="filter"
    value={filterValue}
    onChange={evt => onChangeFilter(evt.target.value)}
    placeholder="Search by name"
  />
  )}