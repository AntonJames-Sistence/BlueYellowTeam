import Facebook from '../../components/Facebook';
import PageHeader from '../components/PageHeader';

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center justify-start">
      <PageHeader title={'Our Media'} />
      <div className="pt-24 min-h-[100vh]">
        <Facebook />
      </div>
    </div>
  );
}
