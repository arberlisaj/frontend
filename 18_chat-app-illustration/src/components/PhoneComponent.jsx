import { CiMenuKebab } from "react-icons/ci";
import { MdArrowBackIos } from "react-icons/md";
import avatarImage from "../images/avatar.jpg";
import "./PhoneComponent.css";
import Message from "./Message";
import firstDogImage from "../images/dog-image-1.jpg";
import secondDogImage from "../images/dog-image-2.jpg";
import thirdDogImage from "../images/dog-image-3.jpg";
import Payment from "./Payment";
import Input from "./Input";

function PhoneComponent() {
  return (
    <div className="frame">
      <div className="notch"></div>
      <header>
        <button>
          <MdArrowBackIos size="20px" />
        </button>
        <img className="profilePicture" src={avatarImage} alt="profile" />
        <h1>
          Samuel Green <span>Available to Walk</span>
        </h1>
        <button className="menuBtn">
          <CiMenuKebab size="20px" />
        </button>
      </header>

      <div className="messagesContainer">
        <Message
          message="That sounds great. I'd be happy with that."
          isMyMessage={false}
        />
        <Message
          message="Could you send over some pictures of your dog, please?"
          isMyMessage={false}
        />
        <div className="dogs">
          {[firstDogImage, secondDogImage, thirdDogImage].map((image, idx) => (
            <img src={image} key={idx} alt="dog" />
          ))}
        </div>
        <Message
          message="Here are a few pictures. She's a happy girl!"
          isMyMessage={true}
        />
        <Message message="Can you make it!" isMyMessage={true} />
        <Message
          message="She looks so happy! The time we discussed workes! How long shall I take her out for?"
          isMyMessage={false}
        />
        <Payment name="dog" label="30 minute walk." price="$29" />
        <Payment name="dog" label="1 hour walk." price="$49" />
        <Input />
      </div>
    </div>
  );
}

export default PhoneComponent;
