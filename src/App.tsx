import './App.css';
import { useActiveWallet } from '@lens-protocol/react-web';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import ListFollowingProfiles from './components/List/ListFollowingProfiles';
import ProfileSwitcher from './components/Profile/ProfileSwitcher';
import NavbarComponent from './components/Navbar/Navbar';

function App() {
  const { data: wallet, loading } = useActiveWallet();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (wallet) {
    return (
      <>
        {/* Header bg color,  */}
        <NavbarComponent />
        <br />
        {/* <ProfileSwitcher /> */}
        <ListFollowingProfiles />
        <LogoutButton />
      </>
    );
  }

  return (
    <>
      <LoginButton />
    </>
  );
}

export default App;
