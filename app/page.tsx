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
      <BalanceViewCard currencySymbol='$' totalAmount='198' />
      <Stack mt={2}>
        <Button variant="contained" color="info">
          ADD NOTE
        </Button>
      </Stack>
      <Stack mt={2} spacing={2}>
        <NoteCard title='test note test note test note test note test note test note test note test note test note' date='20 Aug 2023' currencySymbol='$' amount='99'/>
        <NoteCard title='test note test note test note test note test note test note test note test note test note' date='20 Aug 2023' currencySymbol='$' amount='99'/>
        <NoteCard title='test note test note test note test note test note test note test note test note test note' date='20 Aug 2023' currencySymbol='$' amount='99'/>
      </Stack>
    </main>
  )
}
