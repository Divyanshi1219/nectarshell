import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Authentication State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const mapAuthCodeToMessage = (authCode) => {
    switch (authCode) {
      case "auth/invalid-credential":
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password.";
      case "auth/email-already-in-use":
        return "This email is already registered. Please sign in.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return `An error occurred: ${authCode || 'Unknown error'}. Please try again.`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp && password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    setLoading(true);
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/"); // Redirect home after successful auth
    } catch (err) {
      console.error(err);
      setError(mapAuthCodeToMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/"); // Redirect on success
    } catch (err) {
      console.error(err);
      if (err.code !== 'auth/popup-closed-by-user') {
        setError("Failed to sign in with Google.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      return setError("Please enter your email address in the field above to reset your password.");
    }
    setError("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Please check your inbox.");
    } catch (err) {
      console.error(err);
      setError(mapAuthCodeToMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">

      {/* LEFT SIDE */}
      <section className="login-panel">

        <div className="login-inner">

          {/* Heading */}
          <div className="login-heading">

            <span className="login-eyebrow">
              {isSignUp ? "WELCOME TO NECTARSHELL" : "WELCOME BACK"}
            </span>

            <h1>
              {isSignUp
                ? "Let's get started."
                : "Let's build what's next."}
            </h1>

            <p>
              {isSignUp
                ? "Create your NectarShell account and begin your journey with us."
                : "Sign in to access your NectarShell account and continue your journey."}
            </p>

          </div>

          {error && (
            <div style={{ backgroundColor: "#fde8e8", color: "#c81e1e", padding: "12px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px", fontWeight: "500" }}>
              {error}
            </div>
          )}

          {/* FORM */}
          <form className="login-form" onSubmit={handleSubmit}>

            {/* Full name - Sign Up only */}
            {isSignUp && (
              <div className="login-field">

                <label htmlFor="name">
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isSignUp}
                />

              </div>
            )}


            {/* Email */}
            <div className="login-field">

              <label htmlFor="email">
                Email
              </label>

              <div className="login-input-wrapper">

                <span className="input-icon">
                  ✉
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* Password */}
            <div className="login-field">

              <label htmlFor="password">
                Password
              </label>

              <div className="login-input-wrapper">

                <span className="input-icon">
                  ◉
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Confirm password - Sign Up only */}
            {isSignUp && (
              <div className="login-field">

                <label htmlFor="confirmPassword">
                  Confirm password
                </label>

                <div className="login-input-wrapper">

                  <span className="input-icon">
                    ◉
                  </span>

                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required={isSignUp}
                  />

                </div>

              </div>
            )}


            {/* Login options */}
            {!isSignUp && (
              <div className="login-options">

                <label className="remember-option">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={handleForgotPassword}
                  disabled={loading}
                >
                  Forgot password?
                </button>

              </div>
            )}


            {/* Terms */}
            {isSignUp && (
              <label className="terms-option">

                <input type="checkbox" required />

                <span>
                  I agree to the Terms & Conditions
                </span>

              </label>
            )}


            {/* Main Button */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Processing..." : (isSignUp ? "Create Account" : "Sign In")}
              {!loading && <span>→</span>}
            </button>

          </form>




          {/* Toggle */}
          <div className="login-switch">

            {isSignUp ? (
              <>
                <span>Already have an account?</span>

                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                <span>Don't have an account?</span>

                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                >
                  Create an account
                </button>
              </>
            )}

          </div>

        </div>

      </section>


      {/* RIGHT SIDE */}
      <section className="login-visual">

        <div className="login-visual-overlay"></div>

        <div className="login-visual-content">

          <span className="visual-eyebrow">
            NECTARSHELL
          </span>

          <h2>
            Where
            <br />
            Technology
            <br />
            Meets Finance
          </h2>

          <div className="visual-line"></div>

          <p>
            Empowering businesses through innovation,
            expertise, and smarter solutions.
          </p>

          <div className="visual-bottom">

            <span className="visual-bottom-line"></span>

            <p>
              TRUSTED BY BUSINESSES
              <br />
              FOR A SMARTER TOMORROW.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Login;