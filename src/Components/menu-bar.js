import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: "#009688",
  },
  nested: {
    paddingRight: theme.spacing(4),
  },
  listItemText:{
      textAlign:'right'
  }
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem selected={1 === props.selectedIndex} button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText  className={classes.listItemText} primary="ثبت درخواست ترفیع" />
      </ListItem>
      <ListItem selected={2 === props.selectedIndex}  button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText  className={classes.listItemText} primary="درخواست های ثبت شده" />
      </ListItem>
    </List>
  );
}
