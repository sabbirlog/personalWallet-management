import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { BalanceViewCard, NoteCard } from "./ui/index";

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '100px 0'
    }}>
      <BalanceViewCard />
      <Stack mt={2}>
        <Button variant="contained" color="info">
          ADD NOTE
        </Button>
      </Stack>
      <Stack mt={2} spacing={2}>
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </Stack>
    </main>
  )
}
