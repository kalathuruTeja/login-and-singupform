import React, { useState } from "react";

const LoginForm = () => {
    const initialValues = '';
  const [email, setEmail] = useState(initialValues);
  const [password, setPassword] = useState(initialValues);

  const [allentry, setAllentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    // if(!newEntry.email === '' && !newEntry.email === '' ) {
    setAllentry([newEntry]);
    console.log(allentry);
    // }
  };

  const resetInputField = () => {
    setPassword("");
    setEmail("");
  };

    return (
     <center>
        
   
       <form action="" onSubmit={submitForm} className="innerForm">
          <div className="header">
           <h1> Welcome to login screen</h1>
         </div>
          <div>
           <label htmlFor="email" className="form-label">Email</label>
           <input className="form-input"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Enter the email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
           </div>

            <div>
               <label htmlFor="password" className="form-label">Password</label>
                <input className="form-input"
                type="password"
                 name="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               / ><br/>
            </div>

             <button type="submit" onClick={submitForm} className="btn-submit">Submit</button>
             <button onClick={resetInputField} className="btn-reset">Reset</button>
        </form>


            <div className="result">
             {allentry.map((currentElement) => {
              return (
                <div className="show">
                  <p>Email id is : <b>{currentElement.email}</b> Password is : <b>{currentElement.password}</b></p>
                </div>
                 );
                })}
            </div>

        
                <h2>Sign Up</h2>
    <input type="text" placeholder="First name" />
    <input type="text" placeholder="Last name" /> <br/> <br/>
    <input type="text" placeholder="Mobile number or Email" /> <br/> <br/>
    <input type="text" placeholder="New Password" />

    <p> <strong> Gender </strong> </p>
    <input type="radio" name="em" /> Male
    <input type="radio" name="em"/> Female
    <input type="radio" name="em"/> Custom

    
    <p> <strong> Date Of Birth </strong> </p>
    <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
        <option value="">11</option>
        <option value="">12</option>
        <option value="">13</option>
        <option value="">14</option>
        <option value="">15</option>
        <option value="">16</option>
        <option value="">17</option>
        <option value="">18</option>
        <option value="">19</option>
        <option value="">20</option>
        <option value="">21</option>
        <option value="">22</option>
        <option value="">23</option>
        <option value="">24</option>
        <option value="">25</option>
        <option value="">26</option>
        <option value="">27</option>
        <option value="">28</option>
        <option value="">29</option>
        <option value="">30</option>
        <option value="">31</option>
    </select>
    <select name="" id="">
        <option value="">January</option>
        <option value="">February</option>
        <option value="">March</option>
        <option value="">April</option>
        <option value="">May</option>
        <option value="">June</option>
        <option value="">July</option>
        <option value="">August</option>
        <option value="">September</option>
        <option value="">October</option>
        <option value="">November</option>
        <option value="">December</option>
    </select>
    <select name="" id="">
        <option value="">1990</option>
        <option value="">1991</option>
        <option value="">1992</option>
        <option value="">1993</option>
        <option value="">1994</option>
        <option value="">1995</option>
        <option value="">1996</option>
        <option value="">1997</option>
        <option value="">1998</option>
        <option value="">1999</option>
        <option value="">2001</option>
        <option value="">2002</option>
        <option value="">2003</option>
        <option value="">2004</option>
        <option value="">2005</option>
        <option value="">2006</option>
        <option value="">2007</option>
        <option value="">2008</option>
        <option value="">2009</option>
        <option value="">2010</option>
        <option value="">2011</option>
        <option value="">2012</option>
        <option value="">2013</option>
        <option value="">2014</option>
        <option value="">2015</option>
        <option value="">2016</option>
        <option value="">2017</option>
        <option value="">2018</option>
        <option value="">2019</option>
        <option value="">2020</option>
        <option value="">2021</option>
        <option value="">2022</option>
        <option value="">2023</option>
        <option value="">2024</option>
        <option value="">2025</option>
        <option value="">2026</option>
        <option value="">2027</option>
        <option value="">2028</option>
        <option value="">2029</option>
        <option value="">2030</option>
    </select>
    <br/>
    <br/>
    <button type="submit" onClick={submitForm} className="btn-submit">Submit</button>
                    
    </center>
    
  );
};

export default LoginForm;