const LoginForm = ({ userRole, onSubmit, register }) => {
  return (
    <div>
      <p className="text-white">{userRole} Login</p>
      <form onSubmit={onSubmit}>
        <input
          className="w-full px-8 py-6 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="email"
          placeholder="Enter Login ID"
          name="email"
          {...register("email")}
        />
        <input
          className="w-full px-8 py-6 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          placeholder="Password"
          name="password"
          {...register("password")}
        />
        <button className="mt-5 tracking-wide font-semibold bg-white text-black w-[270px] py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mx-auto active:bg-[#053752] active:text-white">
          <span className="ml-3 text-4xl font-normal">NEXT</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
