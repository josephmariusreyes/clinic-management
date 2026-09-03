import type { RouteLocationNormalized } from 'vue-router'

export function canAccessRoute(to: RouteLocationNormalized) {
    const requiresAuth = to.matched.some((route) => route.meta.requiresAuth === true);

    if (!requiresAuth) {
        return true;
    }

    return to.query.auth === 'true';
}
