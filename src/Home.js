import {connect , getwalletaddress} from "./scripts/services"
const Home = ()=>{
    return (
        <div classname="home">
            <button onClick={()=> connect()}>Connect</button>
            <button onClick={()=> getwalletaddress()}>getaddress</button>

        </div>
    )
}
export default Home