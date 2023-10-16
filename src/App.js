import "./styles.css";
import SideNav from "./components/Layout/SideNav";
import Card from "./components/UI/Card";
import PersonalInfo from "./components/Forms/PersonalInfo";
import SelectPlan from "./components/Forms/SelectPlan";
import Button from "./components/UI/Button";

export default function App() {
  return (
    <Card className="app rounded-3xl h-screen flex">
      <SideNav />
      <form className="pt-8 pb-4 px-16 h-full flex flex-col items-end justify-between">
        {/* <PersonalInfo /> */}
        <SelectPlan />
        <Button type="button" className="bg-marine-blue text-white">
          Next Step
        </Button>
      </form>
    </Card>
  );
}
