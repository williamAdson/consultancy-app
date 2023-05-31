'use client'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

function CreateReservation(){
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [details, setDetails] = useState('');

    const create = () =>{
        Axios.post('http://localhost:5000/users/signup', {
            name,
            time,
            day,
            details
        }).then((response)=>{
            console.log(response);
        });
        setName('');
        setTime('');
        setDay('');
        setDetails('');
    }

    return (
        <>
            <Header/>
            <main>
                <form onSubmit={create}>
                    <h3>make appointment</h3>
                    <div>
                        <input type="text" placeholder='name'
                        value={name} onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <textarea placeholder='details' value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
                    </div>
                    <button type="submit">confirm appointment</button>
                </form>
            </main>
            <Footer/>
        </>
    )
}

export default CreateReservation;