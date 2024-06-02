import { Flex, Image, SearchField } from "@aws-amplify/ui-react";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { AiOutlineFile } from "react-icons/ai";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";
import { Auth } from "aws-amplify";
import Star from "../assets/star.png";
import { Avatar } from "antd";
import Models from "./Models";

const Dashboard = () => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      alert("Successfully signed out");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Flex
        direction="row"
        maxWidth="100%"
        width="100%"
        height="100vh"
        justifyContent="space-between"
      >
        <Flex
          direction="column"
          padding="1rem 0rem"
          width="25%"
          className="border"
        >
          <div className="text-center">
            <Image src={Star} alt="Logo Here..." width="125px" />
          </div>
          <div className="p-3">
            <SearchField label="Search" placeholder="Search" />
          </div>
          <Flex direction="row" padding="0rem 2rem">
            <AiOutlineHome size={24} /> Home
          </Flex>
          <Flex direction="row" padding="0rem 2rem">
            <GoDatabase size={24} /> Models
          </Flex>
          <Flex direction="row" padding="0rem 2rem">
            <AiOutlineFile size={24} /> Files
          </Flex>
          <Flex direction="row" padding="0rem 2rem">
            <FiMessageSquare size={24} /> Co-Pilot
          </Flex>
          <Flex direction="column" className="fixed-bottom mb-3">
            <div className="parent-container">
              <Flex
                direction="row"
                padding="0rem 2rem"
                className="sidebar___lower"
              >
                <AiOutlineSetting size={24} /> Account
              </Flex>
            </div>
            <div className="parent-container">
              <Flex
                direction="row"
                padding="0rem 2rem"
                className="sidebar___lower"
              >
                <Avatar
                  style={{
                    backgroundColor: "#fde3cf",
                    color: "#f56a00",
                  }}
                >
                  U
                </Avatar>
                <Flex direction="column">
                  Olivia
                  <br />
                  <small>olivia@gmail.com</small>
                </Flex>
                <FiLogOut onClick={handleSignOut} size={24} />
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex direction="column" width="75%">
          <Models />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
