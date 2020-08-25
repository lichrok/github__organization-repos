import React from "react";
import SearchForm from "./components/search-form/search-form";
import RepoList from "./components/repo-list/repo-list";
import { useStyles } from './appStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <SearchForm />
      <RepoList />
    </div>
  );
}

export default App;
