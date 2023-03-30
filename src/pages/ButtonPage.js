//Button page, parent element of the Button component

import Button from "../components/Button";
import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>Save</Button>
      </div>
      <div>
        <Button danger rounded>
          <GoCloudDownload />
          Add to Cart
        </Button>
      </div>
      <div>
        <Button success>Pay Now</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
