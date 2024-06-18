import Card from './components/Card';
import Cluster from './components/Cluster';
import Center from './components/Center';

function App() {
  return (
    <>
      <Center>
        <Cluster isFluid>
          <Card variant="fulltint" color="blue">
            <Card.Title>Follow leading global&nbsp;markets</Card.Title>
            <Card.Description>
              Popular markets such as the S&P 500, the MSCI World of the
              FTSE&nbsp;100
            </Card.Description>
            <Card.Image src="/markets.png" alt="" />
            <Card.Action as="link" href="#" />
          </Card>

          <Card variant="fulltint" color="magenta">
            <Card.Title>Earn 5.12% Money market&nbsp;funds</Card.Title>
            <Card.Description>
              Low-risk, flexible, easy-to-use funds, average interest
              rate&nbsp;5.12%
            </Card.Description>
            <Card.Image src="/funds.png" alt="" />
            <Card.Action as="button" onClick={() => alert('clicked')} />
          </Card>

          <Card variant="stripe-accent" color="blue">
            <Card.Title>Portfolios built for&nbsp;you</Card.Title>
            <Card.Description>
              Fill in our simple questionaire, and our investment managers will
              build and manage a low-cost portfolio that suits&nbsp;you
            </Card.Description>
            <Card.Image src="/portfolios.png" alt="" />
          </Card>
        </Cluster>
      </Center>
    </>
  );
}

export default App;
