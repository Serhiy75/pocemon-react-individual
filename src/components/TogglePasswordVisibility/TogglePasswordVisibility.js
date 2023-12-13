import { PasswordIconLook } from 'components/RegisterForm/RegisterForm.styled';
import PropTypes from 'prop-types';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
export const TogglePasswordIcon = ({ showPassword, onToggle, type }) => {
  return (
    <PasswordIconLook type={type}>
      {showPassword ? (
        <FaEye onClick={onToggle} />
      ) : (
        <FaEyeSlash onClick={onToggle} />
      )}
    </PasswordIconLook>
  );
};

TogglePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  type: PropTypes.string,
  // prop "type" is intended to indicate the value of the element's position
};
