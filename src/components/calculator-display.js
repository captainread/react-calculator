import { Text } from '@chakra-ui/react';

const CalculatorDisplay = props => {
  return (
    <Text
      colorScheme="teal"
      w="100%"
      isDisabled="true"
      className="calculatorDisplay"
      textAlign="right"
      bgGradient="linear(to-r, gray.200, gray.400)"
      lineHeight="3rem"
      color="white"
      mb="1rem"
      fontSize="150%"
      pr="5%"
      border="2px"
      borderColor="white"
      borderRadius="5px"
    >
      {props.value}
    </Text>
  );
};

export default CalculatorDisplay;
