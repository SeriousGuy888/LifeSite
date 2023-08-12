import{ useState } from "react";

export default function UserInput(){
    const [name, setName] = useState('');
    

    return(
        <>
            <input
                value = {name}
                onChange={e => setName(e.target.value)}
            />
            <p>
                You are {name || "(health state)"}
            </p>
        </>
        

    )

}
