import Donate from '../../components/Donate';
import PageHeader from '../components/PageHeader';

export default function DonatePage() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <PageHeader title={'Why Donate'} />
      <div className="w-full pt-24 min-h-[100vh]">
        <Donate />
      </div>
    </div>
  );
}
