import styled from 'styled-components';

export const Container = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  position: ${({ open }) => (open ? 'absolute' : 'static')};
  right: 10px;
`;

export const Line = styled.div`
  height: 2px;
  width: 20px;
  background-color: white;
  transition: all 0.2s ease;
`;

export const LineTop = styled(Line)`
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
  transform-origin: top left;
  margin-bottom: 5px;
`;
export const LIneMidle = styled(Line)`
  transform: ${({ open }) => (open ? 'translateX(-16px)' : 'none')};
  opacity: ${({ open }) => (open ? 0 : 1)};
`;

export const LineBottom = styled(Line)`
  transform: ${({ open }) =>
    open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
  transform-origin: top left;
  margin-top: 5px;
`;
