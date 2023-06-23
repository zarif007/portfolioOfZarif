import { FileInterface } from "@/interfaces/FileInterface";
import { TabInterface } from "@/interfaces/TabInterface";

const addToOpenTabList = (file: FileInterface, openTabs: TabInterface[]) => {
  const flag = openTabs.find((x) => x.url === file.url);

  return !flag ? [...openTabs, file] : openTabs;
};

export default addToOpenTabList;
