import {useEffect, useRef} from 'react'
import "./About.scss"
import  { FaGithub }  from 'react-icons/fa';
import {init} from "ityped"; 

export default function About() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ["Ciência da Computação"],
        })  
        return () => {
        }
    }, [])

    return (
        <div className="about" id="about">
            <div className="card">
                <h1>Marcus Miguel</h1>
                <p > 
                Graduando em  {" "}<span ref={textRef} ></span>
                </p>
                <a>📧 marcusmiguel0612@gmail.com</a>
                <a>📱&nbsp;(81)983568673</a>
                    <a className="social-link" href="https://github.com/MarcusMiguel" target="_blank"><FaGithub  size={40}/></a>
            </div>
        </div>
    )
}