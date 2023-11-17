import { achievementFields } from 'src/achievement/achievement.object';

export const userFields = {
  id: true,
  firstName: true,
  surName: true,
  email: true,
  avatarPath: true,
  city: true,
  achievements: {
    select: achievementFields,
  },
};
