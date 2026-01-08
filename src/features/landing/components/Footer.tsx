export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                <span className="text-lg font-bold tracking-tight text-white">
                  F
                </span>
              </div>

              <span className="text-xl font-medium tracking-tight text-white">
                Fit<span className="text-amber-300">Buddy</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500">
              Your fitness companion for every journey.
            </p>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold text-white">Product</div>
            <div className="space-y-2 text-sm text-zinc-500">
              <div className="cursor-pointer transition-colors hover:text-white">
                Features
              </div>
              <div className="cursor-pointer transition-colors hover:text-white">
                Trainers
              </div>
              <div className="cursor-pointer transition-colors hover:text-white">
                Pricing
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold text-white">Company</div>
            <div className="space-y-2 text-sm text-zinc-500">
              <div className="cursor-pointer transition-colors hover:text-white">
                About
              </div>
              <div className="cursor-pointer transition-colors hover:text-white">
                Blog
              </div>
              <div className="cursor-pointer transition-colors hover:text-white">
                Contact
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold text-white">Legal</div>
            <div className="space-y-2 text-sm text-zinc-500">
              <div className="cursor-pointer transition-colors hover:text-white">
                Privacy
              </div>
              <div className="cursor-pointer transition-colors hover:text-white">
                Terms
              </div>
              <div className="cursor-pointer transition-colors hover:text-white">
                Support
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
          © 2025 FitBuddy. Your companion in fitness.
        </div>
      </div>
    </footer>
  );
}
