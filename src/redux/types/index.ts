import { useDispatch } from 'react-redux';

import { store } from 'redux/store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
