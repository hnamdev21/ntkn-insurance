import { GiftIcon, HomeIcon, LayersIcon, UserIcon } from "@/components/Icons";

export const path = {
  Home: "/",
  Shop: "/shop",
  Register: "/register",
  Login: "/login",
  Cart: "/cart",
  Instagram: "/instagram",
  Facebook: "/facebook",
  FAQ: "/faq",
} as const;
export type Path = (typeof path)[keyof typeof path];

export const route = {
  Home: {
    path: path.Home,
    label: "Home",
  },
  Shop: {
    path: path.Shop,
    label: "Shop",
  },
  Register: {
    path: path.Register,
    label: "Register",
  },
  Login: {
    path: path.Login,
    label: "Login",
  },
  Cart: {
    path: path.Cart,
    label: "Cart",
  },
  Instagram: {
    path: path.Instagram,
    label: "Instagram",
  },
  Facebook: {
    path: path.Facebook,
    label: "Facebook",
  },
  FAQ: {
    path: path.FAQ,
    label: "FAQ",
  },
} as const;
export type Route = (typeof route)[keyof typeof route];

export const adminPath = {
  Admin: "/admin",
  Dashboard: "/admin/dashboard",
  Products: "/admin/products",
  Users: "/admin/users",
  Invoices: "/admin/invoices",
  Orders: "/admin/orders",
  Blogs: "/admin/blogs",
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
  Invoices: {
    path: adminPath.Invoices,
    label: "Invoices",
    icon: LayersIcon,
  },
  Orders: {
    path: adminPath.Orders,
    label: "Orders",
    icon: LayersIcon,
  },
  Blogs: {
    path: adminPath.Blogs,
    label: "Blogs",
    icon: LayersIcon,
  },
} as const;
export type AdminRoute = (typeof adminRoute)[keyof typeof adminRoute];
