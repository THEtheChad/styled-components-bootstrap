import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
`;