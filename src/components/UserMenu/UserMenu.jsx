import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selector';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  return <p>Welcome, {user.name}</p>;
};
