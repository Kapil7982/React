import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
`;

const UsersSection = styled.section`
  flex: 1;
  padding-right: 20px;
  max-width: 300px;
  
`;

const PostsSection = styled.section`
  flex: 2;
  padding-left: 20px;
`;

const UserPost = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.color};
  padding: 10px;
  margin-bottom: 10px;
  height:97px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserPostContent = styled.div`
  flex: 1;
`;

const PostItem = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.color};
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: column;
`;

const PostTitle = styled.h3`
  margin-bottom: 5px;
`;

const PostContent = styled.p`
  margin: 0;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.span`
  margin-right: 4px;
  color: gold; 
`;

const users = [
    { id: 1, name: 'Dhanush', avatar: 'https://cdn.gulte.com/wp-content/uploads/2021/12/Dhanush.jpg' },
    { id: 2, name: 'Tom curse', avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg' },
    { id: 3, name: 'Varun Dahwan', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG5MYfo-XXC2nPjAR7UR960y6_TGkH7wFfg&usqp=CAU' },
    { id: 4, name: 'Captain America', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_maYvC6t4IoKYnNqhDKEXmmnfGni8iPJnKA&usqp=CAU' },
    { id: 5, name: 'Thanos', avatar: 'https://elgoog.im/assets/img/thanos.jpg' },
];

  const posts = [
    { id: 1, title: 'Dhanush', content: 'Soundaryas reacts to sister Aishwaryaa-Dhanushs divorce' , rating: 4},
    { id: 2, title: 'Tom curse', content: 'om Cruise is about to blast back into our lives in “Mission: Impossible — Dead Reckoning Part One"' , rating: 4 },
    { id: 3, title: 'Varun Dahwan', content: 'Varun in his new birthday post shared several pictures with his wife Natasha Dalal and friends.', rating: 4 },
    { id: 4, title: 'Captain America', content: 'This is the line that fans had been waiting for with bated breath since the first Avengers movie' , rating: 4},
    { id: 5, title: 'Thanos', content: 'Endgame Proved The Avengers Post-Credits Court Death" Line Was Right', rating: 4 },
    
  ];

  function renderStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<StarIcon key={i}>&#9733;</StarIcon>); 
    }
    return stars;
  }

function Dashboard() {
  return (
    <DashboardContainer>
      <UsersSection>
        
          Active Users
          {users.map(user => (
            <UserPost key={user.id}>
              <Avatar src={user.avatar} alt={user.name} />
              <UserPostContent>{user.name}</UserPostContent>
            </UserPost>
          ))}
    
      </UsersSection>
      <PostsSection>
      
         Posts and Reviews
          {posts.map(post => (
            <PostItem key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              
              <PostContent>{post.content}</PostContent>

              <StarRating>{renderStars(post.rating)}</StarRating>
            </PostItem>
          ))}
       
      </PostsSection>
    </DashboardContainer>
  );
}

export default Dashboard;




