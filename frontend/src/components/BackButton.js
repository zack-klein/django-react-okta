import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function BackButton() {
  return <Button as={Link} to="/" content="Back" />;
}
