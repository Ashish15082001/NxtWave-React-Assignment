import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createItem } from "../../api/createItem";
import { Form } from "../../components/form/Form";
import { BackIcon } from "../../icons/BackIcon";
import {
  BackNavigationContainer,
  LeftContainer,
  MainContainer,
  RightContainer,
} from "./styledComponents";

export function CreateItem() {
  const navigate = useNavigate();
  // const location = useLocation();
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [description, setDescription] = useState("");
  const [isCreatingItem, setIsCreatingItem] = useState(false);

  const formStructures = [
    {
      label: "ITEM NAME",
      inputType: "text",
      type: "input",
      value: itemName,
      onChange: (event) => {
        setItemName(event.target.value.trimStart());
      },
    },
    {
      label: "LINK",
      inputType: "text",
      type: "input",
      value: link,
      onChange: (event) => {
        setLink(event.target.value.trimStart());
      },
    },
    {
      label: "RESOURCE NAME",
      inputType: "text",
      type: "input",
      value: resourceName,
      onChange: (event) => {
        setResourceName(event.target.value.trimStart());
      },
    },
    {
      label: "DESCRIPTION",
      inputType: "text",
      type: "textArea",
      value: description,
      onChange: (event) => {
        setDescription(event.target.value.trimStart());
      },
    },
  ];
  const formButton = {
    type: "primary",
    text: "CREATE",
    onClick: onSubmit,
    disabled: false,
  };

  async function onSubmit(event) {
    try {
      setIsCreatingItem(true);
      event.preventDefault();
      if (
        itemName === "" ||
        link === "" ||
        resourceName === "" ||
        description === ""
      )
        return showError("All fields are compulsary.");

      const response = await createItem();

      setItemName("");
      setLink("");
      setResourceName("");
      setDescription("");
      showSuccess(response.message);
    } catch (error) {
      showError(error.message);
    } finally {
      setIsCreatingItem(false);
    }
  }

  function showSuccess(message) {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function showError(message) {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <MainContainer>
      <LeftContainer>
        <ToastContainer />
        <BackNavigationContainer>
          <span onClick={() => navigate("/home")}>
            <BackIcon />
          </span>
          <p>Resources</p>
        </BackNavigationContainer>
        <Form formStructures={formStructures} formButton={formButton} />
      </LeftContainer>
      <RightContainer imgUrl={"../../images/image9.png"}></RightContainer>
    </MainContainer>
  );
}
