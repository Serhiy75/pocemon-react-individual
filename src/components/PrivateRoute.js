import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isRefreshing, selectIsLogin } from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  const isRefresh = useSelector(isRefreshing);
  const ShouldRedirect = !isLogin && !isRefresh;

  return ShouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
