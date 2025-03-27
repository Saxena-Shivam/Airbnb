import { Link } from "react-router-dom"
import { Facebook, Mail } from "lucide-react"

const LoginPage = () => {
  return (
    <div className="container max-w-md mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Log in to Airbnb</h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">Log in</button>

        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <Facebook className="h-4 w-4" />
          Continue with Facebook
        </button>

        <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <Mail className="h-4 w-4" />
          Continue with Email
        </button>

        <div className="text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-red-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

