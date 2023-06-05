import {
  useActiveProfile,
  useActiveWallet,
  useProfile,
  useProfileFollowers,
  useProfileFollowing,
  useProfilesToFollow,
} from '@lens-protocol/react-web';
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import SuperfluidSubscribe from '../../superfluid';
import { ProfileCard } from '../Cards/ProfileCard';

function ListFollowingProfiles() {
  const { data: wallet, loading: walletLoading } = useActiveWallet();
  //   const { data: myProfile, loading: myProfileLoading } = useActiveProfile();
  //   console.log('myProfile', myProfile);
  //   if (myProfile?.handle === undefined) return <></>;
  if (wallet?.address === undefined) return <></>;

  const {
    data: following,

    hasMore,
    next,
  } = useProfileFollowing({
    walletAddress: wallet?.address,
    limit: 10,
  });

  const { data: profiles, loading } = useProfilesToFollow();
  console.log('profiles', profiles);
  if (loading) return <p>Loading Profiles...</p>;
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-2">
        {following?.map((profileFollow) => {
          const profile = profileFollow.profile;

          return <ProfileCard profile={profile} />;
        })}
      </div>
      {/* <List>
        {following?.map((profileFollow) => {
          const profile = profileFollow.profile;
          const image =
            profile.picture?.__typename === 'MediaSet'
              ? profile.picture?.original.url.replace(
                  'ipfs://',
                  'https://ipfs.io/ipfs/'
                )
              : 'https://ipfs.io/' +
                profile.picture?.uri.replace('ipfs://', '');

          return (
            <ListItem>
              <ListItemPrefix className="w-[40px] h-[40px]">
                <Avatar
                  alt={profile.handle}
                  src={image}
                  className="w-[40px] h-[40px]"
                />
              </ListItemPrefix>
              <div className="w-full">
                <Typography variant="h6" color="blue-gray">
                  {profile.handle}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {profile.bio}
                </Typography>
                <SuperfluidSubscribe
                  name={profile.handle}
                  description={`Subscribe for the best content of`}
                  imageURI={image}
                  successURL=""
                />
              </div>
            </ListItem>
          );
        })}
      </List> */}
      {hasMore && <button onClick={next}>Load More</button>}
    </>
  );
}

export default ListFollowingProfiles;
