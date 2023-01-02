import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import { Component, ReactNode } from 'react'
import PayPalImage from '../components/image/image'
import PayPalText from '../components/text/text'
import PayPalInput from '../components/input/input'
import PayPalButton from '../components/button/button'
import PayPalForm from '../components/form/form'
import Link from 'next/link'
import PayPalFooter from '../components/footer/footer'

const inter = Inter({ subsets: ['latin'] })


export default class App extends Component{
  constructor(props: any){
    super(props)
  }

  render(): ReactNode {
    return (
      <div className='flex flex-col sm:p-4 p-4 mx-4'>
        <PayPalImage/>
        <PayPalText />
        <PayPalForm />
        <Link className='text-blue-500 text-center mt-4' href={'#'}>
        Return to PayPal Login
        </Link>
      </div> 
    )
  }
}
