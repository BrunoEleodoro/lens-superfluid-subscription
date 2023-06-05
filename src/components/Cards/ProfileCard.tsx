import { Profile } from '@lens-protocol/react-web';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from '@material-tailwind/react';
import * as React from 'react';
import SuperfluidSubscribe from '../../superfluid';

type ProfileCardProps = {
  profile: Profile;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const image =
    profile.picture?.__typename === 'MediaSet'
      ? profile.picture?.original.url.replace(
          'ipfs://',
          'https://ipfs.io/ipfs/'
        )
      : 'https://ipfs.io/' + profile.picture?.uri.replace('ipfs://', '');
  return (
    <Card className="mt-6 w-full">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody className="h-[200px]">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {profile.handle}
        </Typography>
        <Typography>{profile.bio?.substring(0, 130)}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <SuperfluidSubscribe
          name={profile.handle}
          description={`Subscribe for the best content of`}
          imageURI={image}
          successURL=""
        />
      </CardFooter>
    </Card>
  );
};
