import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <SignIn routing="path" path="/sign-in" afterSignInUrl="/auth-callback" />
    </div>
  );
};

export default SignInPage;
