import { useEffect, useState } from 'react';
import { usersActionLoadUserData } from './users.action';
import { UsersAllContainer } from './frame/users-all/users-all.container';

export function UsersContainer() {
  const [usersData, setUsersData] = useState(null);
  useEffect(async () => {
    setUsersData(await usersActionLoadUserData());
  }, []);
  return (
    <UsersAllContainer
      userData={usersData}
    />
  );
}
