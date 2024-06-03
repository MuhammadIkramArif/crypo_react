// import logo from '../images/logo.png'
import React,{useState} from 'react'
import WalletPage from '../view/wallet/WalletPage'; 
import LaunchStepThree from '../view/launch-steps/LaunchStepThree';




const Dapp = () => {

  const [showcomponent1,setshowcomponent1] = useState(true);
  const [showcomponent2,setshowcomponent2] = useState(false);

  
   let comp1 = showcomponent1;
   let comp2 = showcomponent2;

    let address = window.sessionStorage.getItem("walletAddress");
    

     if (address){
         
        comp1 = false;
        comp2 = true;
 
    }
    else {
        comp1 = true;
        comp2 = false;
    }


    console.log("1",comp1);
    console.log("2",comp2);

    
    return (
    <div>
     

 { comp1 && <div > <LaunchStepThree/>  </div> }
 { comp2 && <WalletPage/> }
       
  </div>
  )
  
}

export default Dapp;