import React, {useRef,useState} from 'react'
import SignImage from './logo&Image/signImage.png'
import {useNavigate} from 'react-router-dom'
import { useUserContext } from '../ContextApi/ContextApi'
import useWindowResize from '../PostAuth/hooks/WindowResize'


function SignIn() {
    const {showLoadingPage, setShowLoadingPage,setUserData,setUserDataSlice} = useUserContext()
    const navigate = useNavigate()
    const [showColor, setShowColor] = useState(true)
    const passwordRef = useRef<HTMLInputElement>(null)
    const svgCon = <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.66541C0 1.11304 0.443238 0.665253 0.99 0.665253H3.96C4.50676 0.665253 4.95 1.11304 4.95 1.66541V19.6682C4.95 20.2206 5.39324 20.6684 5.94 20.6684H18.81C19.3568 20.6684 19.8 20.2206 19.8 19.6682V16.6678C19.8 16.1154 19.3568 15.6676 18.81 15.6676H12.87C11.2297 15.6676 9.9 14.3243 9.9 12.6671V3.66573C9.9 2.00861 11.2297 0.665253 12.87 0.665253H21.78C23.4203 0.665253 24.75 2.00861 24.75 3.66573V22.6687C24.75 24.3258 23.4203 25.6692 21.78 25.6692H2.97C1.32971 25.6692 0 24.3258 0 22.6687V1.66541ZM19.8 6.6662C19.8 6.11383 19.3568 5.66604 18.81 5.66604H14.85V9.66667C14.85 10.219 15.2932 10.6668 15.84 10.6668H19.8V6.6662Z" fill="url(#paint0_linear_6819_58336)"/>
    <defs>
    <linearGradient id="paint0_linear_6819_58336" x1="-1.87183e-06" y1="37.9211" x2="26.2531" y2="-5.22382" gradientUnits="userSpaceOnUse">
    <stop stop-color="#213F7D"/>
    <stop offset="1" stop-color="#39CDCC"/>
    </linearGradient>
    </defs>
    </svg>

    const {width,height} = useWindowResize()
    const togglePwd= (reff: HTMLInputElement | null)=>{
      if(reff?.type==='text'){
        reff.type = 'password'
      }

      else if(reff?.type === 'password'){
        reff.type = 'text'
      }
      setShowColor(!showColor)
    }
    
  
    const getUsers = async()=>{
      setShowLoadingPage(true)
      const userdata = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      const actualData = await userdata.json()
      window.localStorage.setItem('UserActualData',JSON.stringify(actualData))
      window.localStorage.setItem('UserActualDataSlice',JSON.stringify(actualData.slice(0,10)))
      setUserDataSlice(actualData.slice(0,10))
      setUserData(actualData)
      setShowLoadingPage(false)
      navigate('/dashboard')

    }



  
  return (
    <div style={{height:'100vh',width:'95vw',margin:'0px auto',padding:'0px',boxSizing:'border-box'}}>
        {showLoadingPage&& <div style={{position:'fixed',height:'100%',width:"100%",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:'white',zIndex:"1000000"}}><p>{svgCon}</p></div>}
        <div style={{width:'90%',position:'absolute',left:'50%',paddingLeft:'2.5%',top:'0px',display:'flex',alignItems:'center',justifyContent:'left',margin:'40px auto',transform:'translateX(-50%)',boxSizing:'border-box'}}>
                <p>{svgCon}</p>
                <p style={{color:'#213F7D',fontSize:'30px',paddingLeft:"10px",width:'auto',fontFamily:'AvenirNextBold'}}>lendsqr</p>
        </div>

        <div style={{display:"flex",justifyContent:'space-around',alignItems:'center',position:'absolute',top:'50%',left:"50%",height:'65%',width:'90%',transform:'translate(-50%,-50%)'}}>
            <div style={{width:'45%',display:width>850?"block":"none",height:'90%'}}>
                <img style={{height:'100%',width:"100%"}} src={SignImage}/>
            </div>
            <div style={{width:width>850?'45%':'85%',margin:width>850?"":"0px auto",height:'90%',position:'relative',fontFamily:"Avenir Next"}}>
                <div style={{position:'absolute',display:'flex',flexDirection:'column',alignItems:'left',justifyContent:"space-between",top:width>850?"50%":'65%',left:'50%',height:'90%',width:'85%',transform:'translate(-50%,-50%)'}}>
                    <div style={{height:width>850?'35%':'auto', width:'100%',marginBottom:width>850?'':'30px'}}>
                      <p style={{fontSize:width>850?"40px":'25px',fontWeight:"700",color:"#213F7D",textAlign:'center',fontFamily:'AvenirNextBold'}}>Welcome!</p>
                      <p style={{textAlign:'center',color:'#545F7D',fontSize:"20px",fontWeight:"400",marginTop:'10px',fontFamily:'AvenirNextRegular'}}>Enter Details to login</p>
                    </div>
                    <div style={{height:width>850?"60%":'auto',width:'100%',display:"flex",flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                      <p style={{height:width>850?'20%':'45px',width:width>850?'70%':'auto',marginBottom:width>850?'':'10px'}}><input placeholder='Email' style={{paddingLeft:'15px',letterSpacing:'1.7px',width:width>850?'100%':'250px',fontFamily:'AvenNextRegular',height:'100%',borderRadius:'5px',border:'2px solid #545F7D'}}type='email'/></p>
                      <p style={{height:width>850?'20%':'45px',width:width>850?'70%':'auto',marginBottom:width>850?'':'10px',position:'relative'}}>
                          <input placeholder='Password' ref={passwordRef} style={{paddingLeft:'15px',letterSpacing:'1.7px',fontFamily:'AvenNextRegular',width:width>850?'100%':'250px',height:'100%',borderRadius:'5px',border:'2px solid #545F7D'}}type='password'/>
                          <p style={{width:'10%',height:'100%',position:'absolute',top:'0px',right:width>850?'0px':'15px',display:'flex',alignItems:"center",justifyContent:'center'}}><span style={{fontFamily:'AvenNextBold',color: showColor?'#39CDCC':'#545F7D',letterSpacing:'1.5px',cursor:'pointer'}} onClick={()=> togglePwd(passwordRef.current)}>SHOW</span></p>
                      </p>
                      <p style={{height:width>850?'15%':'25px',color:'#39CDCC',width:'70%',fontFamily:'AvenirNextRegular',textAlign:'left'}}>FORGOT PASSWORD</p>
                      <button onClick={()=> {getUsers()}} style={{height:width>850?'25%':'45px',fontSize:'15px',color:"white",width:width>850?'70%':'250px',backgroundColor:'#39CDCC',borderRadius:'8px'}}>LOG IN</button>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>

  )
}

export default SignIn