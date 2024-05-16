import { getServerSession } from "next-auth/next";
import { authOptions } from "@/config";
import LoginForm from "@/app/components/LoginForm";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </main>
  );
};

export default SignIn;
