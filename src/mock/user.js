import Mock from 'mockjs';
export const UserData = Mock.mock('/api/user', 'get', {
    code: 200,
    data: {
        username: '@name',
        password: '@email',
    },
});

export const UserInfo = Mock.mock('/api/user/info', 'get', {
    code: 200,
    data: {
        token: 'a1b2c3d4e5f6g7',
    },
});
