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

// 로컬 스토리지에서 데이터 불러오기 유틸 함수
const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
};

// 사용자 데이터 상태
export const userDataState = atom<User[]>({
    key: 'userDataState',
    default: loadFromLocalStorage<User[]>('userData', []), // 로컬 스토리지에서 초기 데이터 불러오기
    effects: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('userData', JSON.stringify(newValue)); // 상태가 변경될 때 로컬 스토리지에 저장
            });
        },
    ],
});

// 채팅 데이터 상태
export const chatDataState = atom<{ [key: string]: { messages: ChatMessage[]; users: User[] } }>({
    key: 'chatDataState',
    default: loadFromLocalStorage<{ [key: string]: { messages: ChatMessage[]; users: User[] } }>('chatData', {}), // 로컬 스토리지에서 초기 데이터 불러오기
    effects: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('chatData', JSON.stringify(newValue)); // 상태가 변경될 때 로컬 스토리지에 저장
            });
        },
    ],
});

// 현재 사용자 ID 상태
export const currentUserIdState = atom<number>({
    key: 'currentUserIdState',
    default: loadFromLocalStorage<number>('currentUserId', 0), // 로컬 스토리지에서 초기값 불러오기
    effects: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('currentUserId', JSON.stringify(newValue)); // 변경된 ID 로컬 스토리지에 저장
            });
        },
    ],
});

// 상대 사용자 ID 상태
export const opponentUserIdState = atom<number>({
    key: 'opponentUserIdState',
    default: loadFromLocalStorage<number>('opponentUserId', 0), // 로컬 스토리지에서 초기값 불러오기
    effects: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('opponentUserId', JSON.stringify(newValue)); // 변경된 ID 로컬 스토리지에 저장
            });
        },
    ],
});
