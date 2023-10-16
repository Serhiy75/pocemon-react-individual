import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selector';
import { Box, Button } from './UserMenu.styled';
import { GiExitDoor } from 'react-icons/gi';
import { logout } from 'redux/auth/operation';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Box>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logout())}>
        Log Out <GiExitDoor size={36} />
      </Button>
    </Box>
  );
};
