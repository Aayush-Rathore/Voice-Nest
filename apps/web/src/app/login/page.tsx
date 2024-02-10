import LoginScreen from "@/components/screens/login/Login.screen";
import LoginForm from "@/components/screens/login/LoginForm.screen";
import Footer from "@/components/ui/footer/footer";
export default function About() {
  return (
    <>
      <div className="flex flex-col mx-auto my-0 max-w-[400px] lg:max-w-screen-lg lg:flex-row 2xl:max-w-screen-xl">
        <div className="w-full">
          <LoginScreen />
        </div>
        <div className="w-full px-10">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
