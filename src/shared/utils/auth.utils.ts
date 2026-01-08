export const getHomeRoute = (role: string) => {
  switch (role) {
    case "user":
      return "/dashboard";
    case "trainer":
      return "/trainer/dashboard";
    case "admin":
      return "/admin/dashboard";
    default:
      return "/unauthorized";
  }
};
