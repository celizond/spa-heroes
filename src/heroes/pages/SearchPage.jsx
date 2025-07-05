import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { searchText, onInputChange, onResetForm } = useForm({searchText: ''});
  const { q = '' } = queryString.parse(location.search)

  const onSubmitHero = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
    onResetForm();
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>

        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmitHero}>
            <input
              type="text"
              placeholder='Search a hero'
              className='form-control'
              autoComplete='off'
              name='searchText'
              value={searchText}
              onChange={onInputChange}
              onReset={onResetForm}
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Result</h4>
          <hr />

          <div className='alert alert-primary'>
            Search a hero
          </div>

          <div className='alert alert-danger'>
            No hero with <b>{q}</b>
          </div>

          <HeroCard />
        </div>

      </div>
    </>
  )
}
