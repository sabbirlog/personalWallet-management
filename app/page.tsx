import { BalanceViewCard } from "./ui/index";

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '100px 0'
    }}>
      <BalanceViewCard />
    </main>
  )
}
