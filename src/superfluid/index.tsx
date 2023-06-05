import SuperfluidWidget, { ProductDetails } from '@superfluid-finance/widget';
import paymentDetails from './paymentDetails';
import superTokenList from '@superfluid-finance/tokenlist';
import { Button } from '@material-tailwind/react';

export default function SuperfluidSubscribe(productDetails: ProductDetails) {
  const walletManager = {
    open: async () => {
      console.log('connect');
    },
    isOpen: false,
  };
  return (
    <>
      <SuperfluidWidget
        productDetails={productDetails}
        paymentDetails={paymentDetails}
        tokenList={superTokenList}
        type="full-screen"
        walletManager={walletManager}
        stepper={{
          orientation: 'horizontal',
        }}
      >
        {({ openModal }) => (
          <Button fullWidth onClick={() => openModal()}>
            Subscribe
          </Button>
        )}
      </SuperfluidWidget>
    </>
  );
}
