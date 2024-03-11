import { useEffect, useRef, useState } from "react"
import Term from '../components/Term';

// let rederCount = 0
export default function About() {
    // const [count, setCount] = useState(0)
    // const [clicked, setClicked] = useState('N')
    
    // rederCount++
    // console.log('Render count:', rederCount)

    // // useEffect(FUNCTION, DEPENDECIES)

    // useEffect(() => {
    //     console.log('Inside useEffect')
    // }, [clicked])

    // const handlerClick = () => {
    //     setCount(count+1)
    //     setClicked('Y')
    // }

    // return (
    //     <>
    //         <div style={{marginBottom: '20px'}}>
    //             <p>Count: {count}</p>
    //         </div>  
    //         <button onClick={handlerClick}>Click Me</button>
    //     </>
    // )

    const ref = useRef({});

    const Word = ({ w, s }) => {
        return <Term ref={ref} word={w} symbol={s} />;
    };

    return (
        <div className="main">
            <h1>Capgemini partners with companies to transform and manage their business by unlocking the value of technology.</h1>
            <div>
                As a leading strategic partner to companies around the world, we have leveraged <Word w="technology" s="$" /> to enable business transformation for more than 50 years.
                We address the entire breadth of business needs, from strategy and design to managing operations.
                To do this, we draw on deep industry expertise and a command of the fast-evolving fields of cloud, data <Word w="artificial intelligence" />, connectivity, software, digital engineering, and platforms.
            </div>
        </div>
    );
}