import Donate from '../../components/Donate';
import PageHeader from '../components/PageHeader';

export default function DonatePage() {
  return (
    <div className="flex flex-col items-center justify-start">
      <PageHeader title={'Our Causes'} />
      {/* <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl'>Who do we help?</h1> */}
      <div className="w-full min-h-[100vh]">
        <Donate />
      </div>
    </div>
  );
}
