import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import AddForm from './AddForm';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#fff',
    border: 'none',
    borderRadius: 2,
    boxShadow: 24,
    p: 4
};

export default function AddEntryModal({
    open, setOpen, currencyName
}: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    currencyName: string,
}) {
    const handleClose = () => setOpen(false);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <AddForm currencyName={currencyName} handleModalClose={handleClose} />
                </Box>
            </Fade>
        </Modal>
    );
}