
import styled from 'styled-components';

const StyledButton = styled.button`

padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#333')};
  background-color: ${({ variant }) => (variant === 'primary' ? '#007bff' : '#f0f0f0')};

  &:hover {
    background-color: ${({ variant }) => (variant === 'primary' ? '#0056b3' : '#ccc')};
    cursor: pointer;
  }
`;

const Button = ({children , onclick, variant}) =>{

    return (
        <StyledButton variant={variant} onclick={onclick}>
            {children}
        </StyledButton>
    );
}

export default Button;