import Container from '../components/common/Container';

const NotFound = () => {
  return (
    <Container className="flex-full">
      <div className="flex flex-column justify-center items-center">
        <h1 className="font-xxl">404</h1>
        <p>Page not found</p>
      </div>
    </Container>
  );
};

export default NotFound;
