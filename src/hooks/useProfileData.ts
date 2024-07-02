import { useState } from 'react';

type ProfileData = {
    username: string;
    addharNumber: string;
    purchaseDate: string;
    passValidFrom: string;
    passValidTill: string;
    passId: string;
    photo: string | null;
};

const useProfileData = () => {
    const getProfileData = (): ProfileData | null => {
        const data = localStorage.getItem('profileData');
        return data ? JSON.parse(data) : null;
    };

    const saveProfileData = (data: ProfileData) => {
        localStorage.setItem('profileData', JSON.stringify(data));
    };

    const [profileData, setProfileData] = useState<ProfileData | null>(getProfileData);

    const updateProfileData = (data: ProfileData) => {
        setProfileData(data);
        saveProfileData(data);
    };

    return { profileData, updateProfileData };
};

export default useProfileData;
