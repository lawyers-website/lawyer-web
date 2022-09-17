import { trpc } from "@/utils/trpc";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Input,
  Text,
  Textarea,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ReviewPage({ id }: any) {
  const router = useRouter();
  const reviewMutation = trpc.useMutation(["user.review"]);
  const ratingMutation = trpc.useMutation(["user.updateRating"]);

  const [value, setValue] = useState("");
  const [ratings, setRating] = useState(0);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const rating = [
    { value: 1, label: "very dissatisfied", color: "red" },
    { value: 2, label: "dissatisfied", color: "red" },
    { value: 3, label: "neutral", color: "orange" },
    { value: 4, label: "satisfied", color: "green" },
    { value: 5, label: "very satisfied", color: "green" },
  ];
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (ratings !== 0 && value !== "") {
      await reviewMutation.mutateAsync({
        review: value,
        rating: ratings,
        lawyerId: id,
      });
      await ratingMutation.mutateAsync(id);
      router.push("/user/user-in");
    }
  };
  return (
    <Box
      mt={{ base: "3rem", md: "5rem" }}
      boxSizing="border-box"
      maxW={{ base: "100%", md: "3xl" }}
      mx="auto"
      py={{ base: "0", sm: "8" }}
      px={{ base: "", sm: "10" }}
      bg={useBreakpointValue({ md: "bg-surface" })}
      boxShadow={{ base: "none", sm: useColorModeValue("md", "dark-lg") }}
      borderRadius={{ base: "xl", sm: "2xl" }}
    >
      <Text textAlign="center" fontSize="1.5rem" my="2rem">
        Rate Your Experience
      </Text>
      <HStack mb={3} justifyContent="center">
        <HStack spacing={{ base: 5, md: 5 }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <StarIcon
              key={value}
              fontSize="2rem"
              color={value <= ratings ? "orange.300" : "gray.500"}
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => setRating(value)}
            />
          ))}
        </HStack>
      </HStack>
      <Divider />
      <Box mt="2rem" ml="1rem">
        <Text mb="8px">Review:</Text>
        <Textarea
          value={value}
          onChange={handleChange}
          placeholder="Maximum of 600 characters"
          size="md"
          mr={2}
        />
      </Box>
      <Button
        onClick={(e) => handleSubmit(e)}
        mt="1rem"
        variant="primary"
        type="submit"
        ml={4}
      >
        Submit
      </Button>
    </Box>
  );
}
