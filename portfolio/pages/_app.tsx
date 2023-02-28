import { TabInterface } from '@/interfaces/TabInterface';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router';
import { RecoilRoot, useRecoilState } from 'recoil'
import { StatusState } from './../atoms/StatusStateAtom';




export default function App({ Component, pageProps }: AppProps) {

  
  
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  ) 
}
