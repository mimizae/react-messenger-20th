import { atom } from 'recoil';

interface User {
    id: number;
    name: string;
    profileImage: string;
}

interface ChatMessage {
  userId: number;
  content: string;
  time: string;
}

export const chatDataState = atom<{ [key: string]: { messages: ChatMessage[]; users: User[] } }>({
  key: 'chatDataState',
  default: {}, // 초기값은 빈 객체
});

export const userDataState = atom<User[]>({
  key: 'userDataState',
  default: [], // 사용자 데이터를 저장할 기본값
});