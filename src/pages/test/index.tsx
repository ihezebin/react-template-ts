import React, {useEffect} from 'react';
import useStore from "../../store";
import api from '../../api'
import {useLocation, useParams} from "react-router-dom";
import {Button} from "antd";


const Test = () => {

    const {user, setUser, clearUser} = useStore()

    useEffect(() => {
        setUser({
            username: 'test_username',
            id: "123"
        })

        return () => {
            clearUser()
        }
    }, [setUser, clearUser])


    return (
        <div>
            <div>hello {user?.username}</div>
            <div>
                change user info: <Button onClick={() => setUser({username: "new_username"})}>click</Button>
            </div>
            <div>
                api request: <Button onClick={() => {
                api.get('http://localhost:8080/hello').then(res => {
                    console.log('resp', res)
                }).catch(err => {
                    console.log('err', err)
                })
            }}>click</Button>
            </div>
            <div>
                使用环境变量：{process.env.REACT_APP_DOMAIN}
            </div>
        </div>
    );
}

const TestSub = () => {
    const {id} = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const name = searchParams.get('name');
    const paramsObject: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
        paramsObject[key] = value;
    }

    console.log('search', paramsObject)

    return <div>
        <p>i am a test sub component, get id from path: {id}</p>
        <p>search param: {JSON.stringify(paramsObject)}</p>
    </div>
}

export {Test, TestSub};
