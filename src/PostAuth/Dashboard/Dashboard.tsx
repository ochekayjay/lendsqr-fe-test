import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Dashboard.scss'
import Bell from './sqrIconHolder/bell.svg'
import searchicon from './sqrIconHolder/search.svg'
import mainUser from './sqrIconHolder/UserMain.svg'
import ActiveUser from './sqrIconHolder/ActiveUsers.svg'
import userwithloans from './sqrIconHolder/UsersWithLoans.svg'
import userWithSavings from './sqrIconHolder/UsersWithSavings.svg'
import filter from './sqrIconHolder/filterbutton.svg'
import options from './sqrIconHolder/options.svg'
import { useUserContext } from '../../ContextApi/ContextApi'
import dropdownicon from './sqrIconHolder/dropPaging.svg'
import buttonRight from './sqrIconHolder/nextButton.svg'
import buttonLeft from './sqrIconHolder/previousButton.svg'
import NavBar from '../Navbar/NavBar'
import Header from '../Header/Header'
import blacklistUser from './sqrIconHolder/blacklistUser.svg'
import activateUser from './sqrIconHolder/activateUser.svg'
import viewUser from './sqrIconHolder/viewDetails.svg'
import useWindowResize from '../hooks/WindowResize'

function Dashboard() {
    const navigate = useNavigate()

    interface idValue{
        id: string
    }

    const getUserDetails = async(id:String)=>{
        
        const userPersonal = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
    
        const actualUserData = await userPersonal.json()
    
        setUserDetail(actualUserData)
       
        navigate('/userdetails')
  
      }


    const nextPage = ()=>{
        if(currentPage<10 && pages.includes(currentPage+1 || 2)){
            
            const start = (currentPage+1)*10 -10
            setCurrentPage(()=>currentPage+1)
            setUserDataSlice(userData.slice(start,start+10)) 
            setpages([1,2,'....',9,10])      
        }

        else if(currentPage===10){
            
            
            setCurrentPage(1)
            setUserDataSlice(userData.slice(0,10))   
            setpages([1,2,'....',9,10])
             
        }

        else if(currentPage<10 && !pages.includes(currentPage+1)){
            
            const start = (currentPage+1)*10 -10
            const current = currentPage + 1
            setCurrentPage(()=>currentPage+1)
            setUserDataSlice(userData.slice(start,start+10)) 
            setpages([1,2,'....',current,'....',9,10])  
            
        }
       
      
    }

    const previousPage = ()=>{
        if(currentPage>1 && pages.includes(currentPage-1 || 9)){
            const start = (currentPage+1)*10 -10
            setCurrentPage(()=>currentPage+1)
            setUserDataSlice(userData.slice(start,start+10)) 
            setpages([1,2,'....',9,10])      
        }

        else if(currentPage===1){
            
            
            setCurrentPage(10)
            setUserDataSlice(userData.slice(90,100))   
            setpages([1,2,'....',9,10])
             
        }

        else if(currentPage>1 && !pages.includes(currentPage-1)){
            
            const start = (currentPage-1)*10 -10
            const current = currentPage - 1
            setCurrentPage(()=>currentPage-1)
            setUserDataSlice(userData.slice(start,start+10)) 
            setpages([1,2,'....',current,'....',9,10])  
            
        }

        currentPage>1?setCurrentPage(()=>currentPage-1):setCurrentPage(10)
        const start = currentPage*10 -10
        setUserDataSlice(userData.slice(start,start+10))
        if(!pages.includes(currentPage)){
            setpages([1,2,'....',currentPage,'....',9,10])
        }
    }

    
    const [pages,setpages] = useState([1,2,'....',9,10])
    const {userData,setUserData,userDataSlice,setUserDataSlice,setUserDetail,userDetail} = useUserContext()
    const [currentPage,setCurrentPage] = useState(1)
    const [lineNumber,setLineNumber] = useState(999999)
  
    
    const {width, height} = useWindowResize()


    useEffect(()=>{
        
        const userActualData = JSON.parse(window.localStorage.getItem('UserActualData') as string);
        const userActualDataSlice = JSON.parse(window.localStorage.getItem('UserActualDataSlice') as string)
     
        setUserData(userActualData)
        setUserDataSlice(userActualDataSlice)

    },[])
    
    
    
  return (
    <div style={{boxSizing:'border-box',display:'flex' ,width:'100vw',margin:"0px auto",height:"100vh"}}>
        <NavBar/>
        <div style={{height:'100%',boxSizing:'border-box',width:width>850?'80%':'95%',margin:width>850?'':'0px auto'}}>
            <Header/>
            <div style={{width:'100%',boxSizing:'border-box',overflow:'auto',height:"88%",backgroundColor:'#edebeb',padding:'40px'}}>
                <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontStyle:'Medium',color:'#082561',fontSize:'24px',width:'100%',textAlign:"left"}}>Users</p>
                <div style={{width:'100%',height:'auto',alignItems:"center",display:'flex',flexDirection:width>850?"row":"column",justifyContent:'space-between',margin:'40px 0px'}}>
                    <div className='generalUserOpt'>
                        <p style={{display:'flex',height:'45px',width:'45px',alignItems:'center',justifyContent:'center',borderRadius:"50%"}}><img src={mainUser}/></p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontSize:'14px',color:'#213F7D'}}>USERS</p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontSize:'25px',color:'#213F7D',fontWeight:'bold'}}>2453</p>
                    </div>
                    <div className='generalUserOpt'>
                        <p style={{display:'flex',height:'45px',width:'45px',alignItems:'center',justifyContent:'center',borderRadius:"50%"}}><img src={ActiveUser}/></p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontSize:'14px',color:'#213F7D'}}>ACTIVE USERS</p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontSize:'25px',color:'#213F7D',fontWeight:'bold'}}>2453</p>
                    </div>
                    <div className='generalUserOpt'>
                        <p style={{display:'flex',height:'45px',width:'45px',alignItems:'center',justifyContent:'center',borderRadius:"50%"}}><img src={userwithloans}/></p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontSize:'14px',color:'#213F7D'}}>USERS WITH LOANS</p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontSize:'25px',color:'#213F7D',fontWeight:'bold'}}>12453</p>
                    </div>
                    <div className='generalUserOpt'>
                        <p style={{display:'flex',height:'45px',width:'45px',alignItems:'center',justifyContent:'center',borderRadius:"50%"}}><img src={userWithSavings}/></p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontSize:'14px',color:'#213F7D'}}>USERS WITH SAVINGS</p>
                        <p style={{textAlign:'left',fontFamily:"'Work Sans', sans-serif",fontSize:'25px',color:'#213F7D',fontWeight:'bold'}}>102453</p>
                    </div>
                </div>
                <div style={{width:'100%',height:'auto',boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.04)',borderRadius:"15px",backgroundColor:'white',padding:'15px 5px'}}>
                        <div style={{width:'100%',display:"flex",fontWeight:'bolder',justifyContent:width>850?'space-between':'space-around',marginBottom:'15px',fontSize:"11px",color:'#545F7D',fontFamily:"'Work Sans', sans-serif"}}>
                            <p style={{display:width>850?'flex':'none',justifyContent:'space-around',fontWeight:'bolder',width:'14%',fontFamily:"'Work Sans', sans-serif"}}><span>ORGANIZATION</span><span><img src={filter}/></span></p>
                            <p style={{display:'flex',justifyContent:'space-around',fontWeight:'bolder',width:width>850?'13%':"35%",fontFamily:"'Work Sans', sans-serif"}}><span>USERNAME</span><span><img src={filter}/></span></p>
                            <p style={{display:width>850?'flex':'none',justifyContent:'space-around',fontWeight:'bolder',width:'20%',fontFamily:"'Work Sans', sans-serif"}}><span>EMAIL</span><span><img src={filter}/></span></p>
                            <p style={{display:width>850?'flex':'none',justifyContent:'space-around',fontWeight:'bolder',width:'15%',fontFamily:"'Work Sans', sans-serif"}}><span>PHONE NUMBER</span><span><img src={filter}/></span></p>
                            <p style={{display:width>850?'flex':'none',justifyContent:'space-around',fontWeight:'bolder',width:'20%',fontFamily:"'Work Sans', sans-serif"}}><span>DATE JOINED</span><span><img src={filter}/></span></p>
                            <p style={{display:'flex',justifyContent:'space-around',fontWeight:'bolder',width:width>850?'13%':"35%",fontFamily:"'Work Sans', sans-serif"}}><span>STATUS</span><span><img src={filter}/></span></p>
                            <p style={{width:width>850?'5%':'15%'}}></p>
                        </div>
                        <div>{ userDataSlice.map( data => <div style={{display:'flex',border:'1px solid #edebeb',borderWidth:'0px 0px 1px 0px',color:'#545F7D',fontFamily:"'Work Sans', sans-serif",fontSize:'11px',margin:'10px 0px',height:'35px',justifyContent:'space-around',alignItems:'center'}}>
                            <p style={{textAlign:'left',paddingLeft:'10px',width:'14%',fontStyle:'regular',fontFamily:"'Work Sans', sans-serif",lineHeight:'16.4px',fontWeight:'bolder',display:width>850?"block":"none"}}>{data.orgName}</p>
                            <p style={{textAlign:'left',paddingLeft:'10px',width:width>850?'13%':'35%',fontStyle:'regular',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',lineHeight:'16.4px',display:width>850?"block":""}}>{data.userName}</p>
                            <p style={{textAlign:'left',paddingLeft:'10px',width:'20%',fontWeight:'bolder',fontFamily:"'Work Sans', sans-serif",fontStyle:'regular',lineHeight:'16.4px',display:width>850?"block":"none"}}>{data.email}</p>
                            <p style={{textAlign:'left',paddingLeft:'10px',fontWeight:'bolder',width:'15%',fontFamily:"'Work Sans', sans-serif",fontStyle:'regular',lineHeight:'16.4px',display:width>850?"block":"none"}}>{data.phoneNumber}</p>
                            <p style={{textAlign:'left',paddingLeft:'10px',fontWeight:'bolder',width:'20%',fontFamily:"'Work Sans', sans-serif",fontStyle:'regular',lineHeight:'16.4px',display:width>850?"block":"none"}}>{data.createdAt}</p>
                            <p style={{textAlign:'left',display:"flex",justifyContent:'center',alignItems:'center',width:width>850?"15%":'35%'}}>
                                <span style={{color:'#545F7D',backgroundColor:'#d0d2d8',borderRadius:'5px',width:'auto',padding:'7px',boxSizing:'border-box'}}>inactive</span>
                            </p>
                            <div style={{textAlign:'left',width:width>850?'5%':'15%',position:'relative'}}>
                                <p onClick={()=>setLineNumber(data['id'])} style={{width:'15px'}}><img src={options}/></p>
                                <div style={{position:'absolute',display:lineNumber===data['id']?'flex':'none',height:'150px',top:'-10px',left:'-100px',width:'150px',zIndex:"1000",backgroundColor:'white',flexDirection:'column',boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.04)',justifyContent:"space-around"}}>
                                    <p onClick={()=>getUserDetails(data['id'])} style={{display:'flex',justifyContent:'space-around',alignItems:'center',cursor:'pointer'}}><span style={{display:'flex',justifyContent:'centr',alignItems:"center"}}><img src={viewUser}/></span><span style={{paddingLeft:'7px'}}>View Details</span></p>
                                    <p style={{display:'flex',justifyContent:'space-around',alignItems:'center',cursor:'pointer'}}><span style={{display:'flex',justifyContent:'centr',alignItems:"center"}}><img src={blacklistUser}/></span><span style={{paddingLeft:'7px'}}>Blacklist User</span></p>
                                    <p style={{display:'flex',justifyContent:'space-around',alignItems:'center',cursor:'pointer'}}><span style={{display:'flex',justifyContent:'centr',alignItems:"center"}}><img src={activateUser}/></span><span style={{paddingLeft:'7px'}}>Activate User</span></p>
                                </div>
                            </div>
                             </div>)}
                        </div>
                </div>
                <div style={{width:'100%',display:"flex",justifyContent:'space-between',marginTop:'35px',alignItems:"center"}}>
                    <div style={{width:'20%',display:width>850?'flex':'none',justifyContent:"space-between",alignItems:'center',}}>
                        <p style={{fontFamily:"'Work Sans', sans-serif",fontSize:'11px',fontWeight:'bolder'}}>Showing 100</p>
                        <p style={{padding:'15px',boxSizing:"border-box",backgroundColor:'rgba(142, 145, 152, 0.1)',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'5px'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px'}}>100</span>
                            <span style={{fontFamily:"'Work Sans', sans-serif",boxSizing:'border-box',fontWeight:'bolder',marginLeft:'5px'}}><img src={dropdownicon}/></span>
                        </p>
                        <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontSize:'11px'}}>Out of 100</p></div>
                    <div style={{width:width>850?'20%':'80%',margin:width>850?'':'0px auto',display:'flex',justifyContent:"space-between",alignItems:'center'}}>
                        <p style={{display:'flex',justifyContent:"center",alignItems:"center"}} onClick={()=>previousPage()}><img src={buttonLeft}/></p>
                        <div style={{display:'flex',justifyContent:'space-around',width:'75%'}}>
                            {pages.map(numb=>
                            <p style={{color:'#213F7D',padding:'8px',fontSize:'11px',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',border:currentPage==numb?'1px solid #031740':""}}>{numb}</p>)}</div>
                        <p style={{display:'flex',justifyContent:"center",alignItems:"center"}} onClick={()=>nextPage()}><img src={buttonRight}/></p>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Dashboard