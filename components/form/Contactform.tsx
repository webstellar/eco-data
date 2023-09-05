const Contactform: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
        <div className="font-bold mb-10">
          <h2 className="text-3xl md:text-5xl">Let&apos;s work together.</h2>
        </div>
        <div className="w-3/5 mx-auto">
          <form>
            <div className="grid grid-cols-2 gap-8">
              <div className="grid">
                <label htmlFor="firstname" className="mb-4">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid">
                <label htmlFor="lastname" className="mb-4">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>

              <div className="grid">
                <label htmlFor="email" className="mb-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid">
                <label htmlFor="organization" className="mb-4">
                  Organization (optional)
                </label>
                <input
                  type="text"
                  name="organization"
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid col-span-full gap-y-2">
                <label htmlFor="message" className="mb-4">
                  Message
                </label>
                <textarea
                  rows={8}
                  name="message"
                  className="border-gray-800 border-2 focus:outline-none w-full px-2 py-2"
                />
              </div>

              <div className="grid col-span-1 gap-y-2">
                <button
                  className="bg-eco-blue-100 text-gray-100 px-8 py-2 "
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
