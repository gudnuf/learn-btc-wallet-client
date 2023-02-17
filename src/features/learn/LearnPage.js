import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { InfoCircle } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';

import { changeLearnModal } from './learnSlice';

const LearnPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    dispatch(changeLearnModal({modalShow: true, topic: 'intro'}));
    navigate('/wallet');
  }

  const handleTopicClick = (topic) => {
    dispatch(changeLearnModal({modalShow: true, topic}))
  }
  
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6} style={{textAlign: 'center'}}>
          <h2>Welcome to the wallet thats <strong>helps you understand</strong></h2>
          <p>This wallet is designed for learning purposes and nothing else.</p>
          <p>A Bitcoin Node in <span>regtest</span> mode is running alongside this app.</p>
          <p><em>Regtest</em> means that the bitcoin used in this app are not real.</p>
          <p>This wallet acts as a simulation so that you can begin to feel comfortable with spending bitcoin.</p>
          <br />
          <h4>A few notes on using this wallet</h4>
          <p>- Designed for learning</p>
          <p>- Do not use keys or addresses generated by this app outside of the app</p>
          <p>- Look for <InfoCircle color='#0d6efd'/> to learn more aboout terms</p>
          <h3><Button onClick={handleGetStarted}>Get Started</Button> or explore the topics below</h3>
          <ul style={{textAlign: 'left'}}>
            <li onClick={() => handleTopicClick('address')}><span className='learn-topic'>Addresses</span></li>
            <li onClick={() => handleTopicClick('compressed')}><span className='learn-topic'>Compressed vs Uncompressed</span></li>
            <li onClick={() => handleTopicClick('key')}><span className='learn-topic'>Key Pairs</span></li>
            <li onClick={() => handleTopicClick('privateKey')}><span className='learn-topic'>Private Keys</span></li>
            <li onClick={() => handleTopicClick('publicKey')}><span className='learn-topic'>Public Keys</span></li>
            <li onClick={() => handleTopicClick('regtest')}><span className='learn-topic'>Regtest</span></li>
            <li onClick={() => handleTopicClick('transaction')}><span className='learn-topic'>Transactions</span></li>
            <li onClick={() => handleTopicClick('wallet')}><span className='learn-topic'>Wallet</span></li>
            <li onClick={() => handleTopicClick('wif')}><span className='learn-topic'>Wallet Import Format (WIF)</span></li>
          </ul>
          <h4>**Do not use anything from this app to interact with the real bitcoin network. It may result in loss of funds**</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default LearnPage;