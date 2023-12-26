'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['USD', 'EUR', 'CAD'];

export default function CurrencyConverter({ setCurrency }: {
    setCurrency?: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                setCurrency(newInputValue)
            }}
            id="currency-converter"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField color="secondary" {...params} />}
        />
    );
}