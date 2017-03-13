import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

const muiTheme = getMuiTheme({
  palette: {
    spacing: Spacing,
    zIndex: zIndex,
    fontSize: '1.8rem',
    textTransform: 'normal',
    fontFamily: 'childline-bold, sans-serif',
    primary1Color: '#0c3d52',   /* backgroundColor */
    primary2Color: '#0c3d52',
    primary3Color: '#0c3d52',
    accent1Color: '#0c3d52',
    accent2Color: '#0c3d52',
    accent3Color: '#0c3d52',
    textColor: '#0c3d52',       /* general text color e.g.: in list items */
    alternateTextColor: '#fff', /* button text color */
    canvasColor: '#0c3d52',
    borderColor: '#0c3d52',
    disabledColor: '#0c3d52',
    pickerHeaderColor: '#0c3d52'
  }
})

module.exports = muiTheme
