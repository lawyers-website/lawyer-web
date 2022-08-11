import { FormControl, Input, FormLabel, Textarea, Button } from '@chakra-ui/react';

export default function Final({
  setPosition,
}: {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <FormControl>
      <FormLabel fontSize='medium' htmlFor='text'>
        Where are you looking for a lawyer?
      </FormLabel>
      <Input marginBottom='5' id='question' type='text' />
      <FormLabel fontSize='medium' htmlFor='text'>
        Other Comments, Deadline
      </FormLabel>
      <Textarea marginBottom='5' id='question' />
      <Button float='right' variant='primary' onClick={() => setPosition(4)}>
        Submit
      </Button>
    </FormControl>
  );
}
