import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({
    open,
    setOpen,
    handleDelete
}: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    handleDelete: (event?: React.MouseEvent<HTMLElement>) => void
}) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" fontSize={18} fontWeight={500}>
                Are you want to delete it?
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" variant="contained">Cancel</Button>
                <Button color="warning" variant="contained" onClick={handleDelete}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}