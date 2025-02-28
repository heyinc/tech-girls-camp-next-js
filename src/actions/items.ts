'use server'

import Database from "better-sqlite3";
import path from "path";

export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  totalSales: number;
}

export async function getItemById(id: number): Promise<Item | undefined> {
  const dbPath = path.join(process.cwd(), "items.db");
  const db = new Database(dbPath, { verbose: console.log });
  
  try {
    return db.prepare("SELECT * FROM items WHERE id = ?").get(id) as Item | undefined;
  } finally {
    db.close();
  }
}

export async function getAllItems(): Promise<Item[]> {
  const dbPath = path.join(process.cwd(), "items.db");
  const db = new Database(dbPath, { verbose: console.log });
  
  try {
    return db.prepare("SELECT * FROM items ORDER BY id ASC").all() as Item[];
  } finally {
    db.close();
  }
} 