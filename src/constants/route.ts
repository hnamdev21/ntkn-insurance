import { GiftIcon, HomeIcon, LayersIcon, UserIcon } from "@/components/Icons";

export const path = {
  Home: "/home",
  Policies: "/policies",
  Claims: "/claims",
  Loans: "/loans",
  News: "/news",
  About: "/about",
  Contact: "/contact",
  FAQ: "/faq",
  Register: "/register",
  Login: "/login",
} as const;
export type Path = (typeof path)[keyof typeof path];

export const route = {
  Home: {
    path: path.Home,
    label: "Home",
  },
  Policies: {
    path: path.Policies,
    label: "Policies",
  },
  Claims: {
    path: path.Claims,
    label: "Claims",
  },
  Loans: {
    path: path.Loans,
    label: "Loans",
  },
  About: {
    path: path.About,
    label: "About",
  },
  Contact: {
    path: path.Contact,
    label: "Contact",
  },
  News: {
    path: path.News,
    label: "News",
  },
  FAQ: {
    path: path.FAQ,
    label: "FAQ",
  },
  Register: {
    path: path.Register,
    label: "Register",
  },
  Login: {
    path: path.Login,
    label: "Login",
  },
} as const;
export type Route = (typeof route)[keyof typeof route];

export const headerRoutes = Object.values(route).filter(
  (route) => route.path !== path.Login && route.path !== path.Register
);

export const adminPath = {
  Admin: "/admin",
  Dashboard: "/admin/dashboard",
  Products: "/admin/products",
  Users: "/admin/users",
  News: "/admin/news",
  Policies: "/admin/policies",
  Claims: "/admin/claims",
  Loans: "/admin/loans",
  Payments: "/admin/payments",
  Logs: "/admin/logs",
} as const;
export type AdminPath = (typeof adminPath)[keyof typeof adminPath];

export const adminRoute = {
  Admin: {
    path: adminPath.Admin,
    label: "Admin",
  },
  Dashboard: {
    path: adminPath.Dashboard,
    label: "Dashboard",
    icon: HomeIcon,
  },
  Products: {
    path: adminPath.Products,
    label: "Products",
    icon: GiftIcon,
  },
  Users: {
    path: adminPath.Users,
    label: "Users",
    icon: UserIcon,
  },
  News: {
    path: adminPath.News,
    label: "News",
    icon: LayersIcon,
  },
  Policies: {
    path: adminPath.Policies,
    label: "Policies",
    icon: LayersIcon,
  },
  Claims: {
    path: adminPath.Claims,
    label: "Claims",
    icon: LayersIcon,
  },
  Loans: {
    path: adminPath.Loans,
    label: "Loans",
    icon: LayersIcon,
  },
  Payments: {
    path: adminPath.Payments,
    label: "Payments",
    icon: LayersIcon,
  },
  Logs: {
    path: adminPath.Logs,
    label: "Logs",
    icon: LayersIcon,
  },
} as const;
export type AdminRoute = (typeof adminRoute)[keyof typeof adminRoute];

export const adminRoutes = Object.values(adminRoute).filter(
  (route) => route.path !== adminPath.Admin
);

export const socialPath = {
  Instagram: "/instagram",
  Facebook: "/facebook",
};

export const socialRoute = {
  Instagram: {
    path: socialPath.Instagram,
    label: "Instagram",
  },
  Facebook: {
    path: socialPath.Facebook,
    label: "Facebook",
  },
} as const;
export type SocialRoute = (typeof socialRoute)[keyof typeof socialRoute];

export const socialRoutes = Object.values(socialRoute);
