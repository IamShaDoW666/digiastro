import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/images/logolovosis.svg';

const Whatsapp = () => {
     const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='Lovosis Technology Dubai' 
    phoneNumber='+971502688027' 
    avatar={logoUrl} 
    statusMessage="Live chat now"
    chatMessage="Welcome to Lovosis Technology 🤝. How can we help?"
    />
}

export default Whatsapp;