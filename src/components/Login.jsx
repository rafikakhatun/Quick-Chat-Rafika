import ParticlesBackground from "./ParticlesBackground";

const Login = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Particles */}
      <ParticlesBackground />

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-[#1D2666] p-6 rounded-xl shadow-xl border-gray-50 w-80">
          <h2 className="text-xl font-semibold mb-4 text-center text-white drop-shadow ">Quick Chat with Rafika</h2>

          {/* <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3 bg-[#1D2666] text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-3"
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded mt-2">
            Sign In
          </button> */}
        </div>
      </div>

    </div>
  );
};

export default Login;
