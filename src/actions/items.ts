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

export async function getItemsByPage(
  page: number,
  itemsPerPage: number
): Promise<{
  items: Item[];
  isLastPage: boolean;
}> {
  const dbPath = path.join(process.cwd(), "items.db");
  const db = new Database(dbPath, { verbose: console.log });

  try {
    const offset = (page - 1) * itemsPerPage;

    const items = db
      .prepare("SELECT * FROM items ORDER BY id ASC LIMIT ? OFFSET ?")
      .all(itemsPerPage + 1, offset) as Item[];

    const isLastPage = items.length <= itemsPerPage;

    return {
      items: isLastPage ? items : items.slice(0, itemsPerPage),
      isLastPage,
    };
  } finally {
    db.close();
  }
}

export async function buyItem(id: number) {
  const dbPath = path.join(process.cwd(), "items.db");
  const db = new Database(dbPath, { verbose: console.log });

  db.prepare("UPDATE items SET totalSales = totalSales + 1 WHERE id = ?").run(
    id
  );
}
