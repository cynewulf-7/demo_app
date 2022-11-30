import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: #000;
  color: royalblue;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Next 2022 All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;