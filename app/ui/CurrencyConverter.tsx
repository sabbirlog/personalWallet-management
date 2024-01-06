import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { alpha } from '@mui/material';

const currencies = ['USD', 'EUR', 'CAD'];

export default function CurrencyConverter({
    currencyName,
    setCurrencyName
}: {
    currencyName: string,
    setCurrencyName: React.Dispatch<React.SetStateAction<string>>
}) {
    const handleChange = (event: SelectChangeEvent) => {
        setCurrencyName(event.target.value as string);
    };

    return (
        <Box sx={{
            minWidth: 120,
            '.MuiInputLabel-root': {
                color: alpha('#000', .9)
            }
        }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Select Currency</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={currencyName}
                    label="Select Currency"
                    onChange={handleChange}
                >
                    {currencies?.map((currency, i) =>
                        <MenuItem key={i} value={currency}>{currency}</MenuItem>

                    )}
                </Select>
            </FormControl>
        </Box>
    );
}