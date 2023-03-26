import { Profile } from './Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { Container } from './container.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
