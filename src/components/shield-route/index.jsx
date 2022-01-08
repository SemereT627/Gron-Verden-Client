import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShieldRoute = ({ children, ...rest }) => {
  const { token } = useSelector((state) => state.auth);
  if (!token) {
    return <Redirect to={{ pathname: '/login' }} />;
  }
  return <Route {...rest}>{children}</Route>;
};

export default ShieldRoute;
