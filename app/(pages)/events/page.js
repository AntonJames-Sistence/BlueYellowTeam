import HomeEvents from '../../components/HomeEvents';
import PageHeader from '../components/PageHeader';

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center justify-start">
      <PageHeader title={'Our Events'} />
      <div className=" min-h-[100vh] w-full">
        <HomeEvents />
      </div>
    </div>
  );
}
