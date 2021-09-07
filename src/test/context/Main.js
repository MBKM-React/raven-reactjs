import { VehicleProvider } from "./VehicleContext"
import Page from "./page"
export const Main =()=>{
    return(
        <VehicleProvider>
            <Page/>
        </VehicleProvider>

    )
}