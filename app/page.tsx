import { redirect } from "next/navigation";
export default function Home() {
  redirect('/intro');
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
