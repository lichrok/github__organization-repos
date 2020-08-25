import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: theme.breakpoints.values.md,
    paddingTop: '120px'
  },
  card: {
    width: "100%",
    marginBottom: '20px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid #e1e4e8'
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  statList: {
    marginTop: '8px'
  },
  stat: {
    display: 'inline-block',
    color: '#6a737d',

    '& svg': {
      height: '18px',
      width: 'auto',
      fill: '#6a737d',
    },
    '&:not(:last-child)': {
      marginRight: theme.spacing(3),
    }
  },
}));
