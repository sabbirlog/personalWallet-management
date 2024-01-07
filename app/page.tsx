'use client'

import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha, Card, Container, Typography } from '@mui/material';

import { BalanceViewCard, NoteCard } from "./ui/index";
import CurrencyConverter from './ui/CurrencyConverter';
import AddEntryModal from './ui/AddEntryModal';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [notes, setNotes] = useState<{}[]>([]);
  const [filteredId, setFilteredId] = useState<string>('');
  const [currencyName, setCurrencyName] = useState<string>('USD');

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const totalBalanceByCurrency = (currency: string) => {
    return notes?.reduce((total: number, note: any) => {
      if (note?.currencyName === currency) {
        if (note?.noteType === 'Income') {
          return total + note?.total
        } else {
          return total - note?.total
        }
      }
      return total
    }, 0)
  }

  useEffect(() => {
    const getNotes = localStorage.getItem('notesArray') && JSON.parse(localStorage.getItem('notesArray') as string);
    if (getNotes) {
      setNotes(getNotes)
    }
    if (notes?.length !== 0 && filteredId) {
      const filteredNotes = notes?.filter((note: any) => note.id !== filteredId)
      setNotes(filteredNotes);
      localStorage.setItem('notesArray', JSON.stringify(filteredNotes))
    }
  }, [filteredId, openModal])

  return (
    <main style={{
      padding: '100px 0'
    }}>
      <Container>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={4} justifyContent='space-between'>
          <Typography component='h2' variant='h2'>
            Personal Wallet Management
          </Typography>
          <Button variant="contained" color="info" onClick={handleModalOpen}>
            ADD TRANSACTION
          </Button>
        </Stack>
        <CurrencyConverter currencyName={currencyName} setCurrencyName={setCurrencyName} />
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
          <BalanceViewCard currencyName={currencyName} totalAmount={totalBalanceByCurrency} />
        </Stack>
        <Stack mt={2} spacing={2}>
          <Typography mb={2} component='h3' variant="h3" justifySelf="flex-start">
            Note Lists
          </Typography>
          {
            notes?.length !== 0 && totalBalanceByCurrency(currencyName) !== 0 ? notes?.filter((note: any) => note.currencyName === currencyName)?.map((note: any) => <NoteCard key={note.id} title={note.description} type={note.noteType}
              currencyName={note.currencyName}
              total={note.total}
              notesCount={note.notesCount}
              handleDelete={() =>
                setFilteredId(note.id)
              } />) : (<Card sx={{
                textAlign: 'center',
                backgroundColor: alpha('#e3f2fd', .2)
              }}>
                <Typography component='h2' variant="h2" fontWeight={500}>
                  No notes found
                </Typography>
              </Card>)
          }
        </Stack>
      </Container>
      <AddEntryModal open={openModal} setOpen={setOpenModal} currencyName={currencyName} />
    </main>
  )
}
