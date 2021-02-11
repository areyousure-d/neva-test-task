import { HomePage } from "./home/page";
import { TimePage } from "./time/page";
import { TicketsPage } from "./tickets/page";

export const routes = () => [
  {
    path: "/time/",
    exact: false,
    component: TimePage,
  },
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/tickets/",
    exact: true,
    component: TicketsPage,
  },
];
