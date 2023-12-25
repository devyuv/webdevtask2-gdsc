import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/18944183/pexels-photo-18944183/free-photo-of-schloss-in-bnw.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum assumenda ullam architecto dignissimos, minus earum possimus sapiente, praesentium qui eveniet recusandae. Quod omnis quo eum eos ullam temporibus ex mollitia."
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/6358922/pexels-photo-6358922.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum assumenda ullam architecto dignissimos, minus earum possimus sapiente, praesentium qui eveniet recusandae. Quod omnis quo eum eos ullam temporibus ex mollitia."
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/3536278/pexels-photo-3536278.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum assumenda ullam architecto dignissimos, minus earum possimus sapiente, praesentium qui eveniet recusandae. Quod omnis quo eum eos ullam temporibus ex mollitia."
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/3064257/pexels-photo-3064257.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum assumenda ullam architecto dignissimos, minus earum possimus sapiente, praesentium qui eveniet recusandae. Quod omnis quo eum eos ullam temporibus ex mollitia."
    },
];

const Single = ({item}) =>{

    const ref = useRef();

    const {scrollYProgress} = useScroll({ 
        target: ref, 
        //offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>

                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {

    const ref = useRef();
    
    const {scrollYProgress} = useScroll({ 
        target: ref, 
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">
                </motion.div>
            </div>
            {item.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>;
    );
}; 

export default Portfolio;

