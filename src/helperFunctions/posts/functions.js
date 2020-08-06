export const filteredUsers = usersList =>
  !usersList ? [] : usersList.map(user => mapUserForSelection(user));

export const mapUserForSelection = ({ id, name }) => ({
  value: id,
  description: name
});

export const filteredPosts = (postsList, user) =>
  !user ? postsList : postsList.filter(post => relationBetween(post, user));

export const relationBetween = (post, user) => post.userId === user.value;
