import React, {useEffect} from 'react';
import useStore from "../../store";
import api from '../../api'


const Test = ()=> {

    const {user, setUser, clearUser} = useStore()

    useEffect(() => {

        api.get('http://localhost:8080/hello').then(res => {
            console.log('resp', res)
        }).catch(err => {
            console.log('err', err)
        })

        setUser({
            username: 'test'
        })

        return () => {
            clearUser()
        }
    }, [setUser, clearUser])


    return (
        <div className="App">
            hello {user?.username}
        </div>
    );
}

export default Test;
