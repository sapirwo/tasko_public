import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BoardSideBarDashboard } from './BoardSideBarDashboard'
import { BoardChangeTitle } from './BoardChangeTitle'
import { BoardBgImgs } from './BoardBgImgs'
import { BoardSideBarMyBoards } from './BoardSideBarMyBoards'
import { AddNewBoard } from './AddNewBoard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function BoardSideBarMenu({ board, onUpdateBoard, closeSideBar, removeBoard }) {
  const classes = useStyles();
  const [tabIdx, setTabIdx] = React.useState(0);

  const handleChange = (event, newIdx) => {
    setTabIdx(newIdx);
  };

  return (
    <section className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tabIdx}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Title" {...a11yProps(1)} />
          <Tab label="Background" {...a11yProps(2)} />
          <Tab label="My Boards" {...a11yProps(3)} />
          <Tab label="Create Board" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <section className="main-board-side-bar-section">

        <TabPanel value={tabIdx} index={0}>
          <BoardSideBarDashboard
            board={board}
            removeBoard={removeBoard}
            closeSideBar={() => closeSideBar()}
          />
        </TabPanel>
        <TabPanel value={tabIdx} index={1}>
          <BoardChangeTitle
            board={board}
            onUpdateBoard={onUpdateBoard}
            closeSideBar={() => closeSideBar()}
          />
        </TabPanel>
        <TabPanel value={tabIdx} index={2}>
          <BoardBgImgs
            board={board}
            onUpdateBoard={onUpdateBoard}
            closeSideBar={() => closeSideBar()}
          />
        </TabPanel>
        <TabPanel value={tabIdx} index={3}>
          <BoardSideBarMyBoards
            board={board}
            closeSideBar={closeSideBar}
          />
        </TabPanel>
        <TabPanel value={tabIdx} index={4}>
          <AddNewBoard
            closeSideBar={closeSideBar}
            goToMyBoards={() => setTabIdx(3)}
          />
        </TabPanel>
      </section>
    </section>
  )
}