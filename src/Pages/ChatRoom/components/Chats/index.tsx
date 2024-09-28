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
    <Chat ref={ref}> {/* ref 전달 */}
      <UserInfo id={id} />
      {messages.map((msg, index) => {
        const isMyMessage = msg.startsWith('나:');
        
        const isFirstMessage = index === 0 || messages[index - 1]?.startsWith(isMyMessage ? '상대방:' : '나:');
        const isLastOtherMessage = !isMyMessage && 
          (index === messages.length - 1 || messages[index + 1]?.startsWith('나:'));
        const isGroupEnd = index === messages.length - 1 || messages[index + 1]?.startsWith(isMyMessage ? '상대방:' : '나:');
        
        // 중간 메시지 판단
        const isMiddleMessage = !isFirstMessage && !isGroupEnd;

        return isMyMessage ? (
          <MyMessage 
            key={index}
            $isFirstMessage={isFirstMessage}
            $isGroupEnd={isGroupEnd}
            $isMiddleMessage={isMiddleMessage}
          >
            {msg.replace('나: ', '')}
          </MyMessage>
        ) : (
          <OtherMessageContainer 
            key={index} 
            $hasProfileImg={isLastOtherMessage} 
            $isGroupEnd={isGroupEnd}
          >
            {getProfileImage(isLastOtherMessage ? index : index - 1)} 
            <OtherMessage 
              $isFirstMessage={isFirstMessage} 
              $isMiddleMessage={isMiddleMessage}
              $isGroupEnd={isGroupEnd}
            >
              {msg.replace('상대방: ', '')}
            </OtherMessage>
          </OtherMessageContainer>
        );
      })}
    </Chat>
  );
});

export default Chats;





