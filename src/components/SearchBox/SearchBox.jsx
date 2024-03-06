import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { setNameFilter } from '../../redux/filtersSlice';
import { selectFilters } from '../../redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={evt => dispatch(setNameFilter(evt.target.value))}
      />
    </div>
  );
};
