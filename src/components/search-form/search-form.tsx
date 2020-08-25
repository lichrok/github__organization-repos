import React, { useState, useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import useDebounce from '../../utils/debounce';
import { ActionCreator } from '../../redux/actions';
import { useStyles } from './styles';

interface Props {
  onSubmit: (value: string) => void;
}

const TYPING_DELAY = 800;

const SearchForm = ({ onSubmit }: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState(``);
  const debouncedSearchTerm = useDebounce(value, TYPING_DELAY);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSubmit(value);
    }
  }, [debouncedSearchTerm, onSubmit, value]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(value);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div className={classes.header}>
      <Container maxWidth="md" >
        <form
          className={classes.searchForm}
          onSubmit={handleSubmit}
        >
          <InputBase
            className={classes.searchInput}
            placeholder="Start to type organization..."
            value={value}
            onChange={handleInputChange}
          />
        </form>
      </Container>
    </div>
  );
}

export const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSubmit(org: string) {
    dispatch(ActionCreator.getRepositories(org));
  },
});

export default connect(null, mapDispatchToProps)(SearchForm);
