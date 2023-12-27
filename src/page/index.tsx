import {Outlet} from "react-router-dom";


const App = () => {
    return <div style={{height: '100vh', display:'flex', flexDirection: 'column'}}>
        <h1>header</h1>
        <Outlet/>
        <h1>footer</h1>
    </div>
}

export default App