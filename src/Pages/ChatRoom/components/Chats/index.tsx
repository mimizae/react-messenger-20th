import { forwardRef, useEffect, useState } from 'react';
import UserInfo from '../UserInfo';
import { Chat, MyMessage, OtherMessage, OtherMessageContainer, MessageTime, EmojiPicker } from './style';

interface ChatProps {
  currentUserId: number;
  messages: { userId: number; content: string; time: string; emoji?: string; }[];
  getProfileImage: (index: number) => JSX.Element | null;
}

const getDayLabel = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const day = date.toLocaleDateString('ko-KR', options);
  return `(${day.charAt(0)})`;
};

const emojiList = ['👍🏻', '🩷', '😍', '😄', '😯', '😢', '😡'];

const Chats = forwardRef<HTMLDivElement, ChatProps>(({ currentUserId, messages, getProfileImage }, ref) => {
  const [selectedEmoji, setSelectedEmoji] = useState<{ [key: number]: string }>({});
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const storedEmojis = localStorage.getItem('selectedEmojis');
    if (storedEmojis) {
      setSelectedEmoji(JSON.parse(storedEmojis));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(selectedEmoji).length > 0) {
      localStorage.setItem('selectedEmojis', JSON.stringify(selectedEmoji));
    }
  }, [selectedEmoji]);

  const handleEmojiClick = (index: number, emoji: string) => {
    setSelectedEmoji((prev) => ({ ...prev, [index]: emoji }));
    setVisibleEmojiPicker((prev) => ({ ...prev, [index]: false }));
  };

  const toggleEmojiPicker = (index: number) => {
    setVisibleEmojiPicker((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleEmojiDoubleClick = (index: number) => {
    setSelectedEmoji((prev) => {
      const newSelectedEmoji = { ...prev };
      if (newSelectedEmoji[index]) {
        delete newSelectedEmoji[index];
      }
      localStorage.setItem('selectedEmojis', JSON.stringify(newSelectedEmoji));
      return newSelectedEmoji;
    });
  };

  const updateMessageWithEmoji = (index: number, content: string, emoji?: string) => {
    if (emoji) {
      return `${content} ${emoji}`;
    }
    return content;
  };

  const handleMessageDoubleClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    handleEmojiDoubleClick(index);
  };

  const handleMessageClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    event.preventDefault();
    toggleEmojiPicker(index);
  };

  return (
    <Chat ref={ref}>
      <UserInfo id={currentUserId} />
      {messages.map((msg, index) => {
        const isMyMessage = msg.userId === currentUserId;

        const currentTime = new Date(msg.time);
        const previousTime = index > 0 ? new Date(messages[index - 1].time) : null;

        const shouldShowTime = index === 0 ||
          (previousTime && currentTime.toLocaleDateString() !== previousTime.toLocaleDateString()) ||
          (previousTime && (currentTime.getTime() - previousTime.getTime() > 1800000)) ||
          (previousTime && (msg.userId === messages[index - 1].userId &&
          currentTime.getTime() - previousTime.getTime() > 10 * 1000));

        const isFirstMessage = shouldShowTime || index === 0 || messages[index - 1]?.userId !== msg.userId;

        const isLastBeforeTimeMessage = shouldShowTime && index > 0 && messages[index - 1]?.userId === msg.userId;

        const isLastOtherMessage =
          !isMyMessage &&
          (isLastBeforeTimeMessage || index === messages.length - 1 || messages[index + 1]?.userId === currentUserId);

        const isGroupEnd = isLastBeforeTimeMessage || index === messages.length - 1 || messages[index + 1]?.userId !== msg.userId;

        const isMiddleMessage = !isFirstMessage && !isGroupEnd;

        const emoji = selectedEmoji[index];

        return (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: isMyMessage ? 'flex-end' : 'flex-start' }}>
            {shouldShowTime && (
              <MessageTime>
                {`${getDayLabel(currentTime)} ${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
              </MessageTime>
            )}
            <div onClick={(event) => handleMessageClick(event, index)} style={{ cursor: 'pointer' }}>
              {isMyMessage ? (
                <MyMessage
                  $isFirstMessage={isFirstMessage}
                  $isGroupEnd={isGroupEnd}
                  $isMiddleMessage={isMiddleMessage}
                  onDoubleClick={(event) => handleMessageDoubleClick(index, event)}
                >
                  {updateMessageWithEmoji(index, msg.content, emoji)}
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
                    onDoubleClick={(event) => handleMessageDoubleClick(index, event)}
                  >
                    {updateMessageWithEmoji(index, msg.content, emoji)}
                  </OtherMessage>
                </OtherMessageContainer>
              )}
            </div>
            {visibleEmojiPicker[index] && (
              <EmojiPicker>
                {emojiList.map((emoji, emojiIndex) => (
                  <span key={emojiIndex} onClick={() => handleEmojiClick(index, emoji)}>
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
