import { store } from '../store';

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// actions
export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>;
