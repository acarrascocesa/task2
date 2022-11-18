import axios from "axios"
import { useEffect, useState } from "react"
import './Dogs.css'

const Dogs = () => {

    const [dogs, setDogs] = useState()

    useEffect(() => {
        const URL = 'https://api.thedogapi.com/v1/breeds'
        axios.get(URL)
        .then(res => setDogs(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(dogs);
  return (
    <div className="dog__container">
        {
            dogs?.map(dog => (
                <div className="dog__card" key={dog.id}>
                    <figure>
                    <img src={dog.image['url']} alt="" />
                    <h2 className="dog__name">{dog.name}</h2>
                    </figure>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Dogs
