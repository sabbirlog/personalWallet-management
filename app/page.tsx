'use client'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { BalanceViewCard, NoteCard } from "./ui/index";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [filteredId, setFilteredId] = useState()

  useEffect(() => {
    const getNotes = localStorage.getItem('notesArray') && JSON.parse(localStorage.getItem('notesArray'));
    if (getNotes) {
      setNotes(getNotes)
    }
    if (notes?.length !== 0 && filteredId) {
      const filteredNotes = notes?.filter((note: any) => note.id !== filteredId)
      setNotes(filteredNotes);
      localStorage.setItem('notesArray', JSON.stringify(filteredNotes))
    }
  }, [filteredId])

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '100px 0'
    }}>
      <BalanceViewCard currencySymbol='$' totalAmount='198' />
      <Stack mt={2}>
        <Link href='/add'>
          <Button variant="contained" color="info">
            ADD NOTE
          </Button>
        </Link>
      </Stack>
      <Stack mt={2} spacing={2}>
        {
          notes.length !== 0 ? notes?.map((note: any) => <NoteCard key={note.id} title={note.note}
            date='20 Aug 2023' currencySymbol='$'
            amount={note.totalAmount} handleDelete={() => setFilteredId(note.id)} />) : 'nothing'
        }
      </Stack>
    </main>
  )
}
