import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MacBook Pro</td>
            <td className="deposit">R$12.000,00</td>
            <td>Tecnologia</td>
            <td>03/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.300,00</td>
            <td>Casa</td>
            <td>21/02/2022</td>
          </tr>
          <tr>
            <td>Mcdonalds</td>
            <td className="withdraw">- R$60,00</td>
            <td>Restaurante</td>
            <td>01/03/2022</td>
          </tr>
          <tr>
            <td>Pix - Enrico Hernandez</td>
            <td className="deposit">R$10.000,00</td>
            <td>Pix</td>
            <td>02/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}