import { folderStructure } from './../folder-structure';
import { FileInterface } from './../interfaces/FileInterface';


let res: (FileInterface | null) = null

const search = (value: FileInterface, url: string) => {
    if(value.url === url) {
        res = value;
        return;
    }

    value?.children?.length && value.children.map((v: FileInterface) => {
        search(v, url);
    })
}
const searchOnFolderStructure = (url: string) => {
    search(folderStructure, url);
    return res;
}

export default searchOnFolderStructure;