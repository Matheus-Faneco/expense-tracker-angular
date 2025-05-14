export interface Expense {
  id?: number;
  user: number;
  title: string;
  amount: number;
  description: string;
  date: string;
  category: 'groceries' | 'leisure' | 'electronics' | 'utilities' | 'clothing' | 'health' | 'others';
}
