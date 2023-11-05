import Donate from '../../components/Donate';
import PageHeader from '../components/PageHeader';

export default function DonatePage() {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* <PageHeader title={'Who do we help'} /> */}
      <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'>Who do we help?</h1>
      {/* <div className="w-full pt-24 min-h-[100vh]"> */}
        <Donate />
      {/* </div> */}
    </div>
  );
}
