import React from "react";
import { Button } from "primereact/button";
import { FaComments } from "react-icons/fa";

const ChatBox = () => {
  return (
    <>
      <div>
        <Button className="p-button-rounded">
          <FaComments />
        </Button>
      </div>
    </>
  );
};

export default ChatBox;
