import Card from "./componets/cards";
import { systemOptions } from "utils/systemOptions";
import e from './style.module.css';
import Table from "./componets/table";

export default function Dashboard () {

    return ( 
    <div className={`container p-0 ${e.dashCtn}`}>
    <div className="row p-1 mt-3">
        {
            Object.keys(systemOptions).map(val =>{
            if(val === "Dashboard"){
                return null
            } 
            if(val === "SolCompras"){
                return null
            } 
            else{
            return <Card key={"card_" + val}
                url={systemOptions[val]["img"]}
                action={systemOptions[val]["action"]}
                desc={systemOptions[val]["action"]}
                pathUrl={systemOptions[val]["url"]}
                className={e.icon}
            /> 
            }})
        }
    </div>

    <Table/>
    
    </div>
     );
}

