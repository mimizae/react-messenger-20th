import { forwardRef, useEffect, useState } from 'react';
import UserInfo from '../UserInfo';
import { Chat, MyMessage, OtherMessage, OtherMessageContainer, MessageTime, EmojiPicker } from './style';

interface ChatProps {
  currentUserId: number; // 현재 사용자 ID
  messages: { userId: number; content: string; time: string; emoji?: string; }[]; // 메시지 배열
  getProfileImage: (index: number) => JSX.Element | null; // 프로필 이미지 가져오는 함수
}

// 날짜에서 요일을 가져오는 함수
const getDayLabel = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const day = date.toLocaleDateString('ko-KR', options);
  return `(${day.charAt(0)})`; // 요일의 첫 글자 반환
};

// 사용 가능한 이모지 목록
const emojiList = ['👍🏻', '🩷', '😍', '😄', '😯', '😢', '😡'];

// Chats 컴포넌트 정의
const Chats = forwardRef<HTMLDivElement, ChatProps>(({ currentUserId, messages, getProfileImage }, ref) => {
  const [selectedEmoji, setSelectedEmoji] = useState<{ [key: number]: string }>({}); // 선택된 이모지 상태
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState<{ [key: number]: boolean }>({}); // 이모지 피커의 가시성 상태

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 이모지 가져오기
  useEffect(() => {
    const storedEmojis = localStorage.getItem('selectedEmojis');
    if (storedEmojis) {
      setSelectedEmoji(JSON.parse(storedEmojis)); // 저장된 이모지 상태 업데이트
    }
  }, []);

  // 선택된 이모지가 변경될 때 로컬 스토리지 업데이트
  useEffect(() => {
    if (Object.keys(selectedEmoji).length > 0) {
      localStorage.setItem('selectedEmojis', JSON.stringify(selectedEmoji)); // 로컬 스토리지에 저장
    }
  }, [selectedEmoji]);

  // 이모지 클릭 핸들러
  const handleEmojiClick = (index: number, emoji: string) => {
    setSelectedEmoji((prev) => ({ ...prev, [index]: emoji })); // 선택된 이모지 상태 업데이트
    setVisibleEmojiPicker((prev) => ({ ...prev, [index]: false })); // 이모지 피커 숨기기
  };

  // 이모지 피커 토글 핸들러
  const toggleEmojiPicker = (index: number) => {
    setVisibleEmojiPicker((prev) => ({ ...prev, [index]: !prev[index] })); // 해당 인덱스의 이모지 피커 가시성 전환
  };

  // 이모지를 제거하는 함수
  const handleEmojiDoubleClick = (index: number) => {
    setSelectedEmoji((prev) => {
      const newSelectedEmoji = { ...prev };
      if (newSelectedEmoji[index]) { // 해당 인덱스의 이모지가 존재하는 경우
        delete newSelectedEmoji[index]; // 이모지 제거
      }
      // 로컬 스토리지 업데이트
      localStorage.setItem('selectedEmojis', JSON.stringify(newSelectedEmoji));
      return newSelectedEmoji; // 새로운 상태 반환
    });
  };

  // 이모지를 메시지 내용에 추가하는 함수
  const updateMessageWithEmoji = (index: number, content: string, emoji?: string) => {
    if (emoji) {
      return `${content} ${emoji}`; // 이모지를 추가
    }
    return content; // 이모지가 없으면 원래 내용 반환
  };

  // 메시지를 더블 클릭할 때 이모지를 제거하는 이벤트 핸들러
  const handleMessageDoubleClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이벤트 전파를 막아 다른 클릭 이벤트가 실행되지 않게 함
    handleEmojiDoubleClick(index);
  };

  // 메시지를 클릭할 때 이모지 피커를 토글하는 핸들러
  const handleMessageClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    event.preventDefault(); // 기본 클릭 동작 방지
    toggleEmojiPicker(index); // 이모지 피커 토글
  };

  return (
    <Chat ref={ref}>
      <UserInfo id={currentUserId} /> {/* 현재 사용자 정보 표시 */}
      {messages.map((msg, index) => {
        const isMyMessage = msg.userId === currentUserId; // 메시지가 현재 사용자의 것인지 확인

        const currentTime = new Date(msg.time); // 현재 메시지의 시간
        const previousTime = index > 0 ? new Date(messages[index - 1].time) : null; // 이전 메시지의 시간

        // 메시지의 시간 표시 여부 결정
        const shouldShowTime = index === 0 ||
          (previousTime && currentTime.toLocaleDateString() !== previousTime.toLocaleDateString()) ||
          (previousTime && (currentTime.getTime() - previousTime.getTime() > 1800000)) ||
          (previousTime && (msg.userId === messages[index - 1].userId &&
          currentTime.getTime() - previousTime.getTime() > 10 * 1000));

        // 메시지가 그룹의 첫 번째 메시지인지 확인
        const isFirstMessage = shouldShowTime || index === 0 || messages[index - 1]?.userId !== msg.userId;

        const isLastBeforeTimeMessage = shouldShowTime && index > 0 && messages[index - 1]?.userId === msg.userId;

        const isLastOtherMessage =
          !isMyMessage &&
          (isLastBeforeTimeMessage || index === messages.length - 1 || messages[index + 1]?.userId === currentUserId);

        const isGroupEnd = isLastBeforeTimeMessage || index === messages.length - 1 || messages[index + 1]?.userId !== msg.userId;

        const isMiddleMessage = !isFirstMessage && !isGroupEnd; // 중간 메시지인지 확인

        const emoji = selectedEmoji[index]; // 현재 메시지의 이모지 가져오기

        return (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: isMyMessage ? 'flex-end' : 'flex-start' }}>
            {shouldShowTime && (
              <MessageTime>
                {`${getDayLabel(currentTime)} ${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`} {/* 메시지 시간 표시 */}
              </MessageTime>
            )}
            <div onClick={(event) => handleMessageClick(event, index)} style={{ cursor: 'pointer' }}>
              {isMyMessage ? ( // 내 메시지일 경우
                <MyMessage
                  $isFirstMessage={isFirstMessage}
                  $isGroupEnd={isGroupEnd}
                  $isMiddleMessage={isMiddleMessage}
                  onDoubleClick={(event) => handleMessageDoubleClick(index, event)} // 더블 클릭 시 이모지 제거
                >
                  {updateMessageWithEmoji(index, msg.content, emoji)} {/* 이모지를 포함한 메시지 내용 */}
                </MyMessage>
              ) : ( // 다른 사용자의 메시지일 경우
                <OtherMessageContainer
                  $hasProfileImg={isLastOtherMessage}
                  $isGroupEnd={isGroupEnd}
                >
                  {getProfileImage(isLastOtherMessage ? index : index - 1)} {/* 프로필 이미지 표시 */}
                  <OtherMessage
                    $isFirstMessage={isFirstMessage}
                    $isMiddleMessage={isMiddleMessage}
                    $isGroupEnd={isGroupEnd}
                    onDoubleClick={(event) => handleMessageDoubleClick(index, event)} // 더블 클릭 시 이모지 제거
                  >
                    {updateMessageWithEmoji(index, msg.content, emoji)} {/* 이모지를 포함한 메시지 내용 */}
                  </OtherMessage>
                </OtherMessageContainer>
              )}
            </div>
            {visibleEmojiPicker[index] && ( // 이모지 피커가 보이는 경우
              <EmojiPicker>
                {emojiList.map((emoji, emojiIndex) => (
                  <span key={emojiIndex} onClick={() => handleEmojiClick(index, emoji)}> {/* 이모지 클릭 시 추가 */}
                    {emoji}
                  </span>
                ))}
              </EmojiPicker>
            )}
          </div>
        );
      })}
    </Chat>
  );
});

export default Chats;

