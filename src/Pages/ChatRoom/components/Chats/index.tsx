import { forwardRef } from 'react';
import UserInfo from '../UserInfo';
import { Chat, MyMessage, OtherMessage, OtherMessageContainer, MessageTime } from './style';

interface ChatProps {
  currentUserId: number;
  messages: { userId: number; content: string; time: string }[]; // time을 string으로 변경
  getProfileImage: (index: number) => JSX.Element | null;
}

// 요일을 괄호 형식으로 반환하는 함수
const getDayLabel = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' }; // weekday 속성의 타입을 지정
  const day = date.toLocaleDateString('ko-KR', options); // 한국어로 요일 가져오기
  return `(${day.charAt(0)})`; // 첫 글자만 괄호로 감싸기
};

const Chats = forwardRef<HTMLDivElement, ChatProps>(({ currentUserId, messages, getProfileImage }, ref) => {
  return (
    <Chat ref={ref}> {/* ref 전달 */}
      <UserInfo id={currentUserId} />
      {messages.map((msg, index) => {
        const isMyMessage = msg.userId === currentUserId; // userId에 따라 나의 메시지 확인

        const isFirstMessage = index === 0 || messages[index - 1]?.userId !== msg.userId;
        const isLastOtherMessage = !isMyMessage && 
          (index === messages.length - 1 || messages[index + 1]?.userId === currentUserId);
        const isGroupEnd = index === messages.length - 1 || messages[index + 1]?.userId !== msg.userId;

        // 중간 메시지 판단
        const isMiddleMessage = !isFirstMessage && !isGroupEnd;

        // 시간 표시 로직
        const currentTime = new Date(msg.time);
        const previousTime = index > 0 ? new Date(messages[index - 1].time) : null;
        
        const shouldShowTime = index === 0 ||
          (previousTime && currentTime.toLocaleDateString() !== previousTime.toLocaleDateString()) || // 날짜가 다를 경우
          (previousTime && (currentTime.getTime() - previousTime.getTime() > 1800000)) || // 30분 이상 간격일 경우
          (previousTime && (msg.userId === messages[index - 1].userId && 
          currentTime.getTime() - previousTime.getTime() > 10 * 1000)); // 10초 이상 차이

        return (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: isMyMessage ? 'flex-end' : 'flex-start'}}>
            {shouldShowTime && (
              <MessageTime>
                {`${getDayLabel(currentTime)} ${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`} {/* 요일과 시간 표시 */}
              </MessageTime>
            )}
            {isMyMessage ? (
              <MyMessage 
                $isFirstMessage={isFirstMessage}
                $isGroupEnd={isGroupEnd}
                $isMiddleMessage={isMiddleMessage}
              >
                {msg.content} {/* 나의 메시지 내용 표시 */}
              </MyMessage>
            ) : (
              <OtherMessageContainer 
                $hasProfileImg={isLastOtherMessage} 
                $isGroupEnd={isGroupEnd}
              >
                {getProfileImage(isLastOtherMessage ? index : index - 1)} 
                <OtherMessage 
                  $isFirstMessage={isFirstMessage} 
                  $isMiddleMessage={isMiddleMessage}
                  $isGroupEnd={isGroupEnd}
                >
                  {msg.content} {/* 상대방의 메시지 내용 표시 */}
                </OtherMessage>
              </OtherMessageContainer>
            )}
          </div>
        );
      })}
    </Chat>
  );
});

export default Chats;







