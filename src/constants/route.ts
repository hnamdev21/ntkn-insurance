import {
  BookIcon,
  BookOpenIcon,
  ChartIcon,
  CreditCardIcon,
  HandHoldingHeart,
  LayersIcon,
  MoneyIcon,
  UserIcon,
} from "@/components/Icons";

export const path = {
  Home: "/",
  Policies: "/policies",
  Claims: "/claims",
  Loans: "/loans",
  Blogs: "/news",
  About: "/about",
  Contact: "/contact",
  FAQs: "/faqs",
  Register: "/register",
  Login: "/login",
} as const;
export type Path = (typeof path)[keyof typeof path];

export const route = {
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
  Blogs: {
    path: path.Blogs,
    label: "Blogs",
  },
  FAQs: {
    path: path.FAQs,
    label: "FAQs",
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
  Admin: "/admin/dashboard",
  Users: "/admin/users",
  Blogs: "/admin/blogs",
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
    label: "Dashboard",
    icon: ChartIcon,
  },
  Policies: {
    path: adminPath.Policies,
    label: "Policies",
    icon: LayersIcon,
  },
  Claims: {
    path: adminPath.Claims,
    label: "Claims",
    icon: HandHoldingHeart,
  },
  Users: {
    path: adminPath.Users,
    label: "Users",
    icon: UserIcon,
  },
  Blogs: {
    path: adminPath.Blogs,
    label: "Blogs",
    icon: BookOpenIcon,
  },
  Loans: {
    path: adminPath.Loans,
    label: "Loans",
    icon: CreditCardIcon,
  },
  Payments: {
    path: adminPath.Payments,
    label: "Payments",
    icon: MoneyIcon,
  },
  Logs: {
    path: adminPath.Logs,
    label: "Logs",
    icon: BookIcon,
  },
} as const;
export type AdminRoute = (typeof adminRoute)[keyof typeof adminRoute];

export const adminRoutes = Object.values(adminRoute);

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
