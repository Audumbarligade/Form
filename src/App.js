import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';


function App() {
  const [name,setName]=useState("")
  const [lname,setLname]=useState("")
  const [company,setCompany]=useState("")
  const [job,setJob]=useState("")
  const [mobile,setMobile]=useState("")
  const [email,setEmail]=useState("")
  const [Country,setCountry]=useState("")
  

  function formData(e){
      // let item= e.target.value;
  console.log(name,lname,company,job,mobile,email,Country);
  if( name == ""){
     alert("Name empty ...!!");
      console.log("name empty");

      
  }

  if( lname == ""){
    alert("lastName empty ...!!");
     console.log("lastname empty");

     
 }
  
  
  if( company == ""){
  alert("company empty ...!!");
   console.log("company empty");

   
}
if( job == ""){
  alert("job empty ...!!");
   console.log("job empty");

   
}


  if( mobile == ""){
    alert("mobile number empty...");
     console.log("mobile empty");

     
 }else{
  if(phonenumber(mobile)){
    return true;
  }else{
    alert("mobile number is invalid");
    console.log("mobile number is not valid");
  }
    
  }

  function phonenumber(inputtxt)
{
  var phoneno = /^[0-9]/;
  if((phoneno.test(inputtxt)))
        {
      return true;
        }
      else
        {
        
        return false;
        }
}


    
  
     e.preventDefault();
     e.stopPropagation();
  }
  


  
  return (
    <div className="App">
                

              <h2>Merit Incentives is a proud sponsor of the GCVA Global Conference 2022</h2>
              <p>Fill the information below to claim your GBP 10 Gifit Global card</p>
              
              <form onSubmit={formData} >

              <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>  </Form.Label>
          <Form.Control type="First Name" placeholder="First Name"     onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>   </Form.Label>
          <Form.Control type="Last Name" placeholder="Last Name" onChange={(e)=>setLname(e.target.value)} />
        </Form.Group>
      </Row>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  </Form.Label>
        <Form.Control type="Company Name" placeholder="Company Name" onChange={(e)=>setCompany(e.target.value)} />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  </Form.Label>
        <Form.Control type="" placeholder="Job Title" onChange={(e)=>setJob(e.target.value)} />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>


         
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  </Form.Label>
        <Form.Control type="mobile Number" placeholder="mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>


          

     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  </Form.Label>
        <Form.Control type="Email Address" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>
      <br></br>
        


      <Form.Select  onChange={(e)=>setCountry(e.target.value)} aria-label="Default select example" >
        
      <option>Country</option>
      <option >India</option>
      <option >Amrica</option>
      <option >Japan</option>
     </Form.Select>
        <br></br>
        <br></br>

      
      <div className="d-grid gap-2">
      <Button variant="info" size="lg" type="submit" >
        Claim my Gifit Global card
      </Button>
      </div>
    
      
      </form>
      
         </div>
        

  );
}

export default App;
