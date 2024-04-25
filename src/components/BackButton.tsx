import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="primary"
      style={{ width: "10%", height: 35, marginRight: "5%" }}
      onClick={() => navigate(to)}
    >
      Back
    </Button>
  );
};
