import styled from "styled-components";
import Container from "../../atoms/Container";
import PageContainer from "../../atoms/PageContainer";
import Footer from "../../organisms/Footer";

export const TitleContainer = styled.div`
  margin: 6rem 0;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledFooter = styled(Footer)`
  margin-top: 6rem;
`;