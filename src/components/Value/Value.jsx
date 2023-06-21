import React, { useState } from 'react'
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="Value image" />
                </div>
            </div>
            <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give It To You</span>
                    <span className='secondaryText'>We always provide best possible services for you<br/>We beleive good place to live can make your life better</span>
                    <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item,i) => {
                              
                                return(
                                    <AccordionItem className="accordionItem" key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                             
                                                <div className="innerWidth flexCenter icon">
                                                    {item.icon}
                                                    <span className="primaryText">
                                                        {item.heading}
                                                    </span>
                                                    <div className="flexCenter icon">
                                                        <MdOutlineArrowDropDown size={20}/>
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="detailsText secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
        </div>
    </section>
  )
}

export default Value