import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';


const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function CountryDropdown() {
    const { countriesList, setSelectedCountry } = useContext(GlobalContext);
    const classes = useStyles();

    const onCountryChange = (event, value) => {
        if (countriesList) {
            setSelectedCountry(value);
        }
    }

    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300, marginLeft: '10px', marginRight: '10px', backgroundColor: 'white' }}
            options={countriesList}
            onChange={onCountryChange}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.country}
            renderOption={(option) => (
                <React.Fragment>
                    <span>
                        <img src={option.countryInfo.flag} style={{ width: '30px' }} border="1" alt="Flag" />
                    </span>
                    {option.country} ({option.countryInfo.iso2})
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}