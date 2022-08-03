import { FilterStyled } from "./FilterStyled";
import { useDispatch } from "react-redux";
import { filterActions } from "../../redux/filter";

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(filterActions.filter(e.target.value));
  };

  return (
    <FilterStyled>
      <label htmlFor="filter-id">Find contact by name:</label>
      <input id="filter-id" type="text" onChange={onFilterChange} />
    </FilterStyled>
  );
};

export default Filter;
