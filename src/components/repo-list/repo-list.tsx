import React, { useState, useEffect, Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import RepoCard from './repo-card';
import { ActionCreator } from '../../redux/actions';
import { Repository } from '../../core/models/repository';
import { RequestStatus } from '../../core/enums/request-status';
import { State } from '../../core/models/state';
import { useStyles } from './styles';

const mapStateToProps = (state: State) => ({
  repositories: state.repositories,
  org: state.org,
  status: state.status,
  pageCount: state.pageCount,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onPaginationChange(org: string, page: number) {
    dispatch(ActionCreator.getRepositories(org, page));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  repositories: Repository[] | null;
  status: RequestStatus;
  pageCount: number;
  org: string;
  onPaginationChange: (org: string, page: number) => void;
};

const RepoList = ({
  repositories,
  status,
  pageCount,
  org,
  onPaginationChange,
}: Props) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const hasRepositories = !!repositories?.length;
  const notFoundMessage = (
    <Typography variant="h5" component="p">
      Wrong organization name 
    </Typography>
  );
  const noReposMessage = (
    <Typography variant="h5" component="p">
      No repositories.
    </Typography>
  );

  useEffect(() => {
    setPage(1);
  }, [org]);

  return (
    <Container className={classes.container}>
      {status === RequestStatus.Pending && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}

      {status === RequestStatus.Success && (
        <>
          <Box>
            {!hasRepositories && noReposMessage}
            <Grid container>
              {repositories?.map((repository) => {
                return (
                  <Grid item xs={12} key={repository.url}>
                    <RepoCard {...repository} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          
          {pageCount > 0 && hasRepositories && (
            <Box display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={(event: object, page: number) => {
                  onPaginationChange(org, page);
                  setPage(page);
                }}
                color="primary"
              />
            </Box>
          )}
        </>
      )}

      {status === RequestStatus.Error && notFoundMessage}
    </Container>
  );
}

export default connector(RepoList);
