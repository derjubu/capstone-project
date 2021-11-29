import styled from 'styled-components';

const InputLabel = styled('label')<{ inputGridColumn: `${number}/${number}` }>`
  color: var(--color-secondary);
  grid-column: ${(props) => props.inputGridColumn || 1 / -1};
`;

export default InputLabel;
