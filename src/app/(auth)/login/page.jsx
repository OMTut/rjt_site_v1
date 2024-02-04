import { handleGithubLogin } from "@/lib/actions/login";

const LoginPage = async () => {
    
    return (
      <div>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
      </div>
    );
  }
  
  export default LoginPage;