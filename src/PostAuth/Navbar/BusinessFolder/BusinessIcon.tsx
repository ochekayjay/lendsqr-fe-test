

import feesAndCharges from './feesAndCharges.svg'
import reports  from './reports.svg'
import savingsProduct from './savingsProduct.svg'
import serviceAccount from './serviceAccount.svg'
import transaction from './Transaction.svg'
import services from './services.svg'
import settlments from './settlements.svg'
import loanProducts from '../CustomerFolder/loanRequest.svg'
import organization from './briefcase 1.svg'


export function FeesAndChargesComp(){
    return <span><img src={feesAndCharges}/></span>
}

export function LoanProductsComp(){
    return <span><img src={loanProducts}/></span>
}

export function OrganizationComp(){
    return <span><img src={organization}/></span>
}

export function ReportsComp(){
    return <span><img src={reports}/></span>
}

export function SavingsProductComp(){
    return <span><img src={savingsProduct}/></span>
}

export function ServiceAccountComp(){
    return <span><img src={serviceAccount}/></span>
}

export function TransactionComp(){
    return <span><img src={transaction}/></span>
}

export function ServicesComp(){
    return <span><img src={services}/></span>
}

export function SettlmentsComp(){
    return <span><img src={settlments}/></span>
}

