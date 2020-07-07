import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MapIcon from '@material-ui/icons/Room';
import GraphIcon from '@material-ui/icons/BarChartSharp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import Map from './Map'
import Graphs from './Graphs'

const AntTabs = withStyles({
    root: {
        position: 'absolute',
        right: 0,
    },
    indicator: {
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 108,
        fontWeight: theme.typography.fontWeightMedium,
        marginRight: theme.spacing(4),
        color: '#606060',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#505050',
            opacity: 1,
        },
        '&$selected': {
            color: '#000000',
            fontWeight: theme.typography.fontWeightBold,
        },
        '&:focus': {
            color: '#000000',
            fontWeight: theme.typography.fontWeightBold
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#e0e0e0',
        height: theme.spacing(10)
    },
    rootTabs: {
        flexGrow: 1,
        position: 'absolute',
        right: 0,
        backgroundColor: '#e0e0e0',
    },
    padding: {
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightBold
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{ padding: '0px' }}>
                    <Typography>{children}</Typography>
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

export default function VisualDetails() {
    const { selectedCountry } = useContext(GlobalContext);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const countryName = selectedCountry ? selectedCountry.country : 'Global';

    return (
        <div className={classes.root}>
            <div>
                <AntTabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="visual details"
                    className={classes.rootTabs}
                    TabIndicatorProps={{ style: { background: '#00809d', height: '4px' } }}
                >
                    <AntTab icon={<MapIcon />} label="MAP" />
                    <AntTab icon={<GraphIcon />} label="GRAPHS" />
                </AntTabs>
                <div style={{ minHeight: '72px' }}>
                    <Typography className={classes.padding} variant="h4">{countryName}</Typography>
                </div>
            </div>
            <div style={{ padding: '0px' }}>
                <TabPanel value={value} index={0}>
                    <Map />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Graphs />
                </TabPanel>
            </div>
        </div>
    );
}
