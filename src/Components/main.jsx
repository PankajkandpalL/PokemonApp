import { AllRoutes } from "../AllRoutes/AllRoutes"
import { Navbar } from "../Navbar/Navbar"

function Main(){
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <AllRoutes />
            </div>
        </div>
    )
}

export {Main}