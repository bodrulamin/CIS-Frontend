export enum ShoutStatus {
    pending, started, completed
}

export class Shout {
    id: number = 0
    shouterId: number = 0
    actionTakerId = 0;
    categoryId = 0;
    shoutTitle = '';
    shoutmessage = '';
    address = ''
    status = ShoutStatus.pending;
    isReadmore = true;
}