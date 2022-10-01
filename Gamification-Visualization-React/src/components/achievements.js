import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from 'react';

const Achievement = ({token}) => {
    const [achiev,setAchiev] = useState(null)
    const [desc,setDesc] = useState(null)

    useEffect(() => {
        const fetchStatus = async ()=> {
            const response = await fetch('http://localhost:8080/gamification/visualization/achievements/thesis/silyu', {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa(token),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const json = await response.json()
            if(response.ok) {
                console.log(json)
                const name = (json[0].name)
                const des = (json[0].description)
                setAchiev(name)
                setDesc(des)
            }
        }

        fetchStatus()
    }, [])
    return(
        <div className='Achievement container'>
            <div className='row'>
                <div>
                <p className='col-xs'>Current Achievement: {achiev}</p>
                <p className='col-xs'>Description: {desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Achievement