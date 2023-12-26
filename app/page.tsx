'use client'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { BalanceViewCard, NoteCard } from "./ui/index";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import CurrencyConverter from './ui/CurrencyConverter';
import { fetchCurrency } from './api/fetchCurrency';
import { getSymbols } from '@/utils/getSymbols';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [filteredId, setFilteredId] = useState();
  const [totalBalan, setTotalBalan] = useState<any>();
  const [currencies, setCurrencies] = useState();
  const [value, setValue] = useState<any>();

  console.log('value', value)

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

  const convertion = currencies && currencies.data[value]

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '100px 0'
    }}>
      <CurrencyConverter setCurrency={setValue} />
      <BalanceViewCard currencySymbol={getSymbols(value)} totalAmount={(totalBalan * convertion).toFixed(2) || 0} />
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
            currencySymbol={getSymbols(value)}
            amount={(note.totalAmount * convertion).toFixed(2)} handleDelete={() => setFilteredId(note.id)} />) : 'nothing'
        }
      </Stack>
    </main>
  )
}
