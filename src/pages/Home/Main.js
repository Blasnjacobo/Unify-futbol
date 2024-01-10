/* eslint-disable no-unused-vars */
import { Typography, Button, Card, Divider, CssBaseline, Grid, Container, CardMedia, CardContent, CardActions } from '@material-ui/core'
import useStyles from './styles'
import league from './league.png'
import blas from './Blas.jpg'
import standings from './standings.png'
const Main = () => {
  const classes = useStyles()

  return (
    <main>
      <CssBaseline />
      <Container>
        <Grid container spacing={2} style={{ marginTop: '2rem' }}>
          {/* Left column */}
          <Grid item xs={12} md={9}>
            <Card className={classes.card}>
              {/* ... First Card Content ... */}
              {/* Card 1 */}
              <CardMedia
                className={classes.cardMedia}
                image={blas}
                title='Image title'
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5'>
                  Blas causa grandes sensaciones tras el inicio de la temporada
                </Typography>
                <Typography>
                  El jugador de regenerados registra 3 goles y 2 asistencia en su primer juego de la temporada
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} md={3} container direction='column'>
            <Grid item container direction='column' spacing={2}>
              {/* Card 2 */}
              <Grid item>
                <Card
                  className={`${classes.card} ${classes.SecondCard}`}
                  style={{ width: '100%' }}
                >
                  {/* ... Second Card Content ... */}
                  <CardMedia
                    className={classes.cardMedia}
                    image={league}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      El torneo tan esperado ha comenzado, 2024 se viene prometedor
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* Divider between Card 2 and Card 3 */}
              <Grid item>
                <Divider className={classes.divider} />
              </Grid>
              {/* Card 3 */}
              <Grid item>
                <Card
                  className={`${classes.card} ${classes.SecondCard}`}
                  style={{ width: '100%' }}
                >
                  {/* ... Third Card Content ... */}
                  <CardMedia
                    className={classes.cardMedia}
                    image={standings}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Asi la tabla general al momento
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default Main
