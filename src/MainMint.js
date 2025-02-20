import { ethers, BigNumber } from "ethers";
import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import MujibNFT from "./MujibNFT.json";

const MujibNFTAddress = "0xd15F519517a7aE87Efa8BDdeDABFA23Ae13a4ebf";

export default function MainMint({ acc, setAcc }) {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(acc[0]);

  const handleMint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        MujibNFTAddress,
        MujibNFT.abi,
        signer
      );

      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("Response: ", response);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  const handleDecrement = () => {
    if (mintAmount <= 1) return;

    setMintAmount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;

    setMintAmount((prev) => prev + 1);
  };

  return (
    <Flex
      justify={"center"}
      align="center"
      height="100vh"
      paddingBottom={"150px"}
    >
      <Box width={"520px"}>
        <div>
          <Text fontSize={"45px"} textShadow="0 5px #000000">
            MujibNFT
          </Text>
          <Text
            fontSize={"30px"}
            letterSpacing="-5.5%"
            fontFamily={"VT323"}
            textShadow="0 2px 2px $000000"
          >
            Without development, you will lack affiliate-based compliance.
            Without micro-resource-constrained performance, you will lack
            architectures.
          </Text>

          {isConnected ? (
            <div>
              <Flex align={"center"} justify="center">
                <Button
                  backgroundColor="#D6517D"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0f0f0f"
                  color={"white"}
                  cursor="pointer"
                  fontFamily={"inherit"}
                  padding="15px"
                  marginTop={"10px"}
                  onClick={handleDecrement}
                >
                  -
                </Button>

                <Input
                  readOnly
                  width={"100px"}
                  height={"40px"}
                  textAlign="center"
                  paddingLeft={"19px"}
                  fontFamily={"inherit"}
                  padding="15px"
                  marginTop={"10px"}
                  type="number"
                  value={mintAmount}
                />

                <Button
                  backgroundColor="#D6517D"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0f0f0f"
                  color={"white"}
                  cursor="pointer"
                  fontFamily={"inherit"}
                  padding="15px"
                  marginTop={"10px"}
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Flex>

              <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0f0f0f"
                color={"white"}
                cursor="pointer"
                fontFamily={"inherit"}
                padding="15px"
                marginTop={"10px"}
                onClick={handleMint}
              >
                Mint Now!
              </Button>
            </div>
          ) : (
            <Text
              marginTop={"70px"}
              fontSize={"30px"}
              letterSpacing="-5.5%"
              fontFamily={"VT323"}
              textShadow="0 3px $000000"
              color={"#D6517D"}
            >
              Connect your wallet to mint
            </Text>
          )}
        </div>
      </Box>
    </Flex>
  );
}
