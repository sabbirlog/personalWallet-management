"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import {
    Box,
    Grid,
    Typography,
    TextField,
    FormControl,
    InputAdornment,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    OutlinedInput,
} from "@mui/material";

export default function AddForm({ notes, setNotes }: any) {
    const [selectedAmount, setSelectedAmount] = useState<number>(1);
    const [readyToSubmit, setReadyToSubmit] = useState(false);

    const router = useRouter()

    const [addNote, setAddNote] = useState({
        note: '',
        notesCount: 0,
        type: '',
        selectedNote: 0,
        totalAmount: 0,
    })

    const [noteErrors, setNoteErrors] = useState({
        note: '',
        notesCount: '',
    });

    const handleNodeClick = (amount: number) => {
        setSelectedAmount(amount);
    };

    const validateForm = () => {
        const errors = {};

        if (isNaN(addNote.notesCount) || addNote.notesCount < 0) {
            errors.notesCount = `You can't provide negative number`;
        }

        if (!addNote.note.trim()) {
            errors.note = 'Note is required';
        }

        setNoteErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const idGenerator = () => {
        return '_' + (Math.random() + 1).toString(36).substring(2);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: any) => {
        if (event.target.name === 'note' || event.target.name === 'notesCount') {
            setAddNote((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
            }))
        } else {
            setAddNote((prev) => ({
                ...prev,
                type: value,
            }))
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            setAddNote((prev) => ({
                ...prev,
                id: idGenerator(),
                selectedNote: selectedAmount,
                totalAmount: +prev.notesCount * selectedAmount,
            }))
            setReadyToSubmit(true);
            router.push('/');
        } else {
            console.log('submition failed');
        }
    }

    useEffect(() => {
        if (readyToSubmit) {
            const savedNotesData = JSON.parse(localStorage.getItem('notesArray')) || [];
            const updatedNotesArray = [...savedNotesData, { ...addNote }];

            // calculate total balance
            const totalBalance = updatedNotesArray?.reduce((accumulator, note) => accumulator += note.totalAmount, 0)
            localStorage.setItem('totalBalance', totalBalance);

            // notes array
            localStorage.setItem('notesArray', JSON.stringify(updatedNotesArray));
        }
    }, [readyToSubmit])

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    padding: "100px 0",
                    width: "500px",
                    margin: "0 auto",
                }}
            >
                <Box
                    sx={{
                        borderRadius: 2,
                        padding: "20px",
                        border: "1px solid #ddd",
                    }}
                >
                    <Box>
                        <Typography variant="h3" sx={{ marginBottom: "5px" }}>
                            Note
                        </Typography>
                        <TextField
                            sx={{
                                background: "#fff",
                                width: "100%",
                                borderRadius: "5px",
                            }}
                            multiline
                            rows={4}
                            variant="outlined"
                            name="note"
                            onChange={handleChange}
                            value={addNote.note}
                            error={!!noteErrors.note}
                            InputProps={{
                                sx: {
                                    '& fieldset': { borderColor: noteErrors.note ? 'red' : undefined },
                                },
                            }}
                        />
                        {
                            noteErrors.note && <Box component="span" sx={{
                                color: 'red'
                            }}>{noteErrors.note}</Box>
                        }
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant="h3" sx={{ margin: "10px 0" }}>
                                    Amount
                                </Typography>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        onChange={handleChange}
                                        type="number"
                                        name="notesCount"
                                        value={addNote.notesCount}
                                        error={!!noteErrors.notesCount}
                                        startAdornment={
                                            <InputAdornment position="start">$</InputAdornment>
                                        }
                                    />
                                </FormControl>
                                {
                                    noteErrors.notesCount && <Box component="span" sx={{
                                        color: 'red'
                                    }}>{noteErrors.notesCount}</Box>
                                }
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h3" sx={{ margin: "10px 0" }}>
                                    Total
                                </Typography>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "53.13px",
                                        backgroundColor: "#fff",
                                        border: "1px solid #ddd",
                                        borderRadius: "5px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography variant="h3" sx={{ margin: "10px 0" }}>
                                        {+addNote.notesCount * selectedAmount}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography variant="h3" sx={{ margin: "10px 0" }}>
                            Currency Nodes
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Button
                                    sx={{
                                        width: "100%",
                                        backgroundColor: selectedAmount === 1 ? "#29b6f6" : "#fff",
                                        color: selectedAmount === 1 ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: "rgba(41, 182, 246, 0.24)",
                                        },
                                    }}
                                    variant="outlined"
                                    startIcon={<Typography>$</Typography>}
                                    onClick={() => handleNodeClick(1)}
                                >
                                    1
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    onClick={() => handleNodeClick(2)}
                                    sx={{
                                        width: "100%",
                                        backgroundColor: selectedAmount === 2 ? "#29b6f6" : "#fff",
                                        color: selectedAmount === 2 ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: "rgba(41, 182, 246, 0.24)",
                                            color: "#fff",
                                        },
                                    }}
                                    variant="outlined"
                                    startIcon={<Typography>$</Typography>}
                                >
                                    2
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography variant="h3" sx={{ marginBottom: "10px 0" }}>
                            Select
                        </Typography>
                        <ToggleButtonGroup
                            sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                            }}
                            fullWidth
                            color="info"
                            value={addNote.type}
                            exclusive
                            onChange={(e: any, value: any) => handleChange(e, value)}
                            aria-label="type"
                        >
                            <ToggleButton
                                value="Income"
                                sx={{
                                    width: "100%",
                                    color: "#000",
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
                        </ToggleButtonGroup>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="info"
                        sx={{ marginTop: "20px" }}
                    >
                        ADD NOTE
                    </Button>
                </Box>
            </Box>
        </form>
    );
}
