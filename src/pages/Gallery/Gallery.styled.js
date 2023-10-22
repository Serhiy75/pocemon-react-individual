import styled from 'styled-components';

export const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  margin-top: 10px;
`;
export const SearchHeader = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 380px;
  border-radius: 50px;
  background-color: #cee8e5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const StyledSection = styled.section`
  padding: 20px 0;
  margin: 0;
  background-color: #64864a;
`;
