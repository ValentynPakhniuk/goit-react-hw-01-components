import {
  TheadTransaction,
  TableTransaction,
  TbodyTransaction,
  Transaction,
} from './transaction.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <TheadTransaction>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TheadTransaction>
      <TbodyTransaction>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Transaction key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Transaction>
          );
        })}
      </TbodyTransaction>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
};
