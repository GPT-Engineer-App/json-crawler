import React, { useState } from "react";
import { Box, Button, Text, Input, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaPlay, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isCrawling, setIsCrawling] = useState(false);
  const toast = useToast();

  const handleCrawl = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid URL to start crawling.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsCrawling(true);
    // Simulate a crawl
    setTimeout(() => {
      setIsCrawling(false);
      toast({
        title: "Crawling Complete",
        description: "The website has been successfully crawled and data is saved.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 5000);
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Website Crawler Tool
      </Heading>
      <Text>Enter the URL of the website you want to crawl:</Text>
      <Input placeholder="https://example.com" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={handleCrawl} isLoading={isCrawling} loadingText="Crawling...">
        Start Crawling
      </Button>
      <Button
        leftIcon={<FaFileDownload />}
        colorScheme="blue"
        onClick={() =>
          toast({
            title: "Download Initiated",
            description: "Downloading JSON files...",
            status: "info",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Download JSON
      </Button>
    </VStack>
  );
};

export default Index;
