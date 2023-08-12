import PropTypes, { string } from "prop-types";
import styled from "./TransactionHistory.module.css";
const TransactionHistory = ({ transactions }) => {
    return <section className={styled.TransactionHistorySection}>
        <table className={styled.transactionHistory}>
  <thead className={styled.head}>
    <tr>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map(({id, type, amount, currency}) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr> 
    ))}
  </tbody>
</table>

    </section>
};
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.objectOf(string))
}
export default TransactionHistory;