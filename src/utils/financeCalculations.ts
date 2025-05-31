import { Balance } from "../types/balance";
import { Transactions } from "../types/typeTransactions";

// 収入・支出・残高ごとに集計
export function financeCaluclations(transactions: Transactions[]): Balance {
  return transactions.reduce((acc, transaction) => {

    // 収入データの集計
    if (transaction.type === "income")
    {
      // 収入を加算
      acc.income += transaction.amount;

      // 残高に収入を加算
      acc.balance += transaction.amount;
    }

    // 支出データの集計s
    if (transaction.type === "expense")
    {
      // 支出を加算
      acc.expense += transaction.amount;

      // 残高から支出を減算
      acc.balance -= transaction.amount;
    }
    return acc;
  }, { income: 0, expense: 0, balance: 0 } /* 初期値 */);
}

// カンマ編集処理
export function numberToComma(number: number): string {
  return number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
}

// Balanceインターフェイス型の集計結果をカンマ編集する
export function convertBalanceToComma(balance: Balance): { income: string, expense: string, balance: string } {
  return {
    income: numberToComma(balance.income),
    expense: numberToComma(balance.expense),
    balance: numberToComma(balance.balance),
  }
}