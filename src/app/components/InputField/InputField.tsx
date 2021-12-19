import styled from 'styled-components';

const InputField = styled('input')`
  display: block;
  border: 3px solid var(--color-background-primary);
  border-radius: 5px;
  margin-top: 8px;
  min-height: 48px;
  width: calc(100% - 24px);
  font-size: 1rem;
  font-weight: bold;
  padding: 0 8px;
  background-color: var(--color-background-secondary);
`;

export default InputField;
