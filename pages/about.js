import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 70%;
  padding-left: 2rem;
  margin-top: 0;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        {/*<Heading>ABOUT</Heading>*/}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repudiandae laudantium corporis ab cum aperiam, iusto possimus pariatur eius fuga labore temporibus accusantium quia a quibusdam aspernatur reprehenderit ratione modi.</p>
      </Hero>
    </>
  );
}