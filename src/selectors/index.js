import { createSelector } from 'reselect';

const rootState = state => state.route;

export const pathname = createSelector(
    rootState,
    rootState => rootState && rootState.pathname
);
