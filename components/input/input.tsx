const PayPalInput = () => {
    return (
        <div className="flex flex-col">
          <input id="username" type="text" className="p-4 border-2 border-gray-400 rounded-lg  px-4 placeholder:text-xl  focus:outline-none focus:border-blue-600" placeholder="Username or phone number" required/>        
          <input id="oldPassword" type="password" className="p-4 border-2 border-gray-400 rounded-lg px-4 placeholder:text-xl  focus:outline-none focus:border-blue-600 mt-4" placeholder="Old password" required/>    
          <input id="newPassword" type="password" className="p-4 border-2 border-gray-400 rounded-lg px-4 placeholder:text-xl focus:outline-none focus:border-blue-600 mt-4" placeholder="Create password" required/>        
          <input id="confirmPassword" type="password" className="p-4 border-2 border-gray-400 rounded-lg px-4 placeholder:text-xl  focus:outline-none focus:border-blue-600 mt-4" placeholder="Confirm password" required/>        
        </div>
    )
}

export default PayPalInput