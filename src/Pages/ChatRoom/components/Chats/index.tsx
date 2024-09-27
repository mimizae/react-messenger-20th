import { forwardRef } from 'react';
import UserInfo from '../UserInfo';
import { Chat, MyMessage, OtherMessage, OtherMessageContainer } from './style';

interface ChatProps {
  id?: string;
  messages: string[];
  getProfileImage: (index: number) => JSX.Element | null;
}

const Chats = forwardRef<HTMLDivElement, ChatProps>(({ id, messages, getProfileImage }, ref) => {
  return (
    <Chat ref={ref}>
      <UserInfo id={id} />
      {messages.map((msg, index) => {
        const isMyMessage = msg.startsWith('나:');
        const isFirstMessage = index === 0 || messages[index - 1]?.startsWith('상대방:');
        
        // 상대방 메시지의 마지막 메시지에서만 프로필 이미지 표시
        const isLastOtherMessage = !isMyMessage && 
          (index === messages.length - 1 || messages[index + 1]?.startsWith('나:'));

        // 상대방의 이름 설정
        const responseName = id === "1" ? "세오스" : id === "2" ? "진나경" : "상대방";

        return isMyMessage ? (
          <MyMessage key={index} $isFirstMessage={isFirstMessage}>
            {msg.replace('나: ', '')}
          </MyMessage>
        ) : (
          <OtherMessageContainer key={index} $hasProfileImg={isLastOtherMessage}>
            {/* 프로필 이미지를 마지막 메시지에만 표시하도록 조건 처리 */}
            {getProfileImage(isLastOtherMessage ? index : index - 1)} 
            <OtherMessage $isFirstMessage={isFirstMessage}>
              <span style={{ fontSize: '12px' }}>{responseName}</span>
                {msg.replace('상대방: ', '')}
            </OtherMessage>
          </OtherMessageContainer>
        );
      })}
    </Chat>
  );
});

export default Chats;



