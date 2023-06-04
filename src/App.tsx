import './App.css';
import { useActiveWallet } from '@lens-protocol/react-web';
import LoginButton from './components/LoginButton';

function App() {
  const { data: wallet, loading } = useActiveWallet();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (wallet) {
    return <p>You are logged-in with {wallet.address}</p>;
  }

  return (
    <>
      <LoginButton />
    </>
  );
}

export default App;
