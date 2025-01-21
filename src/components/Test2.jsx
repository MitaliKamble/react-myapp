import { useState } from "react";

function Test2(){

    // function dispaly(){
    //     alert("welcome to event concept in ReactJs")
    // }

    let [counter, updateName] = useState("mitali")
    return(
        <div>
            

            <h2>Name of the student is: {counter}</h2>
            <button onClick={()=>updateName("mitali kamble")}>State</button>&nbsp;&nbsp;
            <button onClick={()=>updateName("mitali")}>State</button>
         

        </div>
    )
}

export default Test2;