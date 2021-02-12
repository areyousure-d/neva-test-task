import { Quantity } from "./input-quantity";
import { ResultPage } from "./result";
import { Time } from "./select-time";
import { Direction } from "./select-direction";
import { WelcomePage } from "./welcome";

export { Quantity } from "./input-quantity";
export { ResultPage } from "./result";
export { Time } from "./select-time";
export { Direction } from "./select-direction";

export const routes = () => [
  {
    path: "/time/",
    exact: true,
    component: WelcomePage,
  },
  {
    path: "/time/select-direction/",
    exact: false,
    component: Direction,
  },
  {
    path: "/time/select-quantity/",
    exact: true,
    component: Quantity,
  },
  {
    path: "/time/select-time/",
    exact: true,
    component: Time,
  },
  {
    path: "/time/result/",
    exact: true,
    component: ResultPage,
  },
];
