import { Inter, Lora, Lusitana } from 'next/font/google';

const lora = Lora({ subsets: ['cyrillic'] });
const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export { lora, inter, lusitana };
