import PageHeader from "./components/PageHeader";

export default function Layout({ children }) {
  return (
    <div className="py-10 max-[550px]:px-0 px-5 w-full h-full flex flex-col items-center justify-start">
      {/* <PageHeader /> */}
      {children}
    </div>
  );
}
