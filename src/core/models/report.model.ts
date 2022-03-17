export class ReportModel {
  userReportId = 5;
  reportedByUserId = 1;
  reportedUserId = 4;
  firstName = '';
  lastName = '';
  reportType = '';
  totalReports = 4;
  totalOffenses = 0;
}

export class MatchStatsModel {
  summary = {
    totalMatches: 0,
    weekMatches: 0,
    monthMatches: 0,
  };
  avg = {
    avgMessagesPerMatch: 0,
    avgTimesPrevueUpdated: 0,
    percentMatchesWithNoMessages: 0,
    percentPrevuesFullyWatched: 0,
    totalPrevuesReported: 0,
    totalPrevuesViewed: 0
  }
}

export class MessageHistoryModel {
  userId = 4;
  firstName = '';
  lastName = '';
  isDeactivated = 0;
  isDeleted = 0;
  profilePicUrl = '';
  isSuspended = 1;
  isBlocked = 0;
  recipientUserId = 1;
  recipientFirstName = '';
  recipientLastName = '';
  recipientIsDeactivated = 0;
  recipientIsDeleted = 0;
  recipientProfilePicUrl = '';
  recipientIsSuspended = 0;
  recipientIsBlocked = 0;
  content = '';
  timeCreated = '';
}

export interface IStats {
  year: number;
  month: number;
  total: number;
}

export class UsersStatsModel {
  summary: {
    allUsers: IStats[];
    activeUsers: IStats[];
  } = { allUsers: [], activeUsers: [] };
  avg = {
    likesGiven: 0,
    nextsGiven:0,
    avgMatchPerUser:0,
    avgAge: 0,
    avgAgeRange: 0,
    avgShowMeMen: '',
    avgShowMeWomen: '',
    avgShowMeEveryone: '',
    avgGenderMen: '',
    avgGenderWomen: '',
    avgGenderNonBinary: '',
    avgGenderUnknown: '',
    avgGenderOther: '',
  }
};


export class UserMessageModel {
  userId = 1;
  firstName = '';
  lastName = '';
  isDeactivated = 0;
  isDeleted = 0;
  profilePicUrl = '';
  isSuspended = 0;
  isBlocked = 0;
  recipientUserId = 4;
  recipientFirstName = '';
  recipientLastName = '';
  recipientIsDeactivated = 0;
  recipientIsDeleted = 0;
  recipientProfilePicUrl = '';
  recipientIsSuspended = 1;
  recipientIsBlocked = 0;
  content = '';
  timeCreated = '';
}

export interface IUserMessagesParams { userId: number, recipientUserId: number }

export type ReportStateModel =
  | ReportModel
  | MatchStatsModel
  | MessageHistoryModel | UsersStatsModel;

