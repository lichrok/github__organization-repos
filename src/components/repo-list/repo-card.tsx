import React from 'react';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Repository as Props } from '../../core/models/repository';
import { useStyles } from './styles';

const STATISTIC_ICONS = new Map([
  ["stargazers", StarIcon],
  ["watchers", VisibilityIcon],
  ["forks", CallSplitIcon],
]);

const RepoCard = ({
  name,
  description,
  url,
  statistics,
}: Props) => {
  const classes = useStyles();

  const statisticInfo = Object.entries(statistics).map(([name, count]) => {
    const Icon = STATISTIC_ICONS.get(name);

    return (
      <Badge
        className={classes.stat}
        badgeContent={count}
        max={999}
        showZero
        key={name}
      >
        {Icon && <Icon />}
      </Badge>
      
    );
  });

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom component="h2">
          <Link href={url} target="_blank" rel="norefferer">
            {name}
          </Link>
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            paragraph
          >
            {description}
          </Typography>
        )}
        <div className={classes.statList}>{statisticInfo}</div>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
