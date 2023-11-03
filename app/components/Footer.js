// "use client"
import FooterForm from './FooterForm';

export default function Footer() {
  return (
    <footer className="w-full bg-darkTeal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <div className="w-1/2 flex items-center mb-4 sm:mb-0">
            <img
              src="/blue-yellow-logo.png"
              alt="Blue and Yellow Logo"
              className="h-20 w-20 object-contain mr-4"
            />
            <div>
              <div className="font-semibold tracking-wider mb-2">
                Blue and Yellow
              </div>
              <p className="text-xs">
                &copy; Blue and Yellow is a 501(c)3 registered non-profit
                organization. Please reach out to ola@blueyellowfoundation.org
                to receive your donation receipt for tax deduction purposes.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <FooterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
