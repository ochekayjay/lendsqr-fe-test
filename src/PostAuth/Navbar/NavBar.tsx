import './navbar.scss'
import { DropDownComp,UsersComp,HomeComp,GroupComp,BriefCaseComp,UserWithSavingComp,UserWithLoanComp,activeUsersComp,UserFriendsComp } 
from '../Dashboard/sqrIconHolder/DashboardIcons'
import { KarmaComp,LoanComp,UserComp,SavingsComp,LoanRequestComp,GuarantorsComp,WitelistComp,DecisionComp } from './CustomerFolder/CustomersIcon'
import { OrganizationComp, ReportsComp,ServicesComp,ServiceAccountComp,SettlmentsComp,TransactionComp,LoanProductsComp,FeesAndChargesComp,SavingsProductComp } from './BusinessFolder/BusinessIcon'
import { AuditLogsComp, FeesPricingComp,PreferencesComp } from './SettingsFolder/SettingsIcon'
import React,{useState,useEffect} from 'react'
import useWindowResize from '../hooks/WindowResize'
import { useUserContext } from '../../ContextApi/ContextApi'

function NavBar() {

    
    const {width, height} = useWindowResize()
    const {menuMobile,setMenuMobile,setUserData,setUserDataSlice,setUserDetail} = useUserContext()
    const coustomerIconObj = [
        {text:'Users',icon:UserComp},{text:'Guarantors',icon:GuarantorsComp},
        {text:'Loans',icon:LoanComp},{text:'Decision Models',icon:DecisionComp},
        {text:'Savings',icon:SavingsComp},{text:'Loan Request',icon:LoanRequestComp},
        {text:'Whitelist',icon:WitelistComp},{text:'Karma',icon:KarmaComp}]

    const businessIconObj = [
        {text:'Organizations',icon:OrganizationComp},{text:'Loan Products',icon:LoanProductsComp},{text:'Savings Products',icon:SavingsProductComp},
        {text:'Fess and Charges',icon:FeesAndChargesComp},{text:'Transactions',icon:TransactionComp},{text:'Services',icon:ServicesComp},
        {text:'Service Accounts',icon:ServiceAccountComp},{text:'Settlements',icon:SettlmentsComp},{text:'Reports',icon:ReportsComp}]
    
    const settingsIconObj = [
        {text:'Preferences',icon:PreferencesComp},{text:'Fees And Pricing',icon:FeesPricingComp},{text:'Audit Logs',icon:AuditLogsComp}
    ]

    const [clickedBio,setclickedBio] = useState('Users')

    const svgCon = <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.66541C0 1.11304 0.443238 0.665253 0.99 0.665253H3.96C4.50676 0.665253 4.95 1.11304 4.95 1.66541V19.6682C4.95 20.2206 5.39324 20.6684 5.94 20.6684H18.81C19.3568 20.6684 19.8 20.2206 19.8 19.6682V16.6678C19.8 16.1154 19.3568 15.6676 18.81 15.6676H12.87C11.2297 15.6676 9.9 14.3243 9.9 12.6671V3.66573C9.9 2.00861 11.2297 0.665253 12.87 0.665253H21.78C23.4203 0.665253 24.75 2.00861 24.75 3.66573V22.6687C24.75 24.3258 23.4203 25.6692 21.78 25.6692H2.97C1.32971 25.6692 0 24.3258 0 22.6687V1.66541ZM19.8 6.6662C19.8 6.11383 19.3568 5.66604 18.81 5.66604H14.85V9.66667C14.85 10.219 15.2932 10.6668 15.84 10.6668H19.8V6.6662Z" fill="url(#paint0_linear_6819_58336)"/>
    <defs>
    <linearGradient id="paint0_linear_6819_58336" x1="-1.87183e-06" y1="37.9211" x2="26.2531" y2="-5.22382" gradientUnits="userSpaceOnUse">
    <stop stop-color="#213F7D"/>
    <stop offset="1" stop-color="#39CDCC"/>
    </linearGradient>
    </defs>
    </svg>
    const closeicon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#0d47a1"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>

    useEffect(()=>{
        const userActualData = JSON.parse(window.localStorage.getItem('UserActualData') as string);
        const userActualDataSlice = JSON.parse(window.localStorage.getItem('UserActualDataSlice') as string)
        const userParticularData = JSON.parse(window.localStorage.getItem('UserActualData') as string);
            
        setUserDetail(userParticularData)
        setUserData(userActualData)
        setUserDataSlice(userActualDataSlice)
    
    },[])

  return (
    <div className={width>850?'bioSection':menuMobile?'bioMainMobile':"bioMobileOff"}>
                  <p onClick={()=>setMenuMobile(!menuMobile)} style={{padding:"10px",display:width>700?"none":'flex',justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:'absolute',top:"10px",right:'10px',borderRadius:"50%",boxShadow: '0px 0px 5px #0b1f36'}}>{closeicon}</p>
            <div style={{height:'12%',display:'flex',width:'100%',justifyContent:'left',boxSizing:'border-box',paddingLeft:'25px',alignItems:'center'}}>
                <p>{svgCon}</p>
                <p style={{color:'#213F7D',fontSize:'30px',paddingLeft:"10px",width:'auto',fontFamily:'AvenirNextBold'}}>lendsqr</p>
            </div>
            <div style={{height:'100%',marginBottom:'15px'}}>
                <div style={{height:'15%',width:'100%',display:"flex",flexDirection:'column',justifyContent:'space-around',alignItems:'left'}}>
                <p style={{display:'flex',justifyContent:'left',boxSizing:'border-box',paddingLeft:'25px',alignItems:"center"}}>
                    <BriefCaseComp/>
                    <span style={{fontSize:'16px',color:'#213F7D',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',paddingLeft:'3px',paddingRight:'3px'}}>Switch Organization</span>
                    <DropDownComp />
                </p>
                <p style={{display:'flex',justifyContent:'left',boxSizing:'border-box',paddingLeft:'25px',alignItems:"center"}}>
                    <HomeComp />
                    <span style={{fontSize:'16px',color:'#213F7D',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',paddingLeft:'3px',paddingRight:'3px'}}>Dashboard</span>
                </p>
                </div>
                <div>
                <p style={{fontSize:'16px',textAlign:'left',boxSizing:'border-box',paddingLeft:'25px',color:'#213F7D',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',marginTop:'20px',marginBottom:'5px'}}>CUSTOMERS</p>
                <div style={{marginTop:'5px',width:'100%'}}>{coustomerIconObj.map(slice=><p  onClick={()=>setclickedBio(slice.text)} style={{border:clickedBio===slice.text?'3.5px solid #39CDCC':'',borderWidth:clickedBio===slice.text?"0px 0px 0px 3.5px":'',backgroundColor:clickedBio===slice.text?'#c7eaea':'transparent',padding:'10px 0px 10px 25px',boxSizing:'border-box',marginTop:"25px",width:'100%',textAlign:'left'}}><slice.icon/><span className='sliceP'>{slice.text}</span></p>)}</div>
                </div>
                <div>
                <p style={{fontSize:'16px',textAlign:'left',boxSizing:'border-box',paddingLeft:'25px',color:'#213F7D',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',marginTop:'20px',marginBottom:'5px'}}>BUSINESSES</p>
                <div style={{marginTop:'5px',width:'100%'}}>{businessIconObj.map(slice=><p  onClick={()=>setclickedBio(slice.text)} style={{border:clickedBio===slice.text?'3.5px solid #39CDCC':'',borderWidth:clickedBio===slice.text?"0px 0px 0px 3.5px":'',backgroundColor:clickedBio===slice.text?'#c7eaea':'transparent',padding:'10px 0px 10px 25px',boxSizing:'border-box',marginTop:"25px",width:'100%',textAlign:'left'}}><slice.icon/><span className='sliceP'>{slice.text}</span></p>)}</div>
                </div>
                <div>
                <p style={{fontSize:'16px',textAlign:'left',paddingLeft:'25px',boxSizing:'border-box',color:'#213F7D',fontFamily:"'Work Sans', sans-serif",fontWeight:'bolder',marginTop:'20px',marginBottom:'5px'}}>SETTINGS</p>
                <div style={{marginTop:'5px',width:'100%'}}>{settingsIconObj.map(slice=><p  onClick={()=>setclickedBio(slice.text)} style={{border:clickedBio===slice.text?'3.5px solid #39CDCC':'',borderWidth:clickedBio===slice.text?"0px 0px 0px 3.5px":'',backgroundColor:clickedBio===slice.text?'#c7eaea':'transparent',padding:'10px 0px 10px 25px',boxSizing:'border-box',marginTop:"25px",width:'100%',textAlign:'left'}}><slice.icon/><span className='sliceP'>{slice.text}</span></p>)}</div>
                </div>
            </div>
        </div>
  )
}

export default NavBar