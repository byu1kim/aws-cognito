import { getCurrentUser, getAccessToken } from "../cognito";

const Profile = () => {
  const handleClick = async () => {
    const a = getCurrentUser();
    const b = await getAccessToken();
    console.log(a);
    console.log(b);
  };
  return (
    <h1>
      Profile
      <button onClick={handleClick}>Click</button>
    </h1>
  );
};

export default Profile;
