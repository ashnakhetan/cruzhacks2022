import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Chat from './components/Chat'
import './App.css';
//changes to imports 
import TrashIcon from '@material-ui/icons/DeleteOutline';
import CompostIcon from '@material-ui/icons/Spa';
import HazardIcon from '@material-ui/icons/Spa';


const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Let's talk trash
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
           A survey of 2,000 Americans conducted by Waste30 in 2019 revealed that 62 percent of respondents worry that a lack of knowledge is causing them to recycle incorrectly.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<TrashIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Recycle" btnTitle="Show me More" />
          <Grid icon={<CompostIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Compost" btnTitle="Show me More"/>
          <Grid icon={<HazardIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Hazardous" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
        </div>
      </ThemeProvider>
      <Chat/>
    </div>
  );
}

export default App;