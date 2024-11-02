import React from "react";
import { PageContainer } from "../FriendListPage/style";
import BottomNav from "../../components/BottomNav";
import LoadingSpinner from "./LoadingSpinner";

const StoryPage: React.FC = () => {
    return (
      <PageContainer>
        <LoadingSpinner/>
        <BottomNav/>
      </PageContainer>
    );
  };
  
  export default StoryPage;