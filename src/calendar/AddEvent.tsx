import { Popover, PopoverProps } from "@mui/material";

interface AddEventProps extends PopoverProps {}

const AddEvent = (props: AddEventProps) => {
  return (
    <Popover
      {...props}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      test
    </Popover>
  );
};

export default AddEvent;
