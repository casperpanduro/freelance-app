import Logo from "@/components/Logo";
import Header from "@/components/partials/Header";
import LoginForm from "@/components/forms/LoginForm";

const SignIn = () => {
  return (
    <>
      <Header />
      <main className={"py-12 mt-28"}>
        <div className={"max-w-2xl mx-auto px-6 space-y-12"}>
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default SignIn;
