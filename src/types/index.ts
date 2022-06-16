import { ReactElement } from 'react';

export type Nullable<T> = T | null;

export type Undetectable<T> = T | undefined;

export type ReturnComponentType = Nullable<ReactElement>;
