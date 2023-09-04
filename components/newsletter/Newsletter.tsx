"use client";

const Newsletter = () => {
  return (
    <section className="mx-auto max-w-5xl items-center justify-center p-6 lg:px-4 m-10">
      <div className="text-center font-bold text-3xl lg:text-5xl md:leading-loose mb-10">
        Sign up for our weekly newsletter to never miss any our report analysis.
      </div>

      <form action="#">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              className="block p-3 pl-10 w-full text-base bg-gray-200 text-black rounded-full sm:rounded-none sm:rounded-l-full focus:outline-none"
              placeholder="Enter your email"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="border-2 border-eco-blue-100 py-3 px-5 w-full text-sm font-normal text-center text-white rounded-full cursor-pointer bg-eco-blue-100 sm:rounded-none sm:rounded-r-full hover:bg-slate-800"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
