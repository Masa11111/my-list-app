import { Box } from "@mui/material"
import Calendar from "../components/layouts/Calendar"
import MonthlySummary from "../components/layouts/MonthlySummary"
import TransactionForm from "../components/layouts/TransactionForm"
import TransactionMenu from "../components/layouts/TransactionMenu"
import { Transactions } from "../types/typeTransactions"

interface HomeProps {
  monthlyTransactions: Transactions[]
}

const Home = ({ monthlyTransactions }: HomeProps) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* 集計・カレンダー */}
        <Box sx={{ flexGrow: 1 }}>
          <MonthlySummary monthlyTransactions={monthlyTransactions} />
          <Calendar />
        </Box>
        {/* 詳細・入力フォーム */}
        <Box>
          <TransactionMenu />
          <TransactionForm />
        </Box>
      </Box>
    </>
  )
}

export default Home
