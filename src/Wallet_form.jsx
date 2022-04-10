import React, { useState } from "react";

function WalletForm(props) {
  const [api_key, setApiKey] = useState("");
  const [api_secret, setApiSecret] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onSubmit({ api_key, api_secret });

    setApiKey("");
    setApiSecret("");
  };

  const handleChange = (e) => {
    if (e.target.name === "api_key") {
      setApiKey(e.target.value);
    }
    if (e.target.name === "api_secret") {
      setApiSecret(e.target.value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-gray-500 bg-white">
                Connect To Exchange
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="api_key"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Api Key"
                    onChange={handleChange}
                    value={api_key}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="api_secret"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Api Secret"
                    onChange={handleChange}
                    value={api_secret}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className=" relative ">
                  <div className=" h-8 bg-gray-200 rounded animate-pulse">
                    3.121.67.74 18.156.88.234 3.68.22.15 3.68.24.139
                  </div>
                </div>
              </div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Connect
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
          <p className="text-xs leading-5 text-gray-500">
            We store API keys in encrypted form AES-256 with dedicated private
            keys which are generated for each user separately.
          </p>
        </div>
      </form>
    </div>
  );
}

export default WalletForm;
