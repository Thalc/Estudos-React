import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    name: 'Thiago Alcarás',
    username: 'thiagoalcaras',
    email: 'thiago@thiago.com.br',
    avatar: '/images/avatars/avatar_1.jpg',
  },
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'thiago@thiago.com.br' || password !== 'admin') {
    return [400, { message: 'Seu e-mail ou senha estão incorretos' }];
  }

  const user = {
    id: 1,
    name: 'Thiago Alcarás',
    username: 'thiagoalcaras',
    email: 'thiago@thiago.com.br',
    avatar: '/images/avatars/avatar_1.jpg',
  };

  return [200, { user }];
});

mock.onGet('/api/home/user/thiagoalcaras').reply(200, {
  id: 1,
  name: 'Thiago Alcaras',
  username: 'thiagoalcaras',
  email: 'thiago@conectadev.com',
  accessToken: 'dadadadadadadad',
  avatar: '/images/avatars/avatar_1.jpg',
  joinedIn: '06 de janeiro, 2020',
  work: 'Arquiteto de Software',
  totalPost: '388',
});
