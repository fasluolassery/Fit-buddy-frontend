import { getMeRequest } from "../../auth/auth.services";

export const UserDashboard = () => {
  const handleTestRefresh = async () => {
    try {
      const res = await getMeRequest();
      console.log("Me success:", res.data);
    } catch (err) {
      console.error("Me failed:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-semibold">User Dashboard</h1>

      <button
        onClick={handleTestRefresh}
        className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Test Refresh Flow
      </button>
    </div>
  );
};
