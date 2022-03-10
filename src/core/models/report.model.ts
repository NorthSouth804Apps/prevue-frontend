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
};

export type ReportStateModel =
  | ReportModel
  | MatchStatsModel
  | MessageHistoryModel | UsersStatsModel;
