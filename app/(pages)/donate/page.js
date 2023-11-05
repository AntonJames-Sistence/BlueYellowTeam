import Donate from '../../components/Donate';
import PageHeader from '../components/PageHeader';

export default function DonatePage() {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* <PageHeader title={'Who do we help'} /> */}
      <h1 className='text-5xl'>Who do we help?</h1>
      {/* <div className="w-full pt-24 min-h-[100vh]"> */}
        <Donate />
      {/* </div> */}
    </div>
  );
}
