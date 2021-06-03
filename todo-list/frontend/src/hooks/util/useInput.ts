import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [input, setInput] = useState<string>(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInput(value);
  }, []);

  return [
    input,
    onChange,
  ] as const;
}

export default useInput;