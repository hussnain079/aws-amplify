import {
  Flex,
  Heading,
  View,
  Button,
  Card,
  Badge,
  Text,
} from "@aws-amplify/ui-react";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FcImageFile } from "react-icons/fc";

const Models = () => {
  return (
    <>
      <Flex direction="column">
        <Heading level={3} className="pt-2">
          Home
        </Heading>
        <Flex direction="column" gap="1rem">
          <View>
            <Button gap="0.1rem">30 Days</Button>
            <Button gap="0.2rem">7 Days</Button>
            <Button gap="0.2rem">24 Hours</Button>
          </View>
        </Flex>
        <Flex direction="row" gap="2rem">
          <View>
            <Card className="model__card">
              <Flex direction="row" justifyContent="space-between">
                <Heading>Total Models</Heading>
                <div>
                  <CiMenuKebab size={24} />
                </div>
              </Flex>
              <Flex direction="row" justifyContent="space-between">
                <Heading className="pt-3">4</Heading>
                <Badge className="mt-3">
                  <AiOutlineArrowUp />
                  10%
                </Badge>
              </Flex>
            </Card>
          </View>
          <View>
            <Card className="model__card">
              <Flex direction="row" justifyContent="space-between">
                <Heading>Total Models</Heading>
                <div>
                  <CiMenuKebab size={24} />
                </div>
              </Flex>
              <Flex direction="row" justifyContent="space-between">
                <Heading className="pt-3">4</Heading>
                <Badge className="mt-3">
                  <AiOutlineArrowUp />
                  10%
                </Badge>
              </Flex>
            </Card>
          </View>
          <View>
            <Card className="model__card">
              <Flex direction="row" justifyContent="space-between">
                <Heading>Total Models</Heading>
                <div>
                  <CiMenuKebab size={24} />
                </div>
              </Flex>
              <Flex direction="row" justifyContent="space-between">
                <Heading className="pt-3">4</Heading>
                <Badge className="mt-3">
                  <AiOutlineArrowUp />
                  10%
                </Badge>
              </Flex>
            </Card>
          </View>
        </Flex>
        <Heading level={3} className="pt-1">
          Models (4)
        </Heading>
        <Text className="pt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          fuga.
        </Text>
        <Text color="blue" className="ms-auto">
          View All
        </Text>
        <Flex direction="row" gap="2rem">
          <View>
            <Card className="model__card">
              <Flex direction="row" justifyContent="space-between">
                <FcImageFile size={26} />
                <div>
                  <CiMenuKebab size={24} />
                </div>
              </Flex>
              <Badge className="mt-3">
                <AiOutlineArrowUp />
                10%
              </Badge>
              <Heading className="pt-3">Model Testing 03</Heading>
              <Text className="mt-2">Created: May 17, 2024 11:18 PM</Text>
              <Button isFullWidth={true} className="mt-2">
                Open
              </Button>
            </Card>
          </View>
          <View>
            <Card className="model__card">
              <Flex direction="row" justifyContent="space-between">
                <FcImageFile size={26} />
                <div>
                  <CiMenuKebab size={24} />
                </div>
              </Flex>
              <Badge className="mt-3">
                <AiOutlineArrowUp />
                10%
              </Badge>
              <Heading className="pt-3">Model Testing 03</Heading>
              <Text className="mt-2">Created: May 17, 2024 11:18 PM</Text>
              <Button isFullWidth={true} className="mt-2">
                Open
              </Button>
            </Card>
          </View>
          <View>
            <Card className="model__card">
              <Flex direction="row" justifyContent="space-between">
                <FcImageFile size={26} />
                <div>
                  <CiMenuKebab size={24} />
                </div>
              </Flex>
              <Badge className="mt-3">
                <AiOutlineArrowUp />
                10%
              </Badge>
              <Heading className="pt-3">Model Testing 03</Heading>
              <Text className="mt-2">Created: May 17, 2024 11:18 PM</Text>
              <Button isFullWidth={true} className="mt-2">
                Only 3 Hours Left
              </Button>
            </Card>
          </View>
        </Flex>
      </Flex>
    </>
  );
};

export default Models;
