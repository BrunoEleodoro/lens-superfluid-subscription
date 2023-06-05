import {
  useActiveProfileSwitch,
  useActiveProfile,
  useProfilesOwnedByMe,
} from '@lens-protocol/react-web';

export default function ProfileSwitcher() {
  const { data: activeProfile } = useActiveProfile();
  const { execute: switchActiveProfile, isPending } = useActiveProfileSwitch();
  const { data: profiles, error, loading } = useProfilesOwnedByMe();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Active profile: {activeProfile?.handle}</p>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <button
              disabled={isPending || activeProfile?.id === profile.id}
              //   button class for profile switcher
              className="w-[fit-content] bg-[#F2F2F2] border-[1px] border-[#E5E5E5] rounded-[4px] px-[10px] py-[5px] text-[#000000] font-bold text-[12px]"
              onClick={() => {
                switchActiveProfile(profile.id);
              }}
            >
              {profile.handle}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
