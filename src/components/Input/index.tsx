import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import theme from '../../styles/theme';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isPassword?: boolean;
};

const Input = ({ isPassword = false, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <input
        ref={inputRef}
        {...rest}
        type={showPassword ? 'text' : rest.type}
      />
      {isPassword &&
        (showPassword ? (
          <FaEyeSlash
            size={16}
            color={theme.colors.gray300}
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ) : (
          <FaEye
            size={16}
            color={theme.colors.gray300}
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ))}
    </Container>
  );
};

export default Input;
