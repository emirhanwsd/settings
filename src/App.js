import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  Cog6ToothIcon,
  ReceiptPercentIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const App = () => (
  <div className="pb-16">
    <nav className="px-16 h-16 shadow-sm flex items-center">
      <ArrowLeftIcon className="h-4 w-4" />

      <BuildingStorefrontIcon className="h-6 w-6 ml-14" />

      <span className="font-medium ml-8">Store Settings</span>

      <div className="w-px h-4 bg-gray-300 ml-2" />

      <span className="text-sm text-gray-600 ml-2">
        View and update your store details.
      </span>

      <a
        href="#"
        className="text-sm flex items-center gap-x-2 text-indigo-600 font-medium hover:underline ml-2"
      >
        <span>Tutorial Video</span>

        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </a>
    </nav>

    <div className="max-w-screen-2xl mx-auto space-y-8">
      <div className="py-8 border-b flex items-end justify-between">
        <div className="flex items-center gap-x-4">
          <div className="h-14 w-14 border rounded-lg inline-flex items-center justify-center text-lg font-medium hover:bg-gray-50 transition-colors">
            B
          </div>

          <div className="flex flex-col">
            <div className="inline-flex items-center gap-x-2">
              <span>Brand</span>

              <ChevronDownIcon className="h-3 w-3" />
            </div>

            <a href="#" className="text-sm text-gray-400 hover:underline">
              brand.com
            </a>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search settings..."
          className="rounded-lg text-sm border-gray-300 placeholder:text-gray-600 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-medium">Settings</h1>

        <div className="text-sm inline-flex items-center gap-x-2">
          <p className="text-gray-600">Edit abilites of Brand.</p>

          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Profile Settings
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-4">
          <a
            href="#"
            className="h-20 border rounded-lg shadow-sm p-4 flex items-center gap-x-4 hover:border-indigo-600 transition-colors"
          >
            <div className="h-12 w-12 rounded-lg bg-gray-50 inline-flex items-center justify-center">
              <Cog6ToothIcon className="h-5 w-5" />
            </div>

            <div className="text-sm">
              <span className="font-medium">General</span>

              <p className="text-gray-400">
                View and update your store details.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="h-20 border rounded-lg shadow-sm p-4 flex items-center gap-x-4 hover:border-indigo-600 transition-colors"
          >
            <div className="h-12 w-12 rounded-lg bg-gray-50 inline-flex items-center justify-center">
              <ReceiptPercentIcon className="h-5 w-5" />
            </div>

            <div className="text-sm">
              <span className="font-medium">Billing Plan</span>

              <p className="text-gray-400">View your current plan.</p>
            </div>
          </a>

          <a
            href="#"
            className="h-20 border rounded-lg shadow-sm p-4 flex items-center gap-x-4 hover:border-indigo-600 transition-colors"
          >
            <div className="h-12 w-12 rounded-lg bg-gray-50 inline-flex items-center justify-center">
              <UserGroupIcon className="h-5 w-5" />
            </div>

            <div className="text-sm">
              <span className="font-medium">Team</span>

              <p className="text-gray-400">View and add teammates.</p>
            </div>
          </a>

          <a
            href="#"
            className="h-20 border rounded-lg shadow-sm p-4 flex items-center gap-x-4 hover:border-indigo-600 transition-colors"
          >
            <div className="h-12 w-12 rounded-lg bg-gray-50 inline-flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
            </div>

            <div className="text-sm">
              <span className="font-medium">SMS</span>

              <p className="text-gray-400">View and update your SMS choices.</p>
            </div>
          </a>

          <a
            href="#"
            className="h-20 border rounded-lg shadow-sm p-4 flex items-center gap-x-4 hover:border-indigo-600 transition-colors"
          >
            <div className="h-12 w-12 rounded-lg bg-gray-50 inline-flex items-center justify-center">
              <CodeBracketIcon className="h-5 w-5" />
            </div>

            <div className="text-sm">
              <span className="font-medium">Web Tracking Installation</span>

              <p className="text-gray-400">Insert code above {"<head>"}.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-medium">Integrations</h1>

        <div className="text-sm inline-flex items-center gap-x-2">
          <p className="text-gray-600">Layer in connections.</p>

          <a href="#" className="text-indigo-600 font-medium hover:underline">
            See More
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="border rounded-lg shadow-sm p-4 flex flex-col gap-y-4 hover:bg-gray-50 transition-colors">
            <div className="h-12 w-12 inline-flex items-center justify-center">
              <img
                className="h-8 drop-shadow-sm"
                src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
                alt=""
              />
            </div>

            <div>
              <span className="font-medium">Shopify</span>

              <p className="text-sm text-gray-400">
                View analytics data inside Shopify.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex max-w-max text-sm font-medium items-center gap-x-2 px-4 py-2 rounded-lg border bg-white hover:opacity-80 transition-opacity"
            >
              <span>Connect</span>

              <ChevronRightIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="border rounded-lg shadow-sm p-4 flex flex-col gap-y-4 hover:bg-gray-50 transition-colors">
            <div className="h-12 w-12 inline-flex items-center justify-center">
              <img
                className="h-8 drop-shadow-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
                alt=""
              />
            </div>

            <div>
              <span className="font-medium">Twitter</span>

              <p className="text-sm text-gray-400">
                View analytics data inside Twitter.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex max-w-max text-sm font-medium items-center gap-x-2 px-4 py-2 rounded-lg border bg-white hover:opacity-80 transition-opacity"
            >
              <span>Connect</span>

              <ChevronRightIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="border rounded-lg shadow-sm p-4 flex flex-col gap-y-4 hover:bg-gray-50 transition-colors">
            <div className="h-12 w-12 inline-flex items-center justify-center">
              <img
                className="h-8 rounded-lg drop-shadow-sm"
                src="https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE"
                alt=""
              />
            </div>

            <div>
              <span className="font-medium">Stripe</span>

              <p className="text-sm text-gray-400">
                View analytics data inside Stripe.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex max-w-max text-sm font-medium items-center gap-x-2 px-4 py-2 rounded-lg border bg-white hover:opacity-80 transition-opacity"
            >
              <span>Connect</span>

              <ChevronRightIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="border rounded-lg shadow-sm p-4 flex flex-col gap-y-4 hover:bg-gray-50 transition-colors">
            <div className="h-12 w-12 inline-flex items-center justify-center">
              <img
                className="h-8 rounded-lg drop-shadow-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt=""
              />
            </div>

            <div>
              <span className="font-medium">Instagram</span>

              <p className="text-sm text-gray-400">
                View analytics data inside Instagram.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex max-w-max text-sm font-medium items-center gap-x-2 px-4 py-2 rounded-lg border bg-white hover:opacity-80 transition-opacity"
            >
              <span>Connect</span>

              <ChevronRightIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="border rounded-lg shadow-sm p-4 flex flex-col gap-y-4 hover:bg-gray-50 transition-colors">
            <div className="h-12 w-12 inline-flex items-center justify-center">
              <img
                className="h-8 drop-shadow-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
                alt=""
              />
            </div>

            <div>
              <span className="font-medium">Facebook</span>

              <p className="text-sm text-gray-400">
                View analytics data inside Facebook.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex max-w-max text-sm font-medium items-center gap-x-2 px-4 py-2 rounded-lg border bg-white hover:opacity-80 transition-opacity"
            >
              <span>Connect</span>

              <ChevronRightIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="relative border rounded-lg shadow-sm p-4 flex flex-col gap-y-4 hover:bg-gray-50 transition-colors">
            <span className="absolute bg-green-100 text-green-600 px-2 py-1 right-4 inline-flex max-w-max text-xs font-medium rounded-full">
              Connected
            </span>

            <div className="h-12 w-12 inline-flex items-center justify-center">
              <img
                className="h-8 drop-shadow-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </div>

            <div>
              <span className="font-medium">Google</span>

              <p className="text-sm text-gray-400">
                View analytics data inside Google.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex max-w-max text-sm font-medium text-red-400 px-4 py-2 rounded-lg border bg-white hover:opacity-80 transition-opacity"
            >
              <span>Disconnect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
