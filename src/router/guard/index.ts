import { createPermissionGuard } from "./permissionGuard";
import { Router } from "vue-router";

export function setupRouterGuard(router: Router) {
  createPermissionGuard(router);
}
