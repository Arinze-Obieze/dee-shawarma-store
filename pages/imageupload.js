/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const Imageupload = () => {
    const [image,setImage]=useState()

function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
        console.log(reader.result);//base64encoded string
        setImage(reader.result)
    };
    reader.onerror =error=>{
        console.log("Error:",error);
    }
}

    return (
        <div>
            <div>
                Lets upload Image <br />
            <input 
            accept="image/*"
            type={'file'}
            onChange={convertToBase64}
            />
{ image== "" || image==null?"":<img width={100} alt='' height={100} src={image}/>}
            
            </div>
        </div>
    );
}

export default Imageupload;