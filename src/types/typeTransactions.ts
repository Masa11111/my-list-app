export type TransactionType = "income" | "expense";
export type IncomCategory = "給与" | "副収入" | "臨時収入";
export type ExpenceCategory = "食費" | "家賃" | "光熱費" | "日用品" | "外食費" | "クレカ" | "奨学金" | "車関連" | "保険" | "スマホ";

export interface Transactions {
  id: string,
  date: string,
  amount: number,
  content: string,
  type: TransactionType,
  category: IncomCategory | ExpenceCategory
}