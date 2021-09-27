import { Container } from "./styles";
import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg"
import Total from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";
 


export function Summary(){
    const {transactions} = useTransactions();
    const sumary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdrawals += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
       
    },{
        deposits: 0,
        withdrawals: 0,
        total: 0
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Income} alt="Entradas"/>
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Outcome} alt="Saídas"/>
                </header>
                <strong>{
                     new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(- sumary.withdrawals)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total"/>
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.total)}</strong>
            </div>
        </Container>
    )
}