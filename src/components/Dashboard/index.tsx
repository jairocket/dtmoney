import { Summary } from "../Summary";
import { TransationsTable } from "../TransationTable";
import { Container } from "./styles";


export function Dashboard(){
    return (
        <Container>
            <Summary />
            <TransationsTable />
        </Container>
    )
}