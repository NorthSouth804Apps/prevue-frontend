export class UserModel {
  firstName = '';
  lastName = '';
  userProfileId = 0;
  userId = 0;
  bio = '';
  birthDate?: Date;
  age = 0;
  gender = '';
  genderOther = '';
  lookingFor = '';
  ageRangeMin = 0;
  ageRangeMax = 0;
  showMe = '';
  occupation = '';
  zipCode = '';
  lat = '';
  long = '';
  proximity = 0;
  profilePicUrl = '';
  pitchUrl = '';
  notifyNewMatch = 0;
  notifyNewMessage = 0;
  notifyDirectPitch = 0;
  notifyCalls = 0;
  isBlocked = 0;
  isSuspended = 1;
  timeCreated?: Date;
  timeUpdated?: Date;
  userMatches = 0;
};

export class UserMediaModel  {
  userMediaId = 1;
  userId = 2;
  contentType?: 'PHOTO' | 'VIDEO';
  contentUrl = '';
  isDeleted = 0;
  timeCreated?: Date;
  timeUpdated?: Date;
};
