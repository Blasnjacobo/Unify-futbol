import { Typography, AppBar, Button, CssBaseline, Grid, Toolbar, Box } from '@material-ui/core'
import useStyles from './styles'
import balon from './balon.png'

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <AppBar position='relative' className={classes.container}>
        <Toolbar className={classes.flex}>
          <Box className={classes.logo} width={{ xs: '100%', sm: '50%', md: '30%' }}>
            <div className={`${classes.flex} ${classes.culiacan}`}>
              <Typography style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Unify Futbol</Typography>
              <Typography variant='h9'>(Culiacan)</Typography>
            </div>
            <img src={balon} alt='logo' height='70' width='60' />
          </Box>
          <Grid container xs={1} sm={10} md={9} justifyContent='flex-end' alignItems='center' spacing={2}>
            <Grid item>
              <Button>Calendario</Button>
            </Grid>
            <Grid item>
              <Button>Tabla General</Button>
            </Grid>
            <Grid item>
              <Button>Stats</Button>
            </Grid>
            <Grid item>
              <Button>Clubs</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
