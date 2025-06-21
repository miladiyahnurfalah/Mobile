import {create} from "zustand";

interface ProfileType {
    name: string;
    image: string;
}

const useProfileStore = create<ProfileType>((set) => ({
    name: "Spongebob",
    image: 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghrLJDO5BqLiu0mV1toSLCfhztIChHHQiqg&s"
}));

export default useProfileStore;