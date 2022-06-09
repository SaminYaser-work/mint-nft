import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/assets/social-media-icons/email_32x32.png";

export default function NavBar({ acc, setAcc }) {
  const isConnected = Boolean(acc[0]);

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAcc(accounts);
    }
  };

  return (
    <Flex justify={"space-between"} align="center" padding="30px">
      <Flex justify={"space-around"} width="40%" padding="0px 75px">
        <Link href="#">
          <Image src={Facebook} boxSize="42px" margin="0 15px" />
        </Link>

        <Link href="#">
          <Image src={Twitter} boxSize="42px" margin="0 15px" />
        </Link>

        <Link href="#">
          <Image src={Email} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      <Flex justify={"space-around"} align="center" width="40%" padding="30px">
        <Box margin={"0 15px"}>About</Box>
        <Spacer />
        <Box margin={"0 15px"}>Mint</Box>
        <Spacer />
        <Box margin={"0 15px"}>Team</Box>
        <Spacer />

        {isConnected ? (
          <Box margin={"0 15px"}>Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0f0f0f"
            color={"white"}
            cursor="pointer"
            fontFamily={"inherit"}
            padding="15px"
            margin={"0 15px"}
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
