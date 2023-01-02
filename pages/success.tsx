import Image from "next/image"

const PayPalSuccessPage = () => {
    return (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center border-1 p-16 mx-auto shadow-lg m-6 rounded-sm">
          <Image
            src='/success.png'
            width={100}
              height={59}
            alt="13"
            priority/>

            <h2 className="text-xl mt-8">Password Changed</h2>

            <h4 className="text-sm mt-1">You have successfully changed your password</h4>
        </div>

           <div className="flex flex-row items-center">
           <Image src='/lock.png'
            width={10}
              height={10}
            alt="13"
            priority/>  

            <h5 className="text-sm ml-2">Secured by <b>PayPal</b></h5>
            </div>      
        </div>
       
    )
}

export default PayPalSuccessPage