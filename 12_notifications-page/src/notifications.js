import angelaProfilePic from "./images/angela.webp";
import annaProfilePic from "./images/anna.webp";
import jacobProiflePic from "./images/jacob.webp";
import kimberlyProiflePic from "./images/kimberly.webp";
import markProfilePic from "./images/mark.webp";
import petersonProfilePic from "./images/peterson.webp";
import rizkyProfilePic from "./images/rizky.webp";

export const notifications = [
  {
    id: 0,
    image: markProfilePic,
    actionTime: "1m ago",
    username: "Mark Webber",
    action: "reacted to your recent post",
    platform: "My first tournament today!",
    isNotificationNew: true,
  },
  {
    id: 1,
    image: angelaProfilePic,
    actionTime: "5m ago",
    username: "Angela Gray",
    action: "followed you",
    platform: "",
    isNotificationNew: true,
  },
  {
    id: 2,
    image: jacobProiflePic,
    actionTime: "1 day ago",
    username: "Jacob Thompson",
    action: "has joined your group",
    platform: "Chess Club",
    isNotificationNew: true,
  },
  {
    id: 3,
    image: rizkyProfilePic,
    actionTime: "5 days ago",
    username: "Rizky Hasanuddin",
    action: "sent you a private message",
    platform: "",
    isNotificationNew: false,
  },
  {
    id: 4,
    image: kimberlyProiflePic,
    actionTime: "1 week ago",
    username: "Kimberly Smith",
    action: "commented on your picture",
    platform: "",
    isNotificationNew: false,
  },
  {
    id: 5,
    image: petersonProfilePic,
    actionTime: "2 weeks ago",
    username: "Nathan Peterson",
    action: "reacted to your recent post",
    platform: "5 end-game strategies to increase your win rate",
    isNotificationNew: false,
  },
  {
    id: 6,
    image: annaProfilePic,
    actionTime: "2 weeks ago",
    username: "Anna Kim",
    action: "left the group",
    platform: "Chess Club",
    isNotificationNew: false,
  },
];
