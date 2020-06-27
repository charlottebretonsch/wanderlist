interface Props {
  checked: boolean;
  toggle: () => void;
}

const Tick = ({ checked, toggle, ...rest }: Props) => (
  <img
    src={checked ? "checked.svg" : "unchecked.svg"}
    onClick={toggle}
    alt={checked ? "checked" : "unchecked"}
    {...rest}
  />
);

export default Tick;
