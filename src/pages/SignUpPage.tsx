const SignUpPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage: 'url("/nong-iq0jEyYFrIE-unsplash.jpg")',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-md text-white w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 rounded-md border bg-white focus:outline-none focus:border-blue-500"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 rounded-md border bg-white focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 rounded-md border bg-white focus:outline-none focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        <button className="w-full p-2 bg-secondary text-white rounded-md mb-4">
          Continue
        </button>
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-t border-gray-500" />
          <span className="mx-2 text-primary">or</span>
          <hr className="flex-grow border-t border-gray-500" />
        </div>
        <button className="w-full p-2 bg-primary text-accent rounded-md my-2">
          <div className="flex justify-start items-center px-2">
            <img
              src="/icons8-google.svg"
              alt="Google icon by icon8"
              width={25}
              height={25}
            />
            <span className="ml-4 font-semibold">Continue with Google</span>
          </div>
        </button>
        <button className="w-full p-2 bg-primary text-accent rounded-md my-2">
          <div className="flex justify-start items-center px-2">
            <img
              src="/icons8-facebook.svg"
              alt="Google icon by icon8"
              width={25}
              height={25}
            />
            <span className="ml-4 font-semibold">Continue with Facebook</span>
          </div>
        </button>
        <div className="mt-4">
          <div className="text-md my-2">
            <span className="text-primary">Don't have an account?</span>
            <span className="text-secondary ml-1">Sign Up</span>
          </div>
          <div className="text-md text-secondary my-2">Forgot Password?</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
