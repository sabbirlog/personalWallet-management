'use client'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { BalanceViewCard, NoteCard } from "./ui/index";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import CurrencyConverter from './ui/CurrencyConverter';
import { fetchCurrency } from './api/fetchCurrency';
import { getSymbols } from '@/utils/getSymbols';
import { Box, Container, Typography } from '@mui/material';
import AddEntryModal from './ui/AddEntryModal';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [notes, setNotes] = useState([]);
  const [filteredId, setFilteredId] = useState();
  const [totalBalan, setTotalBalan] = useState<any>(0);
  const [currencies, setCurrencies] = useState();
  const [value, setValue] = useState<any>();

  console.log('value', value)

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    const getNotes = localStorage.getItem('notesArray') && JSON.parse(localStorage.getItem('notesArray'));
    const totalBalance = localStorage.getItem('totalBalance') && localStorage.getItem('totalBalance');
    if (getNotes) {
      setNotes(getNotes)
    }
    if (totalBalance) {
      setTotalBalan(totalBalance)
    }
    if (notes?.length !== 0 && filteredId) {
      const filteredNotes = notes?.filter((note: any) => note.id !== filteredId)
      setNotes(filteredNotes);
      localStorage.setItem('notesArray', JSON.stringify(filteredNotes))
    }

    const fetchData = async () => {
      const data = await fetchCurrency();
      if (data) {
        setCurrencies(data)
      }
    }
    fetchData()
  }, [filteredId])

  const convertion = currencies && currencies.data[value];

  return (
    <main style={{
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      padding: '100px 0'
    }}>
      <Container>
        <Stack direction="row" spacing={2} mb={4} justifyContent='space-between'>
          <Typography component='h2' variant='h2'>
            Personal Wallet Management
          </Typography>
          <Button variant="contained" color="info" onClick={handleModalOpen}>
            ADD NOTE
          </Button>
        </Stack>
        <CurrencyConverter setCurrency={setValue} />
        <BalanceViewCard currencySymbol={getSymbols(value)} totalAmount={(totalBalan * convertion).toFixed(2) || 0} />
        <Stack mt={2} spacing={2}>
          <Typography mb={2} component='h3' variant="h3" justifySelf="flex-start">
            Note Lists
          </Typography>
          {
            notes.length !== 0 ? notes?.map((note: any) => <NoteCard key={note.id} title={note.note} type={note.type}
              currencySymbol={getSymbols(value)}
              currencyName='USD'
              amount={(note.totalAmount * convertion).toFixed(2)} handleDelete={() => setFilteredId(note.id)} />) : <Box>
              No notes found
            </Box>
          }
        </Stack>
      </Container>
      <AddEntryModal open={openModal} setOpen={setOpenModal} />
    </main>
  )
}
