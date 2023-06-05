import { useWalletLogin } from '@lens-protocol/react-web';
import { Button } from '@material-tailwind/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

function LoginButton() {
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();

  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });

  const onLoginClick = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner();
      await login(signer);
    }
  };

  return (
    <div className="flex justify-center flex-row w-full">
      {loginError && <p>{loginError.message}</p>}
      <Button disabled={isLoginPending} onClick={onLoginClick}>
        Connect
      </Button>
    </div>
  );
}

export default LoginButton;
