import { BsSearch } from 'react-icons/bs';
import {
  SearchButton,
  SearchFormInput,
  SearchForma,
  SearchHeader,
  SearchLabel,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    onSubmit(value);
    event.target.reset();
  };
  return (
    <SearchHeader>
      <SearchForma onSubmit={handleSubmit}>
        <SearchLabel className="button-label">
          <span className="search-span">Search</span>
        </SearchLabel>
        <SearchFormInput type="text" name="query" required />
        <SearchButton type="submit">
          <BsSearch />
        </SearchButton>
      </SearchForma>
    </SearchHeader>
  );
};
