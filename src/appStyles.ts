import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(5, 0),
    minHeight: '100vh',
  }
}));
