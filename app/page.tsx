import Hello from "./components/hello";

export default function Home() {
  console.log("Log pvk");
  return (
    <h1 className="text-3xl font-bold ">
      Welcome to next js
      <Hello />
    </h1>
  );
}
