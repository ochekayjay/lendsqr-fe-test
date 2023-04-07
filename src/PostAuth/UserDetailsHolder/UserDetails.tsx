import './UserDetails.scss'
import Header from '../Header/Header'
import NavBar from '../Navbar/NavBar'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import backtodashboard from './backToDashboard.svg'
import fullStar from './fullStar.svg'
import emptystar from './emptyStar.svg'
import { useUserContext } from '../../ContextApi/ContextApi'

function UserDetails() {
    const navigate = useNavigate()
    const {setUserDetail,userDetail} = useUserContext()
  return (
    <div style={{boxSizing:'border-box',display:'flex' ,width:'100vw',margin:"0px auto",height:"100vh"}}>
        <NavBar/>
        <div style={{height:'100%',boxSizing:'border-box',width:'80%'}}>
            <Header/>
            <div style={{width:'100%',boxSizing:'border-box',overflow:'auto',height:"88%",backgroundColor:'#edebeb',padding:'40px'}}>
                <p onClick={()=>navigate('/dashboard')} style={{textAlign:'left',cursor:'pointer',boxSizing:'border-box',display:'flex',alignItems:'center'}}>
                    <span style={{display:'flex',alignItems:"center",justifyContent:"center"}}><img src={backtodashboard}/></span>
                    <span style={{fontFamily:"'Work Sans', sans-serif",paddingLeft:'15px',boxSizing:'border-box',fontWeight:'bolder',}}>Back To Users</span>
                </p>
                <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",marginTop:'30px'}}>
                    <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',fontSize:'25px'}}>User Details</p>
                    <div style={{display:'flex',justifyContent:'right'}}>
                        <p style={{padding:'10px',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',width:'100px',borderRadius:'7px',marginRight:'10px',border:"1px solid #E4033B",color:'#E4033B'}}>Blacklist User</p>
                        <p style={{padding:'10px',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',width:'100px',borderRadius:'7px',marginRight:'10px',border:"1px solid #39CDCC",color:'#39CDCC'}}>Activate User</p>
                    </div>
                </div>
                <div style={{width:'100%',height:'200px',padding:'10px 10px 0px 10px',margin:'20px 0px 20px 0px',backgroundColor:"white",boxShadow:'0px 0px 3px rgba(0, 0, 0, 0.04)'}}>
                    <div style={{height:'60%',width:'70%',display:'flex',justifyContent:'space-between'}}>
                        <div style={{height:"100%",display:'flex',width:'40%',justifyContent:'space-between'}}>
                            <p style={{height:'100px',width:'100px',marginRight:'5px'}}><img style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:'50%'}} src={userDetail.profile.avatar}/></p>
                            <p style={{marginLeft:'5px',display:'flex',justifyContent:'space-around',flexDirection:'column',height:'100%'}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left'}}>{userDetail.profile.firstName} &nbsp; &nbsp; {userDetail.profile.lastName}</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',textAlign:'left'}}>{userDetail?.orgName}</span>
                            </p>
                        </div>
                        <div style={{height:'100%',width:'30%',margin:'0px 15px 0px 15px'}}>
                        <p style={{marginLeft:'5px',display:'flex',justifyContent:'space-around',flexDirection:'column',width:"100%",height:"100%"}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'center'}}>User's Tier</span>
                                <span style={{display:'flex',justifyContent:'space-around',width:'40%',margin:'0px auto'}}><img src={fullStar}/><img src={emptystar}/><img src={emptystar}/></span>
                            </p>
                        </div>
                        <div style={{height:'100%',width:'30%',}}>
                        <p style={{marginLeft:'5px',display:'flex',justifyContent:'space-around',flexDirection:'column',height:'100%',width:"100%"}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'center'}}>{userDetail.accountBalance}</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',textAlign:'center',fontSize:"11px"}}>{userDetail.accountNumber} &nbsp; &nbsp;polaris bank</span>
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div style={{width:'100%',height:'auto',backgroundColor:"white",boxShadow:'0px 0px 3px rgba(0, 0, 0, 0.04)'}}>
                    <div style={{width:'100%',minHeight:'200px',margin:'30px 0px',padding:'20px',border:'1px solid #213F7D',boxSizing:'border-box',borderWidth:'0px 0px 1px 0px'}}>
                        <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',marginBottom:'25px',textAlign:'left'}}>Personal Information</p>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>FULL NAME</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.profile.firstName} &nbsp; &nbsp; {userDetail.profile.lastName}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>PHONE NUMBER</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.phoneNumber}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>EMAIL ADDRESS</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.email}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>BVN</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.profile.bvn}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>GENDER</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.profile.gender}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>MARITAL STATUS</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>Single</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>CHILDREN</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>4</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>TYPE OF RESIDENCE</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>Mansion</span>
                            </p>
                        </div>
                    </div>
                    <div style={{width:'100%',minHeight:'200px',margin:'30px 0px',padding:'20px',border:'1px solid #213F7D',boxSizing:'border-box',borderWidth:'0px 0px 1px 0px'}}>
                        <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',marginBottom:'25px',textAlign:'left'}}>Education And Employment</p>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>LEVEL OF EDUCATION</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.education.level}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>EMPLOYMENT STATUS</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.education.employmentStatus}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>SECTOR OF EMPLOYMENT</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.education.sector}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>DURATION OF EMPLOYMENT</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.education.duration}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>OFFICE EMAIL</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.education.officeEmail}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>MONTHLY INCOME</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.education.monthlyIncome[0]}&nbsp;-&nbsp;{userDetail.education.monthlyIncome[1]}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>LOAN REPAYMENT</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.education.loanRepayment}</span>
                            </p>
                        </div>
                    </div>
                    <div style={{width:'100%',minHeight:'200px',margin:'30px 0px',padding:'20px',border:'1px solid #213F7D',boxSizing:'border-box',borderWidth:'0px 0px 1px 0px'}}>
                        <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',marginBottom:'25px',textAlign:'left'}}>Socials</p>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>TWITTER</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.socials.twitter} &nbsp; &nbsp; {userDetail.profile.lastName}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>FACEBOOK</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.socials.facebook}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>INSTAGRAM</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.socials.instagram}</span>
                            </p>
                        </div>
                    </div>
                    <div style={{width:'100%',minHeight:'200px',margin:'30px 0px',padding:'20px',border:'1px solid #213F7D',boxSizing:'border-box',borderWidth:'0px 0px 1px 0px'}}>
                        <p style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',marginBottom:'25px',textAlign:'left'}}>Guarantor</p>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>FULL NAME</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.guarantor.firstName} &nbsp; &nbsp; {userDetail.guarantor.lastName}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>PHONE NUMBER</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.guarantor.phoneNumber}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>ADDRESS</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'15px',textAlign:'left',width:'100%'}}>{userDetail.guarantor.address}</span>
                            </p>
                            <p style={{flex:1,display:"flex",flexDirection:'column',flexBasis:'350px',margin:'15px',width:'150px',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'11px',marginBottom:"15px",textAlign:'left',width:'100%'}}>RELATIONSHIP</span>
                                <span style={{fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',color:'#213F7D',fontSize:'20px',textAlign:'left',width:'100%'}}>{userDetail.guarantor.gender}</span>
                            </p>
                            
                        </div>
                    </div>
          
                </div>
                <div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default UserDetails