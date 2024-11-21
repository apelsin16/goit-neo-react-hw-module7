import { useId } from 'react';
import { changeFilter, selectNameFilter } from '../../redux/filterSlice';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {
    const searchId = useId();
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={css.SearchBox}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input
                type="text"
                id={searchId}
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
                className={css.input}
            />
        </div>
    );
};

export default SearchBox;
