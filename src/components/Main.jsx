import React, {useState} from "react";

function Main(){
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1)
    return(
        <main>
            <h2>Main</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex veritatis incidunt adipisci alias? In quibusdam optio vel, iste ipsa nam cumque suscipit sapiente. Qui fugit placeat eos, delectus laborum accusantium?</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Click Here</button>
        </main>
    )
}


export default Main;