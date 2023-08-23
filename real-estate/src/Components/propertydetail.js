import React from "react";



const propertydetail = () => {
    return ( 
        <>
        <center><img className="imgdetail" src= "assets\img\slide-2.jpg" alt="Picture" /></center>
        <center><h2 className="propertydetail">Property Details</h2></center>
        <br />
        <center>
        <table className="detailtable">
  <tr>
    <th>Purpose</th>
    <td>Sale</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>House</td>
  </tr>
  <tr>
    <th>Location</th>
    <td>Gulshan-e-Iqbal</td>
  </tr>
  <tr>
    <th>Property Title</th>
    <td>Shadman House</td>
  </tr>
  <tr>
    <th>Price(PKR)</th>
    <td>25000k</td>
  </tr>
  <tr>
    <th>Area(sq yards)</th>
    <td>400</td>
  </tr>
  <tr>
    <th>No of Beds</th>
    <td>5</td>
  </tr>
  <tr>
    <th>No of Baths</th>
    <td>4</td>
  </tr>
  
</table> 
<br />
<h4 className="rating">Rating:&nbsp;</h4>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
<br />
<button className="report" type="submit">Report Property</button>
</center>
<br /><br />

        </>
        
     );
}
 
export default propertydetail;