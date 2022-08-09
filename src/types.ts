import { History } from 'history';
import { Effect, Event, Store } from 'effector';

export type RouteParams = Record<string, any>;

export type RouteQuery = Record<string, any>;

export type RouteParamsAndQuery<Params extends RouteParams> = {
  params: Params;
  query: RouteQuery;
};

export type RouteInstance<Params extends RouteParams> = {
  $isOpened: Store<boolean>;
  $params: Store<Params>;
  $query: Store<RouteQuery>;
  opened: Event<RouteParamsAndQuery<Params>>;
  updated: Event<RouteParamsAndQuery<Params>>;
  closed: Event<void>;
  /** @deprecated Will be removed in 0.6.0. Use `route.closed` instead */
  left: Event<void>;
  navigate: Effect<RouteParamsAndQuery<Params>, RouteParamsAndQuery<Params>>;
  open: Effect<Params, RouteParamsAndQuery<Params>>;
  kind: typeof Kind.ROUTE;
};

export type RouteObject<Params extends RouteParams> = {
  route: RouteInstance<Params>;
  path: string;
};

export type UnmappedRouteObject<Params extends RouteParams> = {
  route: RouteInstance<Params> | RouteInstance<Params>[];
  path: string;
};

export type HistoryPushParams = {
  history: History;
  path: string;
  params: RouteParams;
  query: RouteQuery;
  method: 'replace' | 'push';
};

export type HistoryBackForwardParams = History;

// @ts-expect-error
export type PathCreator<Params extends RouteParams> = string;

export const Kind = {
  ROUTE: Symbol(),
};
