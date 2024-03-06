import { Container, Flex, Heading, Text, Button, Card, Badge } from "@radix-ui/themes";
import AccordionDemo from "./Components/Accordion";
import FormDemo from "./Components/Form";
import SliderDemo from "./Components/Slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Container size="1">
          <Flex direction="column" gap="1" pb="2">
            <Heading align="center" className="font-bold text-2xl text-white outline-4">Radix UI Themes Demo</Heading>
            <Text color="gray">
              This will run through the features of Radix UI Themes
            </Text>
          </Flex>

          <Flex direction="column" gap="4" align="center">
            <Card size="1" style={{ width: 300 }}>
              <Flex gap="1" direction="column" align="center" p="1">
                <Text size="2">This is a Card</Text>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                  <Button>This is a Button</Button>
                </a>
              </Flex>
            </Card>

            <Flex gap="1" direction="row" justify="center">
              <Badge color="red">Badge 1</Badge>
              <Badge color="mint">Badge 2</Badge>
              <Badge color="indigo">Badge 3</Badge>
              <Badge color="bronze">Badge 4</Badge>
              <Badge color="crimson">Badge 5</Badge>
            </Flex>
              
            <Flex align="center" direction="column" gap="1">
              <Text color="iris" weight="regular">It's</Text>
              <Text color="iris" weight="regular" className="overline"> Component Time</Text>
            </Flex>
              <AccordionDemo />
              <FormDemo />
              <SliderDemo />
          </Flex>

        </Container>
    </main>
  );
}
