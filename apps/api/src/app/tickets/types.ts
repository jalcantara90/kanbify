export enum TaskState {
  TODO = 'TODO',
  INPROGRESS = 'IN_PROGRESS',
  BLOCKED = 'BLOCKED',
  TOREVIEW = 'TO_REVIEW',
  COMPLETE = 'COMPLETE',
  CLOSED = 'CLOSED'
}

export type TaskStateType = `${TaskState}`;
