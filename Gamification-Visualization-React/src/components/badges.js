import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react';

const Badges = ({token}) => {

    const [img,setImg] = useState(null)

    const reader = new FileReader();
    reader.onloadend = () => {
        const base64data = reader.result;                
        //console.log(base64data);
    }

    useEffect(() => {
        const fetchStatus = async ()=> {
            const response = await fetch('http://localhost:8080/gamification/badges/thesis/first/img', {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa(token),
                }
            })
            const imgBlob = await response.blob()
            setImg(URL.createObjectURL(imgBlob))
            const url = reader.readAsDataURL(imgBlob);
            if(response.ok) {
                console.log(imgBlob)
            }
        }

        fetchStatus()
    }, [])
    return(
        <div className='Badges align-self-center'>
            <h3>Badges</h3>
            <img src={img} width='100px'/>         
        </div>
    )
}

export default Badges