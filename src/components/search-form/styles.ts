import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 3,
    width: '100%',
    backgroundColor: '#252a2f',
    padding: theme.spacing(4, 0),
  },
  searchForm: {
    backgroundColor: '#45494d',
    borderRadius: '6px',
  },
  searchInput: {
    padding: theme.spacing(1, 2),
    ...theme.typography.h5,
    color: '#fff',
    width: '100%',
  },
}));
