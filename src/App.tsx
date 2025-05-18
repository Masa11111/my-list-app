import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './components/layouts/AppLayout';
import db from './firebase';
import Home from './pages/Home';
import NoMatchPath from './pages/NoMatchPath';
import Report from './pages/Report';
import { theme } from './theme/theme';
import { FireStoreError } from './types/fireStoreError';
import { Transactions } from './types/typeTransactions';
import { formatMonth } from './utils/formatting';

function App() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // データを取得（初回レンダリング時のみ）
  useEffect(() => {
    const fetcheTransactions = async () => {
      console.log("fetcheTransactions start !!");
      try
      {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const transactionsData = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as Transactions // 型アサーション
        })
        setTransactions(transactionsData)
      }
      catch (error)
      {
        // エラー処理
        if (isFireSoreError(error))
        {
          console.log(error)
          console.log(error.message)
          console.log(error.code)
        } else
        {
          console.log(error)
        }
      }
    }
    fetcheTransactions();
  }, [])

  // 今月のデータを抽出
  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(formatMonth(currentMonth))
  })

  // FireStoreのエラーか判定する
  function isFireSoreError(error: unknown): error is FireStoreError {
    return typeof error === "object"
      && error !== null
      && "code" in error
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Home monthlyTransactions={monthlyTransactions} />} />
              <Route path='/report' element={<Report />} />
              <Route path='*' element={<NoMatchPath />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
