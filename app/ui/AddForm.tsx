"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Box,
    Typography,
    TextField,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Select,
    MenuItem,
    FormHelperText,
    Stack,
} from "@mui/material";
import { getSymbols } from "@utils/getSymbols";

const validation = yup.object().shape({
    note: yup.string().required('Note is required'),
    currencyNote: yup.string().required('Select currency notes'),
    notesCount: yup.number().optional(),
    total: yup.number().optional(),
    noteType: yup.string().optional()
});

const currencyNotes = [
    1, 5, 10, 20
]

export default function AddForm({ currencyName, handleModalClose }: {
    currencyName: string,
    handleModalClose: () => void
}) {
    const { control, handleSubmit, formState: {
        errors
    } } = useForm({
        resolver: yupResolver(validation),
    });

    const [currencyNote, setCurrencyNote] = useState<string>('')

    const [denominations, setDenominations] = useState<{
        '1': number,
        '5': number,
        '10': number,
        '20': number
    }>({
        '1': 0,
        '5': 0,
        '10': 0,
        '20': 0
    })

    const idGenerator = () => {
        return '_' + (Math.random() + 1).toString(36).substring(2);
    }

    const updateDenominations = (value: string) => {
        const convertToInteger = parseInt(value)

        Object.keys(denominations)?.map((denomination) => {
            if (denomination === currencyNote?.toString()) {
                setDenominations(prev => ({
                    ...prev,
                    [denomination]: convertToInteger
                }))
            }
        })
    }

    const calculateTotal = () => {
        return Object.entries(denominations)?.reduce((total, [key, value]) => {
            if (value > 0) {
                const totalAmount = total + parseInt(key) * value
                return totalAmount;
            }
            return total
        }, 0)
    }

    const onSubmit = (data: any) => {
        if (data) {
            delete data?.currencyNote
        }
        const submitData = {
            ...data,
            id: idGenerator(),
            currencyName,
            notesCount: denominations,
            total: calculateTotal(),
        }

        // get notes from local storage
        const savedNotesData = JSON.parse(localStorage.getItem('notesArray')) || [];
        const updatedNotesArray = [...savedNotesData, { ...submitData }];

        // set notes array to local storage
        localStorage.setItem('notesArray', JSON.stringify(updatedNotesArray));

        handleModalClose()
    };

    const currencySymbol = getSymbols(currencyName);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{
                '.MuiFormHelperText-root': {
                    color: '#d32f2f'
                }
            }} mb={2}>
                <Controller name="note" control={control} defaultValue="" render={({ field }) => <TextField
                    {...field}
                    label='Note'
                    type='text'
                    multiline
                    rows={4}
                    variant="outlined"
                    color="info"
                    error={Boolean(errors.note)}
                />}
                />
                <FormHelperText>{errors.note?.message}</FormHelperText>
            </Box>
            <Box sx={{
                '.MuiFormHelperText-root': {
                    color: '#d32f2f'
                },
            }} mb={2}>
                <Controller name="currencyNote" control={control} defaultValue="" render={({ field }) => (
                    <Select
                        {...field}
                        variant="outlined"
                        fullWidth
                        error={Boolean(errors.currencyNote)}
                        displayEmpty
                        color="info"
                        onChange={(e) => {
                            field.onChange(e)
                            setCurrencyNote(e.target.value)
                        }}
                        renderValue={(selected) => selected || 'Currency Notes'}
                    >
                        {
                            currencyNotes?.map((note, i) =>
                                <MenuItem key={i} value={note}>{currencySymbol}{note}</MenuItem>
                            )
                        }
                    </Select>
                )} />
                <FormHelperText>{errors.currencyNote?.message}</FormHelperText>
            </Box>
            <Stack flexDirection='row' gap={2} mb={2}>
                <Controller name="notesCount" control={control} defaultValue={0} render={({ field }) => <TextField
                    {...field}
                    label='Notes Count'
                    type='number'
                    variant="outlined"
                    color="info"
                    onChange={(e) => {
                        field.onChange(e);
                        updateDenominations(e.target.value);
                    }}
                />}
                />
                <Controller name="total" control={control} defaultValue={0}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Total Amount"
                            type='number'
                            value={calculateTotal()}
                            variant="outlined"
                            color="info"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    }
                />
            </Stack>
            <Box>
                <Typography component='h5' variant="h5" sx={{ marginBottom: "6px" }}>
                    Select Note Type
                </Typography>
                <Controller name="noteType" defaultValue='Income' control={control} render={({ field }) => <ToggleButtonGroup
                    {...field}
                    sx={{
                        backgroundColor: "#fff",
                        border: '1px solid #ccc',
                        color: "#000",
                    }}
                    fullWidth
                    color="info"
                    exclusive
                    aria-label="type"
                >
                    <ToggleButton
                        value="Income"
                        sx={{
                            width: "100%",
                            color: "#000",
                            borderRight: '1px solid #ccc'
                        }}
                    >
                        Income
                    </ToggleButton>
                    <ToggleButton
                        value="Expence"
                        sx={{
                            width: "100%",
                            color: "#000",
                        }}
                    >
                        Expence
                    </ToggleButton>
                </ToggleButtonGroup>} />
            </Box>
            <Stack sx={{ marginTop: "20px" }} direction="row" gap={2}>
                <Button
                    sx={{
                        width: '100%'
                    }}
                    variant="contained"
                    color="secondary"
                    onClick={handleModalClose}
                >
                    Cancel
                </Button>
                <Button
                    sx={{
                        width: '100%'
                    }}
                    type="submit"
                    variant="contained"
                    color="info"
                >
                    ADD NOTE
                </Button>
            </Stack>
        </form >
    );
}
