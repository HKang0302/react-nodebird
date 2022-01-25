import React from 'react';
import AppLayout from './components/AppLayout';
import Head from 'next/head';

import NicknameEditForm from './components/NicknameEditForm';
import FollowList from './components/FollowList';

const Profile = () => {

    const followerList = [{ nickname: '제로초' }, { nickname: '희진' }, { nickname: '도윤' }];
    const followingList = [{ nickname: '제로초1' }, { nickname: '희진1' }, { nickname: '도윤1' }];

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>내프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉목록" data={followingList}/>
                <FollowList header="팔로워목록" data={followerList}/>
            </AppLayout>
        </>
    )
};

export default Profile;