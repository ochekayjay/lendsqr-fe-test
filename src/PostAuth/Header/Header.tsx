import './header.scss'
import { useState } from 'react'
import searchicon from './search.svg'
import bell from './bell.svg'
import React from 'react'

function Header() {
  return (
    <div style={{width:'100%',boxSizing:'border-box',display:'flex',justifyContent:'space-around',alignItems:'center',height:"12%"}}>
                <div style={{width:'35%',height:'45px',border:'2px solid #c7eaea',borderRadius:'10px',position:'relative',display:'flex',alignItems:'center'}}>
                    <input type='text' placeholder='Search for anything' style={{paddingLeft:'15px',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',outline:'none',borderWidth:'0px 0px 0px',width:'85%',height:"90%"}}/>
                    <p style={{height:'100%',width:'15%',borderRadius:'0px 10px 10px 0px',backgroundColor:'#39CDCC',display:'flex',alignItems:'center',justifyContent:'center'}}><span><img src={searchicon}/></span></p>
                </div>
                <div style={{width:'30%',height:'45px'}}>

                </div>
            </div>
  )
}

export default Header