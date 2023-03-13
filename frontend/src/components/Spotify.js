const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://localhost:3000/";
const clientId = " 5a6369619e834e6fba2caaeca458f030";

const scopes = ["streaming", "user-read-email", "user-read-private"];

const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

export function LoginButton() {
  return (
    <div>
      <a href={loginUrl}>Login to spotify</a>
    </div>
  );
}

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"
