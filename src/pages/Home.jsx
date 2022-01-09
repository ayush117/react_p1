import {React, useEffect ,useState} from 'react'
import Second from '../components/Second'
import axios from 'axios'

const Home = () => {
    const [count, setCount] = useState('');
    
    useEffect(() => {
        axios.get(`https://mysterious-ridge-76787.herokuapp.com/todos`)
            .then(response => {
                setCount(response.data);
            })
    });

    return (
        <>
            <Second count={[count]}/>
        </>
    )
}

export default Home
