import HomeEvents from '../../components/HomeEvents';
import PageHeader from '../components/PageHeader';

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center justify-start p-5">
      <PageHeader title={'Our Events'} />
      <div className="pt-24 min-h-[100vh]">
        <HomeEvents />
      </div>
    </div>
  );
}
