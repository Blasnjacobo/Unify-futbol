import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: theme.spacing(1, 1, 1)
  },
  button: {
    color: 'black'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '1.5rem'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  culiacan: {
    flexDirection: 'column',
    color: 'black'
  },
  font: {
    fontSize: '1.3rem',
    color: 'black',
    fontWeight: 'bold'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingBottom: '45%'
  },
  cardContent: {
    flexGrow: 1
  },
  divider: {
    marginTop: '10px'
  },
  SecondCard: {
    width: '70%'
  }
}))

export default useStyles
