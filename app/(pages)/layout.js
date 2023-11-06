import PageHeader from './components/PageHeader';

export default function Layout({ children }) {
  return (
    <div className="pt-24 pl-5 pr-5 w-full h-full flex flex-col items-center justify-start">
      <PageHeader />
      {children}
    </div>
  );
}
