import { useWalletLogout } from '@lens-protocol/react-web';
import { Button } from '@material-tailwind/react';

function LogoutButton() {
  const { execute: logout, isPending } = useWalletLogout();

  return (
    <Button disabled={isPending} onClick={logout} color="red">
      Log out
    </Button>
  );
}
export default LogoutButton;
