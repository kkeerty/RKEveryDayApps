import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'RK Everyday Apps — Small tools for better days', description:'Thoughtfully made apps for the things you do every day: plan, focus, remember, and grow.', openGraph:{title:'RK Everyday Apps',description:'Small tools. Better days.',type:'website'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
