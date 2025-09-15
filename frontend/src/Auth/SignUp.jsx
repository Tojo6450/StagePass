import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <SignUp routing="path" path="/sign-up" afterSignUpUrl="/onboarding" />
    </div>
  );
};

export default SignUpPage;
