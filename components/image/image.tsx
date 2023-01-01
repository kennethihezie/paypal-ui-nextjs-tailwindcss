import Image from 'next/image'

const PayPalImage = () => {
    return (
        <div className='flex flex-col items-center mx-auto'>
            <Image
               src='/paypal.png'
               alt="13"
              width={40}
              height={31}
              priority
            />
        </div>
    )
}

export default PayPalImage