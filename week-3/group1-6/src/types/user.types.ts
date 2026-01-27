export interface UserProps {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: number;
  image: string;
}