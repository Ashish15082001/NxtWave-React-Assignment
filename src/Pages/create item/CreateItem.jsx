import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/button/Button";
import { BackIcon } from "../../icons/BackIcon";
import {
  BackNavigationContainer,
  CreateItemForm,
  CreateItemFormInput,
  CreateItemFormLabel,
  CreateItemFormTextArea,
  CreateItemFormTitle,
  LeftContainer,
  MainContainer,
  RightContainer,
} from "./styledComponents";

export function CreateItem() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.from);

  function showError(message) {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
        <CreateItemForm>
          <CreateItemFormTitle>Item Details</CreateItemFormTitle>
          <CreateItemFormLabel>ITEM NAME</CreateItemFormLabel>
          <CreateItemFormInput></CreateItemFormInput>
          <CreateItemFormLabel>LINK</CreateItemFormLabel>
          <CreateItemFormInput></CreateItemFormInput>
          <CreateItemFormLabel>RESOURCE NAME</CreateItemFormLabel>
          <CreateItemFormInput></CreateItemFormInput>
          <CreateItemFormLabel>DESCRIPTION</CreateItemFormLabel>
          <CreateItemFormTextArea></CreateItemFormTextArea>
          <Button
            type="primary"
            text="CREATE"
            onClick={() => {}}
            disabled={false}
          />
        </CreateItemForm>
      </LeftContainer>
      <RightContainer imgUrl={"../../images/image9.png"}></RightContainer>
    </MainContainer>
  );
}
