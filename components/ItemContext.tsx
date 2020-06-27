import {
  createContext,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from "react";
import _ from "lodash";
import createPersistedState from "use-persisted-state";
import { UUID } from "@notion-cms/types";
import { Item } from "../data";

interface ItemContextProps {
  getValue: (uuid: UUID) => boolean;
  setValue: (uuid: UUID, value: boolean) => void;
  toggleValue: (uuid: UUID) => void;
  reset: () => void;
  values: {
    [x: string]: boolean;
  };
}

export const ItemContext = createContext<ItemContextProps>({
  values: {},
  getValue: () => null,
  setValue: () => null,
  toggleValue: () => null,
  reset: () => null,
});

interface Props {
  items: Item[];
  children: React.ReactNode;
}

const usePersistedState = createPersistedState("items");

export const ItemContextProvider = ({ items, children }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const defaultValues = useMemo(
    () => _.fromPairs(items.map((item) => [item.id, false])),
    [items]
  );
  const [values, setValues] = usePersistedState<ItemContextProps["values"]>(
    defaultValues
  );
  const getValue = useCallback((uuid: UUID) => values[uuid], [values]);
  const setValue = useCallback(
    (uuid: UUID, value: boolean) =>
      setValues((values) => ({ ...values, [uuid]: value })),
    [values]
  );
  const toggleValue = useCallback(
    (uuid: UUID) =>
      setValues((values) => ({ ...values, [uuid]: !values[uuid] })),
    [setValues]
  );
  const reset = useCallback(
    () => setValues((values) => _.map(values, () => false)),
    [setValues]
  );

  // Force a 2-pass rendering to avoid SSG hydration errors.
  useEffect(() => setIsClient(true), []);

  return (
    <ItemContext.Provider
      value={{
        values: isClient ? values : defaultValues,
        getValue,
        setValue,
        toggleValue,
        reset,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
