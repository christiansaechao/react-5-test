interface User {
  name: string;
  email: string;
}

export interface Person extends User {
  age: number;
  height: number;
}