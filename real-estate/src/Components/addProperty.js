import { useState } from "react"


const AddProperty = () => {

    const [purpose,setPurpose] = useState('')
    const [type,setType] = useState('')
    const [area,setArea] = useState(0)
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [bedrooms,setBedrooms] = useState(0)
    const [bathrooms,setBathrooms] = useState(0)
    const [error,setError] = useState(null)


    const handleLocationChange = (e)=>{
        setLocation(e.target.value)
    }

    const handleBedroomChange = (e)=>{
        setBedrooms(e.target.value)
    }

    const handleBathroomChange = (e)=>{
        setBathrooms(e.target.value)
    }

    const formSubmit = async (e)=>{
        e.preventDefault()

        const property = {purpose,type,location,title,description,price,area,bedrooms,bathrooms}

        const response = await fetch('/property',{
            method:'POST',
            body: JSON.stringify(property),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok){
            setTitle('')
            setPurpose('')
            setType('')
            setArea('')
            setDescription('')
            setLocation('')
            setPrice('')
            setBedrooms('')
            setBathrooms('')
            setError(null)
            alert('New Property added!')
        }else{
            console.log(json)
            setError(json.error)
        }

    }


    return (          
        <div className="AddProperty">
            <form name="add_prop" onSubmit={formSubmit} class="add_prop_form">
                <h2>Add Property</h2>
                <div className="div-row">
                    <div>
                        <label for="purpose">Purpose:</label><br />
                        <input type="radio" name="purpose" value="rent" onClick={()=>setPurpose("Rent")}/> Rent <br/>
                        <input type="radio" name="purpose" value="sale" onClick={()=>setPurpose("Sale")}/> Sale
                    </div>
                    <div>
                        <label for="type">Type:</label><br />
                        <input type="radio" name="type" value="house" onClick={()=>setType("House")}/> House<br/>
                        <input type="radio" name="type" value="flat" onClick={()=>setType("Flat")}/> Flat<br/>
                        <input type="radio" name="type" value="plot" onClick={()=>setType("Plot")}/> Plot
                    </div>
                </div>
                    <div className="textInput">
                        <label for="area">Area (in sq yards):</label><br />
                        <input type="number" name="area" id="area" placeholder="Area" onChange={(e)=>setArea(e.target.value)} value={area}/>
                    </div>
                    <div className="textInput">
                        <label for="Prop_title">Property Title:</label><br />
                        <input type="text" name="Prop_title" id="Prop_title" placeholder="Property Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className="textInput">
                        <label for="price">Price:</label><br />
                        <input type="number" name="price" id="price" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </div>
                    <div className="textInput">
                        <label for="description">Description:</label><br />
                        <textarea name="description" id="description" cols="50" rows="10" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                    </div>
                    <div className="select">
                        <label for="location">Location: </label>
                        {/* <input type="text" name="location" id="location" placeholder="Location"/> */}
                        <select name="no_of_bed" id="no_of_bed" value={location} onChange={handleLocationChange}>
                            <option value="" disabled selected hidden>Select Location</option>
                            <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                            <option value="North Nazimabad">North Nazimabad</option>
                            <option value="Bahadurabad">Bahadurabad</option>
                            <option value="PECHS">PECHS</option>
                        </select>
                    </div>
                    <div className="select"> 
                        <label for="no_of_bed">No. of Bedrooms: </label>
                        <select name="no_of_bed" id="no_of_bed" value={bedrooms} onChange={handleBedroomChange}>
                            <option value="" disabled selected hidden>Select Bedrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                <div className="select">
                    <label for="no_of_bath">No. of Bathrooms: </label>
                    <select name="no_of_bath" id="no_of_bath" value={bathrooms} onChange={handleBathroomChange}>
                        <option value="" disabled selected hidden>Select Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div>
                    <button className="submit">Submit</button>
                </div>
            </form>
            <div>{error}</div>
                {/* <table>
                    <tr>
                    <th><label for="purpose">Purpose</label></th>
                    <td><input type="radio" name="purpose" value="rent"/> Rent
                        <input type="radio" name="purpose" value="sale"/> Sale</td>  
                    </tr>
                    <tr>
                    <th><label for="type">Type</label></th>
                    <td><input type="radio" name="type" value="house"/> House<br />
                        <input type="radio" name="type" value="flat"/> Flat<br />
                        <input type="radio" name="type" value="plot"/> Plot</td>  
                    </tr>
                    <tr>
                    <th><label for="location">Location</label></th>
                    <td><input type="text" name="location" id="location" placeholder="Location"/></td>
                    </tr>
                    <tr>
                    <th><label for="Prop_title">Property Title</label></th>
                    <td><input type="text" name="Prop_title" id="Prop_title" placeholder="Property Title"/></td>
                    </tr>
                    <tr>
                    <th><label for="description">Description</label></th>
                    <td><input type="text" name="description" id="description" placeholder="Description"/></td>
                    </tr>
                    <tr>
                    <th><label for="price">Price</label></th>
                    <td><input type="text" name="price" id="price" placeholder="Price"/></td>
                    </tr>
                    <tr>
                    <th><label for="area">Area</label></th>
                    <td><input type="text" name="area" id="area" placeholder="Area"/></td>
                    </tr>
                    <tr>
                        <th><label for="no_of_bed">No. of Bedrooms</label></th>
                        <td>
                            <select name="no_of_bed" id="no_of_bed">
                                <option value="" disabled selected hidden>Select Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th><label for="no_of_bath">No. of Bathrooms</label></th>
                        <td>
                            <select name="no_of_bath" id="no_of_bath">
                                <option value="" disabled selected hidden>Select Bathrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                    <td colspan="2"><center><input type="submit" class="submit" value="Submit" /></center></td>
                    </tr>
                </table> */}      
        </div>
    );
}
export default AddProperty;