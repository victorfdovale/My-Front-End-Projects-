import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor, neutralColor, secundaryColor} from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white'
    },
    text: {
        primary: secundaryColor
    }
  }
})

export default theme