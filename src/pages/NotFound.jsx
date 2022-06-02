import Container from '../components/common/Container';
import Flex from '../components/common/Flex';

const NotFound = () => {
  return (
    <Container className="h-screen justify-center items-center">
      <Flex column className="justify-center items-center">
        <h1 className="font-xxl">404</h1>
        <p>Page not found</p>
      </Flex>
    </Container>
  );
};

export default NotFound;
