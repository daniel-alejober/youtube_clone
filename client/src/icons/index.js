import IconHome from "./IconHome";
import IconExplore from "./IconExplore";
import IconYoutubeSubscription from "./IconYoutubeSubscription";
import IconLibrary from "./IconLibrary";
import IconHistory from "./IconHistory";
import IconMusic from "./IconMusic";
import IconSports from "./IconSports";
import IconGaming from "./IconGaming";
import IconMovies from "./IconMovies";
import IconNewspaper from "./IconNewspaper";
import IconLive from "./IconLive";
import IconSettings from "./IconSettings";
import IconBxHelpCircle from "./IconBxHelpCircle";
import IconDarkMode from "./IconDarkMode";
import IconFlag from "./IconFlag";
import IconShare from "./IconShare";
import IconSave from "./IconSave";

const blockOneUser = [
  { description: "Home", icon: IconHome, route: "/" },
  { description: "Explore", icon: IconExplore, route: "/trends" },
  {
    description: "Subscriptions",
    icon: IconYoutubeSubscription,
    route: "/subscriptions",
  },
];
const blockOne = [
  { description: "Home", icon: IconHome, route: "/" },
  { description: "Explore", icon: IconExplore, route: "/trends" },
];

const blockTwo = [
  { description: "Library", icon: IconLibrary },
  { description: "History", icon: IconHistory },
];

const blockThree = [
  { description: "Music", icon: IconMusic },
  { description: "Sports", icon: IconSports },
  { description: "Gaming", icon: IconGaming },
  { description: "Movies", icon: IconMovies },
  { description: "News", icon: IconNewspaper },
  { description: "Live", icon: IconLive },
];

const blockFour = [
  { description: "Settings", icon: IconSettings },
  { description: "Report", icon: IconFlag },
  { description: "Help", icon: IconBxHelpCircle },
  { description: "Change Mode", icon: IconDarkMode },
];

const blockVideo = [
  { description: "Share", icon: IconShare },
  { description: "Save", icon: IconSave },
];

export { blockOne, blockTwo, blockThree, blockFour, blockVideo, blockOneUser };
