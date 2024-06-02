import { useState } from "react";
import {
  Button,
  Flex,
  Text,
  Input,
  Label,
  CheckboxField,
  Link,
  Image,
} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import Section from "../assets/Section.png";
import Star from "../assets/star.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Amplify.signIn(username, password);
      setError("");
      alert("Successfully signed in");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Flex
        direction="row"
        maxWidth="100%"
        width="100%"
        justifyContent="space-between"
      >
        <Flex
          direction="column"
          width={{ base: "100%", large: "100%" }}
          padding={{ base: "0rem 1rem", large: "4rem 2rem" }}
          className="singUp__page"
        >
          <div className="text-center">
            <Image src={Star} alt="Logo Here..." width="125px" />
          </div>
          <Text className="text-center">
            <b>Welcome back</b>
          </Text>
          <Text className="text-center">
            Welcome back! Please enter your details
          </Text>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" width="75%" gap="small" alignSelf="center">
              <Label htmlFor="email">
                <b>Email</b>
              </Label>
              <Input
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="email"
                placeholder="olivia@acme.com"
              />
            </Flex>
            <Flex direction="column" width="75%" gap="small" alignSelf="center">
              <Label htmlFor="password">
                <b>Password</b>
              </Label>
              <Input
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="Password"
                placeholder="********"
              />
            </Flex>
            <Flex
              direction="row"
              width="75%"
              justifyContent="space-between"
              alignSelf="center"
            >
              <CheckboxField
                label="Remember me"
                name="Remember me"
                value="yes"
              />
              <Link href="/" color="blue">
                Forget Password
              </Link>
            </Flex>
            <Flex direction="column" width="75%" gap="small" alignSelf="center">
              <Link href="/dashboard" className="text-center" color="#fff">
                <Button
                  type="submit"
                  variation="primary"
                  colorTheme="info"
                  className="w-100"
                >
                  Sign In
                </Button>
              </Link>
            </Flex>
            <Flex direction="column" width="75%" className="text-center">
              {error && <p>{error}</p>}
            </Flex>
          </form>
          <Flex direction="column" width="100%" className="text-center">
            <Text>
              Dont have any account?
              <Link href="/" color="blue">
                &nbsp; Request Access
              </Link>
            </Text>
          </Flex>
        </Flex>
        <Flex
          display={{ base: "none", large: "flex" }}
          className="Section__Image"
        >
          <Image
            src={Section}
            alt="Glittering stream with old log, snowy mountain peaks
          tower over a green field."
            // Add this style to ensure the image fits the container width
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
