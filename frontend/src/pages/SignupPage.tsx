import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Facebook, Phone } from "lucide-react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      // Example in SignupPage.tsx
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      // Store the name in localStorage
      localStorage.setItem("name", name);

      setSuccess("Signup successful! Redirecting to login page...");
      setTimeout(() => {
        navigate("/auth/login", {
          state: {
            signupSuccess: true,
            email: email,
          },
        });
      }, 2000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Signup failed. Try again.");
      } else {
        setError("Signup failed. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Sign up for Airbnb</h1>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-md text-center">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded-md text-center">
          {success}
        </div>
      )}

      <form onSubmit={handleSignup} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </label>
          <input
            id="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            minLength={6}
            required
          />
        </div>

        <div className="text-xs text-gray-500 py-2">
          <p>
            By selecting Agree and continue, I agree to Airbnb's Terms of
            Service, Payments Terms of Service, and Nondiscrimination Policy and
            acknowledge the Privacy Policy.
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Signing up..." : "Agree and continue"}
        </button>
      </form>

      <div className="flex items-center gap-2 my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-xs text-gray-500">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="space-y-4">
        <button
          className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          type="button"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
          <span>Continue with Facebook</span>
        </button>

        <button
          className="w-full border cursor-pointer border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          type="button"
        >
          <Phone className="h-4 w-4 text-gray-600" />
          <span>Continue with Phone</span>
        </button>
      </div>

      <div className="text-center text-sm mt-6">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-red-500 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
