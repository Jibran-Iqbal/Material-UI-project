import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=> ({

    container:{
        backgroundColor:theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    typ:{
        width:'50%',
        margin:'inherit'
    },
    icon:{
        marginRight:'20px'
    },
    button:{
        marginTop:'30px'
    },
    cardGrid:{
        padding:'20px 0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardContent:{
        flexGrow:1
    },
    cardMedia:{
        paddingTop:'56.25%' //This gives the aspect ratio of 16:9
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'50px 0'
    }
}))

export default useStyles;