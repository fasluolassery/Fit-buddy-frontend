import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section id="trainers" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[3rem] border border-amber-900/30 bg-gradient-to-br from-amber-950/30 via-zinc-900/50 to-black p-16 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent"></div>
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-600/20 blur-3xl"></div>
          <div className="relative text-center">
            <h2 className="mb-6 text-5xl font-bold">
              Ready to Meet Your FitBuddy?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400">
              Join thousands transforming their fitness journey. Start with
              personalized templates today.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-5 text-lg font-bold text-black shadow-2xl shadow-amber-900/50 transition-all duration-300 hover:from-amber-400 hover:to-amber-500"
            >
              Start Your Journey
            </button>
            <div className="mt-8 text-sm text-zinc-500">
              Free signup • Get default templates instantly • Choose trainer
              anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
