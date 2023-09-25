import { FcSearch } from 'react-icons/fc';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    onSubmit(value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" required />
      <button type="submit">
        <FcSearch />
      </button>
    </form>
  );
};

// FcSearch;
