import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<unknown>;

export function Button(props: ButtonProps) {
  return (
    <button className="bg-orange-400 text-lg font-bold text-white p-1 rounded-lg">
      {props.children}
    </button>
  );
}

export default Button;
