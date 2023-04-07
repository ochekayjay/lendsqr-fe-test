import './header.scss'
import { useState } from 'react'
import searchicon from './search.svg'
import bell from './bell.svg'
import React from 'react'
import useWindowResize from '../hooks/WindowResize'
import { useUserContext } from '../../ContextApi/ContextApi'

function Header() {
  const {width,height} = useWindowResize()
  const {menuMobile, setMenuMobile} = useUserContext()
  const menuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#0d47a1"><path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/></svg>
  return (
    <div style={{width:'100%',boxSizing:'border-box',display:'flex',justifyContent:'space-around',alignItems:'center',height:"12%"}}>
                <p onClick={()=>setMenuMobile(!menuMobile)} style={{height:"50px",width:"50px",display:width>850?"none":'flex',justifyContent:"center",alignItems:"center",boxSizing:"border-box",marginTop:"5px",marginLeft:'5px',borderRadius:"50%",boxShadow: '0px 0px 5px #0b1f36'}}>{menuIcon}</p>   
                <div style={{width:width>850?'35%':'250px',margin:width>850?'':'0px 15px 0px 30px',height:'45px',border:'2px solid #c7eaea',borderRadius:'10px',position:'relative',display:'flex',alignItems:'center'}}>
                    <input type='text' placeholder='Search for anything' style={{paddingLeft:'15px',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',outline:'none',borderWidth:'0px 0px 0px',width:'85%',height:"90%"}}/>
                    <p style={{height:'100%',width:'15%',borderRadius:'0px 10px 10px 0px',backgroundColor:'#39CDCC',display:'flex',alignItems:'center',justifyContent:'center'}}><span><img src={searchicon}/></span></p>
                </div>
                <p><img src={bell}/></p>
             
            </div>
  )
}

export default Header