import decision from './decisionMaking.svg'
import guarantors from './gaurantors.svg'
import karma from './karma.svg'
import loanRequest from './loanRequest.svg'
import loan from './loans.svg'
import user from './userCustomer.svg'
import whitelist from './whiteList.svg'
import savings from './savings.svg'

export function DecisionComp(){
    return <span><img src={decision}/></span>
}

export function GuarantorsComp(){
    return <span><img src={guarantors}/></span>
}

export function KarmaComp(){
    return <span><img src={karma}/></span>
}

export function LoanRequestComp(){
    return <span><img src={loanRequest}/></span>
}

export function LoanComp(){
    return <span><img src={loan}/></span>
}

export function UserComp(){
    return <span><img src={user}/></span>
}

export function WitelistComp(){
    return <span><img src={whitelist}/></span>
}

export function SavingsComp(){
    return <span><img src={savings}/></span>
}
