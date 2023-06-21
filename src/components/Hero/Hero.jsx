import React from 'react'
import './Hero.css'
import{HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColCenter hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:0,opacity:1}}
                    transition={{duration:2,tupe:"spring"
                    }}
                    >Discover<br/> Most Suitable <br/>Property</motion.h1>
                </div>
                <div className="flexColStart hero-desc">
                    <span className="secondaryText">In variety of properties that suit you very easily</span>
                    <span className="secondaryText">Forget all the difficulties in finding a residence for you</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text"/>
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1100} end={1150} duration={5}></CountUp>
                        <span>+</span>
                        </span>
                        <span className="secondaryText">Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span><CountUp start={100} end={120} duration={3}></CountUp><span>+</span></span>
                        <span className="secondaryText">Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span><CountUp  end={20} ></CountUp><span>+</span></span>
                        <span className="secondaryText">Award Winnings</span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"7rem",opacity:0}} animate={{x:0,opacity:1}} 
                transition={{duration:2,type:"spring"}}
                className="img-container">
                    <img src="./hero-image.png" alt="Hero Image"/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero