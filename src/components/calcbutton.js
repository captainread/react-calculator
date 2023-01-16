import { Button } from '@chakra-ui/react';

const CalcButton = ({ className, value, onClick }) => {
  return (
    <Button
      display="inline-block"
      colorScheme="gray"
      className={className}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default CalcButton;
