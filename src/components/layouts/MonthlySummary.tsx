import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Transactions } from '../../types/typeTransactions';
import { convertBalanceToComma, financeCaluclations } from '../../utils/financeCalculations';

interface MonthlySummaryProps {
  monthlyTransactions: Transactions[]
}

function MonthlySummary({ monthlyTransactions }: MonthlySummaryProps) {

  // 当月の収支を集計・取得（カンマ編集済み）
  const { income, expense, balance } = convertBalanceToComma(financeCaluclations(monthlyTransactions));

  return (
    <>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} mb={2}>

        {/* 収入 */}
        <Grid size={4} display={"flex"} flexDirection={"column"}>
          <Card sx={{ bgcolor: (theme) => theme.palette.incomColor.main, color: 'white' }}>
            <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
              <Stack direction={"column"} alignItems={"center"} >
                <ArrowDownwardIcon sx={{ fontSize: '2rem' }} />
                <Typography>収入</Typography>
              </Stack>
              <Typography
                textAlign={"right"}
                variant='h5'
                fontWeight={'fontWeightBold'}
                sx={{
                  wordBreak: 'break-word',
                  fontSize: {
                    sx: '0.8rem',
                    sm: '1rem',
                    md: '1.2rem'
                  }
                }}
              >{income}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* 支出 */}
        <Grid size={4} display={"flex"} flexDirection={"column"}>
          <Card sx={{ bgcolor: (theme) => theme.palette.expenceColor.main, color: 'white' }}>
            <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
              <Stack direction={"column"} alignItems={"center"} >
                <ArrowUpwardIcon sx={{ fontSize: '2rem' }} />
                <Typography>支出</Typography>
              </Stack>
              <Typography
                textAlign={"right"}
                variant='h5'
                fontWeight={'fontWeightBold'}
                sx={{
                  wordBreak: 'break-word',
                  fontSize: {
                    sx: '0.8rem',
                    sm: '1rem',
                    md: '1.2rem'
                  }
                }}>{expense}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* 差引 */}
        <Grid size={4} display={"flex"} flexDirection={"column"}>
          <Card sx={{ bgcolor: (theme) => theme.palette.balanceColor.main, color: 'white' }}>
            <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
              <Stack direction={"column"} alignItems={"center"}>
                <AccountBalanceWalletIcon sx={{ fontSize: '2rem' }} />
                <Typography>差引</Typography>
              </Stack>
              <Typography
                textAlign={"right"}
                variant='h5'
                fontWeight={'fontWeightBold'}
                sx={{
                  wordBreak: 'break-word',
                  fontSize: {
                    sx: '0.8rem',
                    sm: '1rem',
                    md: '1.2rem'
                  }
                }}>{balance}</Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid >
    </>
  )
}

export default MonthlySummary
