import { logout } from "./utils";

export const USER_MENU_OPTIONS = [
  {
    key: "account",
    isAdmin: false,
    name: "Mi Cuenta",
  },
  {
    key: "myTickets",
    isAdmin: false,
    name: "Mis Entradas",
  },
  {
    key: "editPage",
    isAdmin: true,
    name: "Editar Página",
  },
  {
    key: "logout",
    isAdmin: false,
    name: "Cerrar Sesion",
  },
];

export const USER_MENU_OPTION_FUNCTIONS = {
  logout,
};
