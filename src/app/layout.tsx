
import { Poppins, Inter } from 'next/font/google';
import Script from 'next/script';
import { Providers } from "@/provider";

import '@/styles/vendor/bootstrap/css/bootstrap.min.css';
import '@/styles/vendor/simple-datatables/style.css';
import '@/styles/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/styles/vendor/boxicons/css/boxicons.min.css';
import '@/styles/vendor/remixicon/remixicon.css';
import '@/styles/globals.css';

export const metadata = {
  title: 'Suntree',
  description: 'By Sunknolodge',
}

const poppins = Poppins({
  weight: ['300'],
  subsets: ['latin']
}) 
//===============OR========================
// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body ><Providers>{children}</Providers></body>
      <Script type="text/javascript" src="assets/js/jquery-3.5.1.min.js" />
      <Script type="text/javascript" src="assets/js/jquery-ui.min.js" />
      <Script type="text/javascript" src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script type="text/javascript" src="assets/vendor/quill/quill.min.js" />
      <Script type="text/javascript" src="assets/vendor/tinymce/tinymce.min.js" />
      <Script type="text/javascript" src="assets/js/main.js" />
    </html>
  )
}
