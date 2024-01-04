import FooterForm from "../app/components/FooterForm";
import { SocialIcon } from "react-social-icons";
import { socialLinks } from "../data/social";

export default function Footer() {
  return (
    <footer className="w-full mt-10 bg-darkTeal text-white min-h-[300px] flex flex-col items-center justify-between pt-5 pb-10">
      <div className="lg:pt-5 flex flex-col items-center justify-evenly">
        <h1 className="text-2xl lg:text-3xl text-white font-bold lg:p-5">
          FOLLOW US ON SOCIAL MEDIA
        </h1>
        <div className="flex">
          {socialLinks.map((social, index) => {
            return (
              <div className="p-2" key={index}>
                <SocialIcon target="_blank" url={social} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <div className="w-full md:w-1/2 flex items-center mb-4 sm:mb-0">
            <div>
              <div className="font-semibold tracking-wider mb-2">
                <svg
                  width="195"
                  height="95"
                  viewBox="0 0 195 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M76.7663 40.3272C73.529 35.043 68.6031 31.0665 62.9915 29.0145C44.6336 -17.0032 6.07663 -6.03667 15.0524 46.0537C18.5351 66.2662 24.7172 77.0255 34.7851 88.934C44.4743 100.392 63.3636 94.6425 60.6593 79.8675C76.2853 75.4829 86.0168 55.4254 76.7663 40.3272Z"
                    fill="#00A7ED"
                  />
                  <path
                    d="M130.702 21.6295C128.003 11.4498 113.232 9.09094 108.197 18.6308C106.76 21.6703 106.728 21.8532 104.653 23.7663C100.323 27.7037 93.6828 26.4141 88.8837 22.2776C70.6591 -3.58802 49.8863 39.4408 78.2746 56.493C79.2936 60.512 79.7405 64.5326 79.6056 68.9646C79.2367 81.0755 97.0452 86.518 102.55 75.3C104.753 70.8093 106.377 66.2189 107.394 61.4735C124.434 58.176 137.185 38.716 130.702 21.6295Z"
                    fill="#FEDB25"
                  />
                  <path
                    d="M76.7664 40.3271C73.8249 35.5246 69.4792 31.8206 64.5013 29.6414C63.4369 38.7013 66.9228 49.6727 78.2746 56.4929C78.6598 58.0111 78.936 59.5358 79.1571 61.0751C81.2145 54.348 80.7773 46.8715 76.7664 40.3271Z"
                    fill="#00B951"
                  />
                  <path
                    d="M3.5754 48.0892H-0.0194548V47.5408H5.87989C6.97362 47.5408 8.02835 47.5016 9.12208 47.4624C10.2158 47.4624 11.3112 47.4232 12.3659 47.4232C16.4678 47.4232 21.8211 48.9152 21.8211 53.9382C21.8211 58.4518 16.4288 59.983 13.9277 60.3356V60.4923C17.9516 60.8058 23.2659 62.337 23.2659 67.91C23.2659 73.994 16.3102 75.6036 12.4033 75.6036C11.3096 75.6036 10.2158 75.5644 9.15946 75.5252C8.06573 75.5252 6.97037 75.4861 5.87663 75.4861H-0.0227051V74.9359H3.5754V48.0892ZM9.24072 60.2164H10.8431C15.5317 60.2164 15.9218 57.4299 15.9218 54.565C15.9218 49.973 14.867 47.9717 10.9601 47.9717C10.3735 47.9717 9.8274 48.0501 9.24072 48.0892V60.2164ZM9.24072 74.9343C9.94442 75.0127 10.7651 75.0518 11.5078 75.0518C14.8297 75.0518 16.9001 73.8357 16.9001 67.4774C16.9001 65.7503 16.6661 60.7666 11.5078 60.7666H9.24072V74.9343Z"
                    fill="white"
                  />
                  <path
                    d="M26.3926 47.1865H33.7773V74.9343H36.3955V75.4844H26.3926V74.9343H29.0107V47.735H26.3926V47.1865Z"
                    fill="white"
                  />
                  <path
                    d="M37.9573 58.6461H45.342V71.0884C45.342 73.0505 46.0067 74.6601 47.9992 74.6601C50.4223 74.6601 52.0231 72.187 52.0231 69.3221V59.1962H49.4439V58.6461H56.7897V74.9343H59.3688V75.4845H52.1011V72.3045H52.0231C51.1633 74.5801 48.5452 75.8371 46.2017 75.8371C42.5679 75.8371 40.5754 74.345 40.5754 70.5383V59.1962H37.9573V58.6461Z"
                    fill="white"
                  />
                  <path
                    d="M67.0251 65.6328V67.3991C67.0251 71.1275 67.3371 75.4844 71.9867 75.4844C76.1293 75.4844 77.6521 71.8343 77.7691 70.9316L78.3167 71.1275C77.8081 73.0505 75.9326 76.0329 71.4017 76.0329C65.9704 76.0329 61.7515 72.6179 61.7515 67.0057C61.7515 62.492 65.7754 58.0959 70.8556 58.0959C74.4505 58.0959 78.5524 60.2932 78.5524 65.6312H67.0251V65.6328ZM73.2771 65.0827V62.4529C73.2771 61.3542 73.2771 58.6461 70.737 58.6461C67.2201 58.6461 67.1421 62.4137 67.0251 65.0827H73.2771Z"
                    fill="white"
                  />
                  <path
                    d="M78.2566 47.5392H90.8776V48.0877H87.7914L95.7628 61.7853L102.953 48.0877H99.5543V47.5392H107.017V48.0877H103.617L96.0765 62.4921V74.9327H99.7104V75.4829H86.8163V74.9327H90.4112V63.9825L81.346 48.0877H78.2598V47.5392H78.2566Z"
                    fill="white"
                  />
                  <path
                    d="M108.732 65.6328V67.3991C108.732 71.1275 109.044 75.4844 113.693 75.4844C117.836 75.4844 119.359 71.8343 119.476 70.9316L120.023 71.1275C119.515 73.0505 117.639 76.0329 113.108 76.0329C107.677 76.0329 103.456 72.6179 103.456 67.0057C103.456 62.492 107.48 58.0959 112.56 58.0959C116.155 58.0959 120.259 60.2932 120.259 65.6312H108.732V65.6328ZM114.984 65.0827V62.4529C114.984 61.3542 114.984 58.6461 112.443 58.6461C108.927 58.6461 108.849 62.4137 108.732 65.0827H114.984Z"
                    fill="white"
                  />
                  <path
                    d="M122.641 47.1865H130.026V74.9343H132.644V75.4844H122.641V74.9343H125.259V47.735H122.641V47.1865Z"
                    fill="white"
                  />
                  <path
                    d="M134.557 47.1865H141.942V74.9343H144.56V75.4844H134.557V74.9343H137.175V47.735H134.557V47.1865Z"
                    fill="white"
                  />
                  <path
                    d="M165.463 67.0448C165.463 71.9111 161.32 76.0329 155.928 76.0329C150.536 76.0329 146.395 71.9127 146.395 67.0448C146.395 62.2178 150.537 58.0959 155.928 58.0959C161.32 58.0976 165.463 62.2178 165.463 67.0448ZM160.188 67.0448C160.188 62.8446 159.993 58.6461 155.928 58.6461C151.865 58.6461 151.668 62.8446 151.668 67.0448C151.668 71.2842 151.863 75.4828 155.928 75.4828C159.993 75.4844 160.188 71.2842 160.188 67.0448Z"
                    fill="white"
                  />
                  <path
                    d="M168.118 59.1962H165.775V58.6461H175.739V59.1962H173.199L177.223 69.4005L180.31 61.0409L179.529 59.1962H177.536V58.6461H187.305V59.1962H184.687L188.711 69.4005L192.462 59.1962H189.727V58.6461H195.002V59.1962H193.087L186.679 76.5831H186.406L180.624 61.8652L175.193 76.5831H174.92L168.118 59.1962Z"
                    fill="white"
                  />
                  <path
                    d="M65.1772 87.8532H63.6106V87.1072H65.1772V84.8512C65.1772 83.098 66.0825 82.2051 67.5516 82.2051C67.8425 82.2051 68.1659 82.2377 68.4081 82.3193L68.2634 83.0507C68.0863 83.0017 67.8116 82.9691 67.537 82.9691C66.3571 82.9691 66.0662 83.8783 66.0662 84.9492V87.1072H67.9091V87.8532H66.0662V94.6702H65.1772V87.8532Z"
                    fill="white"
                  />
                  <path
                    d="M69.0061 90.8879C69.0061 88.583 70.6378 86.9114 72.965 86.9114C75.3085 86.9114 76.9401 88.583 76.9401 90.8879C76.9401 93.1766 75.3085 94.8808 72.965 94.8808C70.6378 94.8808 69.0061 93.1766 69.0061 90.8879ZM76.0349 90.8879C76.0349 89.0858 74.8551 87.6737 72.965 87.6737C71.0912 87.6737 69.9113 89.0858 69.9113 90.8879C69.9113 92.6901 71.0912 94.0858 72.965 94.0858C74.8551 94.0858 76.0349 92.6901 76.0349 90.8879Z"
                    fill="white"
                  />
                  <path
                    d="M79.3113 91.7319V87.1056H80.2002V91.3907C80.2002 92.8844 80.652 94.1332 82.3325 94.1332C83.6245 94.1332 84.8206 93.0623 84.8206 90.9516V87.104H85.6933V92.9301C85.6933 93.3529 85.7258 94.1805 85.7745 94.667H84.9181C84.8856 94.2605 84.8531 93.5635 84.8531 93.1733H84.8206C84.4013 94.1952 83.2702 94.8776 82.1391 94.8776C80.1677 94.8808 79.3113 93.5178 79.3113 91.7319Z"
                    fill="white"
                  />
                  <path
                    d="M88.7454 88.8425C88.7454 88.4197 88.7292 87.6084 88.6804 87.1056H89.5206C89.5531 87.5284 89.5856 88.2091 89.5856 88.6156H89.6181C90.0553 87.5774 91.1848 86.9114 92.3175 86.9114C94.2889 86.9114 95.1291 88.2744 95.1291 90.0603V94.6702H94.2564V90.3852C94.2564 88.8915 93.7883 87.659 92.1241 87.659C90.8159 87.659 89.636 88.7136 89.636 90.8243V94.6702H88.7471V88.8425H88.7454Z"
                    fill="white"
                  />
                  <path
                    d="M97.5 90.8879C97.5 88.6482 99.0504 86.9113 101.345 86.9113C102.525 86.9113 103.705 87.512 104.35 88.6482H104.383V82.3993H105.272V94.6702H104.383V93.1765H104.35C103.703 94.28 102.523 94.8807 101.345 94.8807C99.052 94.8807 97.5 93.1438 97.5 90.8879ZM104.482 90.8879C104.482 89.0693 103.206 87.641 101.428 87.641C99.538 87.641 98.4231 89.1183 98.4231 90.8879C98.4231 92.6737 99.538 94.1184 101.428 94.1184C103.204 94.1184 104.482 92.7064 104.482 90.8879Z"
                    fill="white"
                  />
                  <path
                    d="M107.742 92.6248C107.742 90.4505 110.069 90.093 112.315 90.093H113.074V89.7518C113.074 88.3234 112.299 87.6411 110.942 87.6411C110.069 87.6411 109.245 87.9986 108.696 88.534L108.212 87.9496C108.842 87.3325 109.876 86.9114 111.023 86.9114C112.687 86.9114 113.916 87.8043 113.916 89.6538V92.9644C113.916 93.5488 113.965 94.2458 114.046 94.6686H113.254C113.189 94.2785 113.124 93.6794 113.124 93.2729H113.092C112.478 94.3764 111.542 94.8792 110.329 94.8792C109.164 94.8808 107.742 94.2474 107.742 92.6248ZM113.074 91.4071V90.79H112.509C110.763 90.79 108.647 91.0006 108.647 92.5759C108.647 93.761 109.648 94.1495 110.537 94.1495C112.283 94.1511 113.074 92.7864 113.074 91.4071Z"
                    fill="white"
                  />
                  <path
                    d="M116.885 92.8517V87.8533H115.302V87.1073H116.869V84.9492H117.758V87.1073H119.906V87.8533H117.758V92.6412C117.758 93.7283 118.242 94.0369 118.954 94.0369C119.261 94.0369 119.601 93.9553 119.875 93.8263L119.924 94.5886C119.568 94.7192 119.182 94.7992 118.728 94.7992C117.807 94.7992 116.885 94.3291 116.885 92.8517Z"
                    fill="white"
                  />
                  <path
                    d="M121.522 84.1035C121.522 83.7134 121.845 83.4375 122.169 83.4375C122.508 83.4375 122.832 83.7134 122.832 84.1035C122.832 84.4937 122.508 84.7695 122.169 84.7695C121.845 84.7695 121.522 84.4937 121.522 84.1035ZM121.731 87.1072H122.62V94.6701H121.731V87.1072Z"
                    fill="white"
                  />
                  <path
                    d="M125.092 90.8879C125.092 88.583 126.724 86.9114 129.051 86.9114C131.394 86.9114 133.026 88.583 133.026 90.8879C133.026 93.1766 131.394 94.8808 129.051 94.8808C126.724 94.8808 125.092 93.1766 125.092 90.8879ZM132.119 90.8879C132.119 89.0858 130.939 87.6737 129.049 87.6737C127.176 87.6737 125.996 89.0858 125.996 90.8879C125.996 92.6901 127.176 94.0858 129.049 94.0858C130.941 94.0858 132.119 92.6901 132.119 90.8879Z"
                    fill="white"
                  />
                  <path
                    d="M135.495 88.8425C135.495 88.4197 135.478 87.6084 135.43 87.1056H136.27C136.302 87.5284 136.335 88.2091 136.335 88.6156H136.367C136.803 87.5774 137.934 86.9114 139.067 86.9114C141.038 86.9114 141.878 88.2744 141.878 90.0603V94.6702H141.006V90.3852C141.006 88.8915 140.538 87.659 138.872 87.659C137.564 87.659 136.384 88.7136 136.384 90.8243V94.6702H135.495V88.8425Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-md">
                &copy; Blue and Yellow is a 501(c)3 registered non-profit organization. <br/> Please reach out to ola@blueyellowfoundation.org to receive your donation receipt for tax deduction purposes.
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
