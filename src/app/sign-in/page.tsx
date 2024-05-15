import Logo from "@/components/ui/Logo";
import Header from "@/components/partials/Header";
import LoginForm from "@/components/forms/LoginForm";

const SignIn = () => {
  return (
    <>
      <Header />
      <main className={"py-12 mt-28"}>
        <div className={"max-w-2xl mx-auto px-6 space-y-12"}>
          <div className={"flex justify-center"}>
            <Logo className={"w-20 h-20"} />
          </div>
          <h1 className={"text-6xl font-bold text-center"}>Sign in</h1>
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default SignIn;
