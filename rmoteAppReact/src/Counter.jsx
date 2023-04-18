import React, {useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
return(
    <div className="bg-blue-900 text-white p-5">
        <div> Count = {count}</div>
        <button onClick={() => setCount(count => count + 1)}> Increase Count</button>
    </div>
   );

}

export default Counter;