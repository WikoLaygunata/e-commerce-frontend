export interface User {
    id: number;
    username: string;
    name: string;
    password: string;
    email: string;
    phone: string;
    address: string | null;
    role: string;
    updatedAt: string | null;
    createdAt: string;
    carts: any[];
  }